from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import WaitListSerializer
from rest_framework import status
import requests
import os
from datetime import datetime, timezone


AIRTABLE_TOKEN = os.getenv('AIRTABLE_TOKEN')
AIRTABLE_BASE_ID = os.getenv('AIRTABLE_BASE_ID')
AIRTABLE_TABLE_NAME = os.getenv('AIRTABLE_TABLE_NAME')


def save_to_airtable(email, phone):
    url = f"https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/{AIRTABLE_TABLE_NAME}"
    headers = {
        "Authorization": f"Bearer {AIRTABLE_TOKEN}",
        "Content-Type": "application/json",
    }
    payload = {
        "fields": {
            "Email": email,
            "Phone": phone,
            "Joined At": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z"),
        }
    }
    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()


class WaitListView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = WaitListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            try:
                save_to_airtable(
                    email=serializer.validated_data['email'],
                    phone=serializer.validated_data['phone'],
                )
            except Exception as e:
                print(f"Airtable sync failed: {e}")
            return Response(
                {"message": "You have been added to the waitlist"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
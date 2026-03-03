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


def save_to_airtable(table_name, fields):
    url = f"https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/{requests.utils.quote(table_name)}"
    headers = {"Authorization": f"Bearer {AIRTABLE_TOKEN}", "Content-Type": "application/json"}
    fields["Joined At"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    response = requests.post(url, json={"fields": fields}, headers=headers)
    response.raise_for_status()


class WaitListView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = WaitListSerializer(data=request.data)
        if serializer.is_valid():
            try:
                save_to_airtable("Courtify Waitlist", {
                    "Email": serializer.validated_data['email'],
                    "Phone": serializer.validated_data['phone'],
                })
            except Exception as e:
                print(f"Airtable sync failed: {e}")
                return Response({"message": "Failed to join waitlist"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            return Response({"message": "You have been added to the waitlist"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CourtWaitListView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        required = ['name', 'email', 'phone', 'court_name', 'city', 'sports_offered']
        errors = {f: ['This field is required.'] for f in required if not data.get(f)}
        if errors:
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)
        try:
            save_to_airtable("Court Partners Waitlist", {
                "Name": data['name'],
                "Email": data['email'],
                "Phone": data['phone'],
                "Court Name": data['court_name'],
                "City": data['city'],
                "Number of Courts": int(data.get('number_of_courts', 1)),
                "Sports Offered": data['sports_offered'],
            })
        except Exception as e:
            print(f"Airtable sync failed: {e}")
            return Response({"message": "Failed to submit"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({"message": "Thank you! We'll be in touch soon."}, status=status.HTTP_201_CREATED)


class CoachWaitListView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        required = ['name', 'email', 'phone', 'sport', 'city']
        errors = {f: ['This field is required.'] for f in required if not data.get(f)}
        if errors:
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)
        try:
            save_to_airtable("Coaches Waitlist", {
                "Name": data['name'],
                "Email": data['email'],
                "Phone": data['phone'],
                "Sport": data['sport'],
                "Experience (Years)": int(data.get('experience_years', 0)),
                "City": data['city'],
            })
        except Exception as e:
            print(f"Airtable sync failed: {e}")
            return Response({"message": "Failed to submit"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({"message": "Thank you! We'll be in touch soon."}, status=status.HTTP_201_CREATED)
    
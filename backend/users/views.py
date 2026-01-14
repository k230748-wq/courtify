from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import WaitListSerializer
from rest_framework import status

class WaitListView(APIView):
    permission_classes = [AllowAny]  
    def post(self,request):
        serializer =  WaitListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "You have been added to the waitlist"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
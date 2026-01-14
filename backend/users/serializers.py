from rest_framework import serializers
from .models import UserWaitlist
class WaitListSerializer(serializers.ModelSerializer):
    class Meta:
        model= UserWaitlist
        fields = ["email","phone"]
    
    def validate_phone(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        return value
    
    def create(self,validated_data):
        new_user = UserWaitlist.objects.create(
            email=validated_data["email"],
            phone=validated_data["phone"]
            )
        return new_user
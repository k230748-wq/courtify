from rest_framework import serializers
from .models import UserWaitlist
class WaitListSerializer(serializers.ModelSerializer):
    class Meta:
        model= UserWaitlist
        fields = ["email","phone"]
    
    def validate_phone(self, value):
        if not value.startswith("+") and not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits or start with '+'.")
    
        num = value[1:] if value.startswith("+") else value
        if not num.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits after '+'.")
    
        return value

    def create(self,validated_data):
        new_user = UserWaitlist.objects.create(
            email=validated_data["email"],
            phone=validated_data["phone"]
            )
        return new_user
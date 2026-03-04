from rest_framework import serializers


class WaitListSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)

    def validate_phone(self, value):
        num = value[1:] if value.startswith("+") else value
        if not num.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        return value
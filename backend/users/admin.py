from django.contrib import admin
from .models import UserWaitlist


@admin.register(UserWaitlist)
class UserWaitlistAdmin(admin.ModelAdmin):
    list_display = ('email', 'phone', 'created_at')
    search_fields = ('email', 'phone')
    ordering = ('-created_at',)

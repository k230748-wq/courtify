from django.urls import path
from .views import WaitListView

urlpatterns = [
    path('waitlist/', WaitListView.as_view(), name='waitlist'),
]

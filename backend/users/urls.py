from django.urls import path
from .views import WaitListView, CourtWaitListView, CoachWaitListView, WaitlistCountView

urlpatterns = [
    path('waitlist/', WaitListView.as_view(), name='waitlist'),
    path('waitlist-count/', WaitlistCountView.as_view(), name='waitlist-count'),
    path('court-waitlist/', CourtWaitListView.as_view(), name='court-waitlist'),
    path('coach-waitlist/', CoachWaitListView.as_view(), name='coach-waitlist'),
]

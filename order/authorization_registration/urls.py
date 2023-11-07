from django.urls import path
from .views import *

app_name = 'registration'

urlpatterns = [
    path('profile/', profile_view, name='profile'),
    path('registration/', RegisterView.as_view(), name='registration')
]
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout




# Create your views here.




def profile_view(request):
    if request.user.is_authenticated:
        return render(request, 'registration/profile.html')
    else: 
        return redirect('login')

def user_login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('profile')

        else:
            return render(request, 'registration/login.html', context={'error': 'Такого пользователя не существует!'})
    return render(request, 'registration/login.html')


def register_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password1')
        password2 = request.POST.get('password2')
        email = request.POST.get('email')
        
        if password == password2:
            userobj = User.objects.create(username=username, email=email)
            userobj.set_password(password)
            userobj.save()
            return redirect('login')
        
        else:
            return render(request, 'registration/registration.html', context={'error':'Введенные пароли не совпадают!'})
        
    return render(request, 'registration/registration.html')

def logout_view(request):
    logout(request)
    return redirect('login')
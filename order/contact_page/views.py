from django.shortcuts import render

# Create your views here.
def contact_page(request):
    return render(request, 'contact_page/contact_page.html')
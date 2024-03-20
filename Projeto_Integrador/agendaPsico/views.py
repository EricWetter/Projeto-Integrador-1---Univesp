from django.shortcuts import render
from django.http import request, HttpResponse

# Create your views here.

def index(request):
    return render(request, 'html/index.html')

def agenda(request):
    return render(request, 'html/agenda.html')

def paciente(request):
    return render(request, 'html/paciente.html')

def anotação(request):
    return render(request, 'html/anotação.html')

def plano_trabalho(request):
    return render(request, 'html/plano_trabalho.html')
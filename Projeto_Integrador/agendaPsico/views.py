from django.shortcuts import render, redirect, get_object_or_404
from django.http import request, HttpResponse
from django.urls import reverse
from .models import Paciente, Anotação
from .forms import Paciente_Form, Anotação_Form


# Create your views here.

def index(request):
    return render(request, 'html/index.html')

def agenda(request):
    return render(request, 'html/agenda.html')

def paciente(request):
    search = request.GET.get('search')
    if search:
        pacientes = Paciente.objects.filter(nome_paciente__icontains=search)

    else:

        pacientes = Paciente.objects.all()
    return render(request, 'html/paciente.html', {'pacientes': pacientes})

def plano_trabalho(request):
    return render(request, 'html/plano_trabalho.html')

def cadastro_paciente(request):
    if request.method == 'POST':
        form = Paciente_Form(request.POST)
        if form.is_valid():
            cadastro = form.save(commit=False)
            cadastro.save()
            return redirect('paciente')
    else:
        form = Paciente_Form()
        return render(request, 'html/cadastro_paciente.html', {'form': form})
    
def paciente_dados(request, id):
    dados = Paciente.objects.filter(pk=id)
    return render(request, 'html/paciente_dados.html', {'dados': dados})

def editar_paciente(request, id):
    paciente = get_object_or_404(Paciente, pk=id)
    form = Paciente_Form(instance=paciente)
    if(request.method == 'POST'):
        form = Paciente_Form(request.POST, instance=paciente)
        if form.is_valid():
            paciente.save()
            return redirect(reverse('paciente_dados', kwargs={'id': id}))
        else:
            return render(request, 'html/editar_paciente.html', {'form': form, 'paciente': paciente})    
    else:
        return render(request, 'html/editar_paciente.html', {'form': form, 'paciente': paciente})
    
def anotação(request):
    pacientes = Paciente.objects.all()
    return render(request, 'html/anotação.html', {'pacientes': pacientes})

def anotação_dados(request, id):
    paciente = get_object_or_404(Paciente, pk=id)
    anotações = Anotação.objects.filter(paciente=id)
    return render(request, 'html/anotação_dados.html', {'anotações': anotações, 'paciente': paciente})

def anotação_nova(request):
    if request.method == 'POST':
        form = Anotação_Form(request.POST)
        if form.is_valid():
            form.save()
            return redirect('anotação')
    else:
        form = Anotação_Form()
        return render(request, 'html/anotação_nova.html', {'form': form})
    
def editar_anotação(request, id):
    registro = get_object_or_404(Anotação, pk=id)
    paciente = registro.paciente.pk
    form = Anotação_Form(instance=registro)
    if(request.method == 'POST'):
        form = Anotação_Form(request.POST, instance=registro)
        if form.is_valid():
            registro.save()
            return redirect(reverse('anotação_dados', kwargs={'id': paciente}))
        else:
            return render(request, 'html/editar_anotação.html', {'form': form, 'registro': registro})    
    else:
        return render(request, 'html/editar_anotação.html', {'form': form, 'registro': registro})
    
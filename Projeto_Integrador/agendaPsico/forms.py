from django import forms
from .models import Paciente, Anotação, Agenda

class Paciente_Form(forms.ModelForm):

    class Meta:
        model = Paciente
        fields = ('nome_paciente',
                  'nascimento_paciente',
                  'telefone_paciente',
                  'responsável',
                  'início_tratamento',
                  'término_tratamento',
                  'endereço',
                  'número',
                  'cidade',
                  'estado',
                )
        widgets = {
            'nome_paciente': forms.TextInput(attrs={'class': 'form-control'}),
            'nascimento_paciente':forms.DateInput(attrs={'class': 'form-control'}),
            'telefone_paciente':forms.TextInput(attrs={'class': 'form-control'}),
            'responsável':forms.TextInput(attrs={'class': 'form-control'}),
            'início_tratamento':forms.DateInput(attrs={'class': 'form-control'}),
            'término_tratamento':forms.DateInput(attrs={'class': 'form-control'}),
            'endereço':forms.TextInput(attrs={'class': 'form-control'}),
            'número':forms.TextInput(attrs={'class': 'form-control'}),
            'cidade':forms.TextInput(attrs={'class': 'form-control'}),
            'estado':forms.TextInput(attrs={'class': 'form-control'}), 
        }

class Anotação_Form(forms.ModelForm):
    
    class Meta:
        model = Anotação
        fields = ('registro',)
        widgets = {
            'registro': forms.TextInput(attrs={'class': 'form-control'}),
        }

class Agenda_Form(forms.ModelForm):

    class Meta:
        model = Agenda
        fields = ('tarefa', 'data_tarefa',)
        widgets = {
            'tarefa': forms.TextInput(attrs={'class': 'taskInput'}),
            'data_tarefa': forms.DateInput(attrs={'class': 'taskInput'}),
        }

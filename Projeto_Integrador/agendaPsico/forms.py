from django import forms
from .models import Paciente, Anotação

class Paciente_Form(forms.ModelForm):

    class Meta:
        model = Paciente
        fields = ('nome_paciente',
                  'nascimento_paciente',
                  'telefone_paciente',
                  'nome_mãe',
                  'telefone_mãe',
                  'nome_pai',
                  'telefone_pai',
                  'início_tratamento',
                  'término_tratamento',
                  'endereço',
                  'número',
                  'cidade',
                  'estado',
                )
        

class Anotação_Form(forms.ModelForm):
    
    class Meta:
        model = Anotação
        fields = ('paciente',
                  'registro',
                )

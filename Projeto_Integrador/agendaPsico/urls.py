from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Agenda', views.agenda, name='agenda'),
    path('Anotação', views.anotação, name='anotação'),
    path('Paciente', views.paciente, name='paciente'),
    path('Paciente_Dados/<int:id>', views.paciente_dados, name='paciente_dados'),
    path('Plano_de_Trabalho', views.plano_trabalho, name='plano_trabalho'),
    path('Cadastro_Paciente', views.cadastro_paciente, name='cadastro_paciente'),
    path('Paciente_Dados/Editar_Paciente/<int:id>', views.editar_paciente, name='editar_paciente'),    
]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Agenda', views.agenda, name='agenda'),
    path('Paciente', views.paciente, name='paciente'),
    path('Paciente_Dados/<int:id>', views.paciente_dados, name='paciente_dados'),
    path('Cadastro_Paciente', views.cadastro_paciente, name='cadastro_paciente'),
    path('Paciente_Dados/Editar_Paciente/<int:id>', views.editar_paciente, name='editar_paciente'),
    path('Plano_de_Trabalho', views.plano_trabalho, name='plano_trabalho'),
    path('Anotação', views.anotação, name='anotação'),
    path('Anotação_Dados/<int:id>', views.anotação_dados, name='anotação_dados'),
    path('Anotação_Nova', views.anotação_nova, name='anotação_nova'),    
]
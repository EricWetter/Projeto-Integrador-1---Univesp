from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Agenda', views.agenda, name='agenda'),
    path('Agenda_Ver', views.agenda_ver, name='agenda_ver'),
    path('Editar_Agenda/<int:id>', views.editar_agenda, name='editar_agenda'),
    path('Agenda_Excluir/<int:id>', views.agenda_excluir, name='agenda_excluir'),
    path('Paciente', views.paciente, name='paciente'),
    path('Paciente_Dados/<int:id>', views.paciente_dados, name='paciente_dados'),
    path('Cadastro_Paciente', views.cadastro_paciente, name='cadastro_paciente'),
    path('Paciente_Dados/Editar_Paciente/<int:id>', views.editar_paciente, name='editar_paciente'),
    path('Plano_de_Trabalho', views.plano_trabalho, name='plano_trabalho'),
    path('Anotação', views.anotação, name='anotação'),
    path('Anotação_Dados/<int:id>', views.anotação_dados, name='anotação_dados'),
    path('Anotação_Nova/<int:id>', views.anotação_nova, name='anotação_nova'),
    path('Anotação_Dados/Editar_Anotação/<int:id>', views.editar_anotação, name='editar_anotação'),
    path('Editar_Anotação<int:id>', views.editar_anotação, name='editar_anotação'),
    path('Anotação_Dados/Anotação_Excluir/<int:id>', views.anotação_excluir, name='anotação_excluir'),
    path('Paciente_Dados/Paciente_Excluir/<int:id>', views.paciente_excluir, name='paciente_excluir'),    
]
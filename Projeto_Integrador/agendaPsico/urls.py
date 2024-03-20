from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Agenda', views.agenda, name='agenda'),
    path('Anotação', views.anotação, name='anotação'),
    path('Paciente', views.paciente, name='paciente'),
    path('Plano_de_Trabalho', views.plano_trabalho, name='plano_trabalho'),    
]
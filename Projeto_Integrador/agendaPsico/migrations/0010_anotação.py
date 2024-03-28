# Generated by Django 5.0.3 on 2024-03-27 01:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agendaPsico', '0009_auto_20240327_0142'),
    ]

    operations = [
        migrations.CreateModel(
            name='Anotação',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registro', models.TextField()),
                ('data', models.DateTimeField(auto_now_add=True)),
                ('paciente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='agendaPsico.paciente')),
            ],
        ),
    ]

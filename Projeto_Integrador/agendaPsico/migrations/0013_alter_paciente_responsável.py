# Generated by Django 5.0.3 on 2024-03-29 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agendaPsico', '0012_alter_paciente_responsável'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='responsável',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]

# Generated by Django 5.0.3 on 2024-03-24 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agendaPsico', '0003_alter_paciente_cidade_alter_paciente_endereço_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='cidade',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='endereço',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='estado',
            field=models.CharField(blank=True, max_length=2),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='início_tratamento',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='nascimento_paciente',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='nome_mãe',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='nome_pai',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='número',
            field=models.CharField(blank=True, max_length=11),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='telefone_mãe',
            field=models.CharField(blank=True, max_length=11),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='telefone_paciente',
            field=models.CharField(blank=True, max_length=11),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='telefone_pai',
            field=models.CharField(blank=True, max_length=11),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='término_tratamento',
            field=models.DateField(blank=True),
        ),
    ]

# Generated by Django 4.0.5 on 2022-07-06 18:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_remove_newpost_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='newpost',
            old_name='created',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='newpost',
            old_name='post_image',
            new_name='image',
        ),
    ]
from django.contrib import admin
from .models import User,File


# Register your models here.
@admin.register(User)
class studentAdmin(admin.ModelAdmin):
    list_display=['id','userName','password']

@admin.register(File)
class fileAdmin(admin.ModelAdmin):
    list_display=['id','inputLang','outputLang','audioFile']
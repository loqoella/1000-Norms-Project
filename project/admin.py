from django.contrib import admin

from . import models
# Register your models here.

admin.site.register(models.User)
admin.site.register(models.IMS)
admin.site.register(models.History_IMS)
admin.site.register(models.JF)
admin.site.register(models.History_JF)
admin.site.register(models.FP)
admin.site.register(models.History_FP)
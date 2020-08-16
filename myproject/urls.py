"""myproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from project import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('index/', views.index),
    path('login/', views.login),
    path('login/validate', views.login_validate),
    path('register', views.register),
    path('logout', views.logout),
    path('physical_outcome_measures/', views.pom),
    path('measurement_research/', views.mr),
    path('self-reported_measures/', views.sfm),
    path('contact/', views.contact),
    path('ims/submit', views.ims_submit),
    path('ims/', views.ims),
    path('jf/submit', views.jf_submit),
    path('jf/', views.jf),
    path('fp/submit', views.fp_submit),
    path('fp/', views.fp),
    path('history/get', views.history_get),
    path('history/', views.history),
]
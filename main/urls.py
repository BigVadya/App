from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path("mentor/1/", views.ilon, name="1"),
    path("mentor/2/", views.dom, name="2"),
    path("mentor/3/", views.besos, name="3"),
    path("mentor/4/", views.bill, name="4"),
    path("mentor/5/", views.mark, name="5"),
    path("mentor/6/", views.ophra, name="6"),
    path("mentor/7/", views.obama, name="7"),
    path("mentor/8/", views.einstein, name="8"),
    path("mentor/9/", views.chanel, name="9"),
    path("mentor/10/", views.nelson, name="10"),
]

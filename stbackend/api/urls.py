from django.urls import path
from api import views


urlpatterns = [
    path('user',views.UserView.as_view()),  
    path('list',views.UserView.as_view()),
    path('upload',views.FileView.as_view()),
    path('get_file',views.FileView.as_view()),


     
] 

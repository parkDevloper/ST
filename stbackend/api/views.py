

from api import serializers
from rest_framework.response import Response
from api.models import User,File
from api.serializers import UserSerializer,FileSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.db import connection     #raw sql
from django.conf import settings     #getting base_dir for audio



class UserView(APIView):
    def post(self,request,format=None):
        data=request.data
        username=data['userName']
        password=data['password']

        serializer = UserSerializer(data=request.data)
        print("post hitted")
        if serializer.is_valid():
            # serializer.save()
            userdata=User.objects.filter(userName=username,password=password).values()
            if(userdata):
                return Response({'msg':'success'})
            else:
                return Response({'msg':'failed'})

            ''' ----------------------------------------------don't remove ------------------------------------
            akash=userdata[0].values()
            print("values=",akash)
            
            a=list(akash)
            # print(a)
            dbusername=a[1]
            dbpass=a[2]
            if dbusername== username and dbpass == password:
                print(dbusername,dbpass)
'''
            # return Response({'msg':'Success msg from backend','ststus':'success','user':serializer.data},status=status.HTTP_201_CREATED)
            
           
        print(serializer)
        
        return Response(serializer.errors)

    def get(self,request,format=None):
        user=User.objects.all()
        serializer = UserSerializer(user,many=True)
        return Response({'msg':'Success get ','ststus':'success','user':serializer.data},status=status.HTTP_200_OK) 



class FileView(APIView):
    def post(self,request,format=None):
        serializer = FileSerializer(data=request.data)
       # print(serializer.data)
        print('ok1')
        print(serializer)
        if(serializer . is_valid()):
            # serializer.save()
            print('ok')

            cursor=connection.cursor()
            cursor.execute("select inputLang , outputLang ,audioFile from api_file WHERE id=(SELECT max(id) from api_file)")
            row = cursor.fetchall()
            a=list(row)
            b=list(a[0])

            inputLang=b[0]
            outputLang=b[1]
            audioFileLink= str(settings.MEDIA_ROOT)+'/'+b[2]
            print('inputLang= {} \n outputLang={} \n audioFileLink ={} \n '.format(inputLang,outputLang,audioFileLink))


            '''-----------------------------------take above var as input (inputLang,outputLang,audioFileLink) and set res var to return var---------------------------'''





















                                                                                                                  #***********
            return Response({'msg': 'File uploaded successfully','status':'success','File':serializer.data,'output':'DIpak hita tuza data var tak'},status=status.HTTP_201_CREATED)
        return Response({'msg':'failed','status':'failed'})


    def get(self,request,format=None):
        file=File.objects.all()
        serializer = FileSerializer(file,many=True)
        
        return Response({'msg': 'File found successfully','status':'success','File':serializer.data},status=status.HTTP_201_CREATED)


    













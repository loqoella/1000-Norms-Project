from django.shortcuts import render,redirect
from .models import User, IMS, History_IMS, JF, History_JF, FP, History_FP
from django.http import JsonResponse
#from django.core import serializers
import json

# Create your views here.
def index(request):
    pass
    return render(request,'project/index.html')

def pom(request):
    pass
    return render(request,'project/Physical outcome measures.html')

def mr(request):
    pass
    return render(request,'project/measurement research.html')

def sfm(request):
    pass
    return render(request,'project/self-reported measures.html')

def contact(request):
    pass
    return render(request,'project/contact.html')


#--------------------------Login/logout/register--------------------------
def login(request):
    return render(request, 'project/login.html')
 
def login_validate(request):
    if request.method == "POST":
        response_data = {'email_found':'false', 'password_matched':'false'}
        data = json.loads(request.body)
        email = data['email']
        password = data['password']
        print("try login id: "+email+password)
        try:
            user = User.objects.get(email=email)
            response_data['email_found'] = 'true'
            if user.password == password:
                request.session['is_login'] = True
                request.session['user_id'] = user.uid
                request.session['user_name'] = user.username
                request.session['user_email'] = user.email
                response_data['password_matched'] = 'true'
                print("login id: %d" % user.uid)
                return JsonResponse(response_data)
            else:
                return JsonResponse(response_data)
        except:
            return JsonResponse(response_data)
    message = {'err_type':'invalid_request','message':'invalid_request'}
    return JsonResponse(message)

def register(request):
    if request.session.get('is_login',None):
        return redirect('/')

    if request.method == "POST":
        response_data = {'email_exist':'true','register_result':'fail'}
        data = json.loads(request.body)
        email = data['email']
        username = data['username']
        password = data['password']
        print("try register id: "+username+password)
        message = 'all fields should be filled'

        same_email_user = User.objects.filter(email=email)
        if same_email_user:
            return JsonResponse(response_data)

        new_user = User.objects.create()
        new_user.email = email
        new_user.username = username
        new_user.password = password
        new_user.save()
        response_data['email_exist'] = 'false'
        response_data['register_result'] = 'success'
        ''' # automatic login
        request.session['is_login'] = True
        request.session['user_id'] = new_user.uid
        request.session['user_name'] = new_user.username
        #request.session['sex'] = new_user.sex'''
        return JsonResponse(response_data)

    message = {'err_type':'invalid_request','message':'invalid_request'}
    return JsonResponse(message)
 
def logout(request):
    if request.method == "POST":
        if not request.session.get('is_login', None):
            message = {'logout_result':'invalid login state'}
            return JsonResponse(message)
        request.session.flush()
    message = {'logout_result':'success'}
    return JsonResponse(message)


#---------------data API via JSON---------------

def ims(request):
    if not request.session.get('is_login', None):
        return redirect("/login")
    return render(request,'project/isotest.html')

def ims_submit(request):
    if request.method == 'POST':
        return insert_and_response(request, IMS, History_IMS)
    message = {'message':'Request method must be POST','err_type':'invalid_request'}
    return JsonResponse(message)

def jf(request):
    if not request.session.get('is_login', None):
        return redirect("/login")
    return render(request,'project/motiontest.html')

def jf_submit(request):
    if request.method == 'POST':
        return insert_and_response(request, JF, History_JF)
    message = {'message':'Request method must be POST','err_type':'invalid_request'}
    return JsonResponse(message)

def fp(request):
    if not request.session.get('is_login', None):
        return redirect("/login")
    return render(request,'project/functest.html')

def fp_submit(request):
    if request.method == 'POST':
        return insert_and_response(request, FP, History_FP)
    message = {'message':'Request method must be POST','err_type':'invalid_request'}
    return JsonResponse(message)

def history(request):
    if not request.session.get('is_login', None):
        return redirect("/login")
    return render(request,'project/old/history_old.html')

def history_get(request):
    if request.method == 'GET':
        userid = request.session.get('user_id')
        ims_h =retrieve_history(userid, IMS, History_IMS)
        jf_h = retrieve_history(userid, JF, History_JF)
        fp_h = retrieve_history(userid, FP, History_FP)
        integrated_data = {'ims_test_history':ims_h, 'jf_test_history':jf_h, 'fp_test_history':fp_h}
        return JsonResponse(integrated_data, safe=False)
    message = {'message':'Request method must be POST','err_type':'invalid_request'}
    return JsonResponse(message)


#-------------------useful functions--------------------

def retrieve_history(userid, test_model, history_obj):
    #data = history_obj.objects.filter(userid = userid).values()
    userobj = User.objects.get(uid=userid)
    raw_data = list(history_obj.objects.filter(user = userobj).values())
    history_list = []
    for item in raw_data:
        compare_model = test_model.objects.filter(age_group = get_age_group(item['age'])).filter( sex = item['sex']).values()[0]
        del compare_model['id']
        del item['user_id']
        history_item = {'history_item':item, 'compare_model':compare_model}
        history_list.append(history_item)
    return history_list

def insert_and_response(request, test_model, history_obj):
    if not request.session.get('is_login', None):
        message = {'message':'Please login!','err_type':'login'}
        return JsonResponse(message)

    data = json.loads(request.body)    
    userid = request.session.get('user_id')
    userobj = User.objects.get(uid=userid)

    message = {'message':'Invalid age!','err_type':'invalid_input'}
    try:
        age = int(data['age'])
    except:
        return JsonResponse(message)
    if age > 100 or age < 3:
        return JsonResponse(message)

    gender = data['gender']
    message = {'message':'Invalid sex!','err_type':'invalid_input'}
    try:
        if gender != 'male' and gender != 'female':
            return JsonResponse(message)
    except:
        return JsonResponse(message)

    del data['gender']
    del data['age']

    age_group = get_age_group(age)
    try:
        compare_model = test_model.objects.filter(age_group = age_group).filter( sex = gender).values()[0]
    except:
        message = {'message':'Invalid compare model!','err_type':'invalid_compare_model'}
        return JsonResponse(message)
    del compare_model['id']
    print("get compare model: ")
    print(compare_model)

    keys = data.keys()
    insert_data = {}
    z_value = 1.96
    for k in keys:
        try:
            if data[k] == '':
                insert_data[k] = 0
            else:
                insert_data[k] = int(data[k])
            lb = compare_model[k + '_mean'] - z_value*compare_model[k + '_sd']
            ub = compare_model[k + '_mean'] + z_value*compare_model[k + '_sd']
            if insert_data[k] < lb:
                insert_data[k+'_eval'] = 'Weak'
            elif insert_data[k] > ub:
                insert_data[k+'_eval'] = 'Strong'
            else:
                insert_data[k+'_eval'] = 'Normal'
        except:
            message = {'message':'Invalid input type!','err_type':'invalid_input'}
            return JsonResponse(message)

    new_history = history_obj(user = userobj, sex = gender, age = age, **insert_data)
    new_history.save()

    new_history = history_obj.objects.filter(id = new_history.id).values()[0]
    print('new history: ')
    print (new_history)
    del new_history['id']
    del new_history['user_id']
    print('print new history:')
    print(new_history)
    print('data saved!')
    response_data = {'user_raw_data':new_history, 'compare_model':compare_model}
    return JsonResponse(response_data)

def get_age_group(age):
    if int(age) < 21:
        return age
    if int(age) >= 100:
        return 100
    return (age-1)//10*10+1

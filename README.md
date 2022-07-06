# DJANGO-REST FRAMEWORK 

# Auth

* Auth işlemlerinde  dj-rest-auth paketi ile ilerliyoruz.
    https://dj-rest-auth.readthedocs.io/en/latest/installation.html

```
pip install dj-rest-auth

INSTALLED_APPS = (
    ...,
    'rest_framework',
    'rest_framework.authtoken',
    ...,
    'dj_rest_auth'
)

urlpatterns = [
    ...,
    path('dj-rest-auth/', include('dj_rest_auth.urls'))
]

python manage.py migrate


```

```
urlpatterns = [
    ...,
    path('dj-rest-auth/', include('dj_rest_auth.urls'))
]
```


```
users/ auth/ password/reset/ [name='rest_password_reset']
users/ auth/ password/reset/confirm/ [name='rest_password_reset_confirm']
users/ auth/ login/ [name='rest_login']
users/ auth/ logout/ [name='rest_logout']
users/ auth/ user/ [name='rest_user_details']
users/ auth/ password/change/ [name='rest_password_change']
```

* Yukarıda register işlemleri harici uygulama mevcut,


* flight app de register işlemni override yaparak devam etmiştik, burada paketin register özelliğini ekliyoruz,

```
pip install 'dj-rest-auth[with_social]'
pip install django-allauth

INSTALLED_APPS = (
    ...,
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'dj_rest_auth.registration',
)

SITE_ID = 1


urlpatterns = [
    ...,
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
]

```

* yukarıdaki işlemleir yaptığımızda token kodu oluşturuyor, register oluyor fakat post işlemi hata ile dönüyor,

```

settigns.py
mail doğrulama özelliğini aktif halegetirmek için

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

mail doğrulamayı iptal etmek için bu kodu kullandık
ACCOUNT_EMAIL_VERIFICATION = 'none'

```

* Google ile login

```

https://github.com/wagnerdelima/drf-social-oauth2

https://django-allauth.readthedocs.io/en/latest/installation.html

https://www.youtube.com/watch?v=NG48CLLsb1A&ab_channel=JustDjangohttps://www.youtube.com/watch?v=NG48CLLsb1A&ab_channel=JustDjango

https://django-allauth.readthedocs.io/en/latest/installation.html

- pip install django-allauth

-  AUTHENTICATION_BACKENDS = [
    ...
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
    ...
]

INSTALLED_APPS = [

    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
]

SITE_ID = 1


urlpatterns = [
    ...
    path('accounts/', include('allauth.urls')),
    ...
]


python manage.py migrate


https://developers.google.com/gmail/api/quickstart/js

- Create a project and enable the API
- Google Cloud console.
- var olan proje içerinden de alınabilir.
- create credentıals/ OAuth client ID 
- Application type / web application
  Authorized JavaScript origins
 	http://127.0.0.1:8000

    save dediğimizde 
Client ID
ve 
Client secret alıp django da 

Social applications
belirtilen yerlereyazıyoruz. 


```
  
your client id 514431124829-t3n8rs4cvt97rd6i4vcpg5gsrobqpp78.apps.googleusercontent.com

your client secret  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



# django-cors-headers 3.13.0

```
python -m pip install django-cors-headers

ALLOWED_HOSTS = ['*']


INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
]

MIDDLEWARE = [
     
     EN ÜSTEN 3. SIRAYA
    "corsheaders.middleware.CorsMiddleware",

    ...,
]



CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
CORS_EXPOSE_HEADERS = (
  'Access-Control-Allow-Origin: *',
)

```
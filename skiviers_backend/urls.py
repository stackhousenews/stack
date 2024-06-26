from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from user_account.views import activateemail
from .views import IndexTemplateView

urlpatterns = [
    path('api/', include('user_account.urls')),
    path('api/content/', include('substack.urls')),
    path('api/posts/', include('post.urls')),
    path('api/search/', include('search.urls')),
    path('api/chat/', include('chat.urls')),
    path('api/notifications/', include('notification.urls')),
    path('activateemail/', activateemail, name='activateemail'),
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    re_path(r"^.*$", IndexTemplateView.as_view(), name="entry-point"),
]







if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
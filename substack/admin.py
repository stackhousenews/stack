from django.contrib import admin

# Register your models here.
from . import models as mds


@admin.register(mds.Source)
class SourceAdmin(admin.ModelAdmin):

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            # Only set created_by during the first save.
            obj.created_by = request.user
        super().save_model(request, obj, form, change)

@admin.register(mds.Story)
class SourceAdmin(admin.ModelAdmin):

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            # Only set created_by during the first save.
            obj.created_by = request.user
        super().save_model(request, obj, form, change)

admin.site.register(mds.SubstackRun)
admin.site.register(mds.Author)
admin.site.register(mds.StoryTag)

from django.apps import AppConfig


class SubstackConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'substack'

    def ready(self):
        import substack.signals

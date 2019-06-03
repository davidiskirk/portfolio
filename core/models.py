from django.db import models

# Create your models here.
class Post(models.Model):
    post = models.CharField(max_length=500),
    image = models.ImageField(upload_to='core/static/img', blank=True),
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
from django.db import models

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE) #faz com que ao deletar ele, delete tudo que tem ele
    title = models.CharField(max_length=100, null=False, blank=False)
    text = models.TextField(null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True) #significa na hora que o objeto pe criado
    updated_date = models.DateTimeField(auto_now=True) #assim que você faz
    
    class Meta: 
        verbose_name = 'Publicação'
        verbose_name_plural = 'Publicações' #avisa ao django que tem o plural

    def __str__(self):
        return self.title
from django.db import models

class Artykul(models.Model):
    tytul = models.CharField(max_length=128)
    opis = models.TextField()

    def __str__(self):
        return self.tytul


from django.db import models

class Listing(models.Model):
    link = models.CharField()
    location = models.CharField(max_length=250)
    description = models.TextField()
    email = models.EmailField()
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.DecimalField()
    price = models.PositiveIntegerField()
    photo = models.CharField("Photo",max_length=300)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name

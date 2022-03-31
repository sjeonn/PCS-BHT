from django.db import models

class Listing(models.Model):
    address = models.CharField("Name", max_length=250)
    email = models.EmailField()
    link = models.CharField("Link", max_length=250)
    price = models.PositiveIntegerField()
    rooms = models.PositiveIntegerField()
    photo = models.CharField("Photo",max_length=300)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name
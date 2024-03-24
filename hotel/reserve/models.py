from django.db import models

class Reservation(models.Model):
    start = models.DateTimeField()
    end = models.DateTimeField()
    title = models.CharField(max_length=100)
    resource = models.ForeignKey('Resource', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Resource(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=7)  # Assuming color is represented as hex code

    def __str__(self):
        return self.name
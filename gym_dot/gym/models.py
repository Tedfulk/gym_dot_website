from django.db import models
from django.contrib.auth.models import AbstractUser


class Owner(AbstractUser):
    def __repr__(self):
        return f"<User username={self.username}>"

    def __str__(self):
        return self.username


class Profile(models.Model):
    owner = models.ForeignKey(
        Owner, on_delete=models.CASCADE, related_name="user_profile"
    )
    profile_pic = models.URLField(max_length=500, blank=True)

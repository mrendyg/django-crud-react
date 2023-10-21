from rest_framework import serializers
from .models import task

class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = task
        # fields = ('id', 'tittle', 'description', 'done')
        fields = '__all__'
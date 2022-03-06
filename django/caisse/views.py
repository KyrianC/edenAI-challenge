from rest_framework import generics

from .models import Product, Receipt
from .serializers import ProductSerializer, ReceiptSerializer


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ReceiptCreate(generics.CreateAPIView):
    queryset = Receipt.objects.all()
    serializer_class = ReceiptSerializer


class ReceiptRetrieve(generics.RetrieveAPIView):
    queryset = Receipt.objects.all()
    serializer_class = ReceiptSerializer
    lookup_field = "id"

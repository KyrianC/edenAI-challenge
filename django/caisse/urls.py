from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.ProductList.as_view(), name="product-list"),
    path("receipt/create/", views.ReceiptCreate.as_view(), name="receipt-create"),
    path("receipt/<int:id>/", views.ReceiptRetrieve.as_view(), name="receipt-retrieve"),
]

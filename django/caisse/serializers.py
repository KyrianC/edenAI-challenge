from rest_framework import serializers

from .models import Product, ReceiptItem, Receipt


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("title", "base_price", "discount")


class ReceiptItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = ReceiptItem
        fields = ("product", "quantity", "price", "scanned_at")


class ReceiptSerializer(serializers.ModelSerializer):
    items = ReceiptItemSerializer(many=True)

    class Meta:
        model = Receipt
        fields = ("items", "total_price", "created")

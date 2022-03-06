from rest_framework import serializers

from .models import Product, ReceiptItem, Receipt


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id", "title", "base_price", "discount")


class ReceiptItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())

    class Meta:
        model = ReceiptItem
        fields = ("id", "product", "product_id", "quantity", "price", "scanned_at")


class ReceiptSerializer(serializers.ModelSerializer):
    items = ReceiptItemSerializer(many=True)

    class Meta:
        model = Receipt
        fields = ("id", "items", "total_price", "created")

    # handle writable nested serialization
    def create(self, validated_data):
        print(validated_data)
        items_data = validated_data.pop("items")
        receipt = Receipt.objects.create(**validated_data)
        for item_data in items_data:
            product = item_data.pop("product_id")
            ReceiptItem.objects.create(receipt=receipt, product=product, **item_data)
        return receipt

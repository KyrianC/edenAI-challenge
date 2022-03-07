from django.db import models

"""
NOTE all prices are integer field for convenience
eg: $1.99 will be 199 in db
"""


class Product(models.Model):
    class DiscountChoices(models.TextChoices):
        PD = "PD", "50% Discount"
        BD = "BD", "2 acheté 1 offert"

    title = models.CharField(max_length=55)
    base_price = models.PositiveIntegerField()
    discount = models.CharField(
        max_length=2, choices=DiscountChoices.choices, null=True, blank=True
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Receipt(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    total_price = models.PositiveIntegerField()


class ReceiptItem(models.Model):
    product = models.ForeignKey(
        Product, related_name="receipt_items", on_delete=models.CASCADE
    )
    receipt = models.ForeignKey(Receipt, related_name="items", on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.PositiveIntegerField()

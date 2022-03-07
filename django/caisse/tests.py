from django.urls.base import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from datetime import datetime

from caisse.models import Receipt, ReceiptItem


class ReceiptTest(APITestCase):
    fixtures = ["caisse.json"]  # load only product model data

    def test_create_receipt(self):
        data = {
            "items": [
                {"product_id": 1, "quantity": 3, "price": 500},
                {"product_id": 2, "quantity": 2, "price": 200},
                {"product_id": 3, "quantity": 3, "price": 180},
                {"product_id": 5, "quantity": 1, "price": 230},
            ],
            "total_price": 2555,
            "created": datetime.now(),
        }
        response = self.client.post(reverse("receipt-create"), data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        receipt = Receipt.objects.first()
        self.assertIsNotNone(receipt)
        self.assertTrue(ReceiptItem.objects.filter(receipt=receipt).exists())

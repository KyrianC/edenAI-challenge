from django.contrib import admin

from caisse.models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "base_price", "discount", "created", "updated")
    list_editable = ("discount", "base_price")
    list_filter = ("discount", "created", "updated")

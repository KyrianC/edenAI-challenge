import type { ProductType } from '@/types/product'
export default function(cart: any) {
    // save to localStorage each time store is modified
    cart.$subscribe((_mutation, state) => {
        localStorage.setItem("cart", JSON.stringify(state));
    });

    const addToCart = (product: ProductType) => {
        cart.count++;
        const cartProduct = cart.products.find((x: ProductType) => x.id == product.id);
        if (cartProduct) {
            cartProduct.quantity++;
        } else {
            cart.products.push({ ...product, quantity: 1 });
        }
    };

    const removeFromCart = (product: ProductType) => {
        cart.count--;
        const cartProduct = cart.products.find((x: ProductType) => x.id == product.id);
        if (cartProduct.quantity > 1) {
            cartProduct.quantity--
        } else {
            cart.products = [...cart.products].filter((x: ProductType) => x.id !== product.id);
        }

    };

    const clearCart = () => {
        localStorage.removeItem('cart')
        cart.$reset()
    };

    return { addToCart, removeFromCart, clearCart }
}

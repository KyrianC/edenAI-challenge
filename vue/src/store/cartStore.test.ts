import { beforeEach, describe, expect, it } from "vitest"
import { useCartStore } from '@/store/cartStore'
import type { ProductType } from '@/types/product'
import { setActivePinia, createPinia } from 'pinia'

const products: ProductType[] = [
    {
        id: 1,
        title: 'tomato',
        base_price: 200,
        quantity: 1
    },
    {
        id: 2,
        title: 'potato',
        base_price: 100,
        quantity: 2
    }
]
const fakeCart = {
    count: 3,
    products: products
}


describe('Cart hooks', () => {
    beforeEach(() => {
        localStorage.clear()
        setActivePinia(createPinia())
    })

    it("should initialize emtpy cart", () => {
        const cart = useCartStore()
        expect(cart.count).toBe(0)
        expect(cart.products.length).toBe(0)
    })

    it("should initialize from localStorage ", () => {
        localStorage.setItem('cart', JSON.stringify(fakeCart))
        const cart = useCartStore()
        expect(cart.count).toBe(3)
        expect(cart.products.length).toBe(2)
    })

    it("add to cart", () => {
        const cart = useCartStore()
        // add one product
        cart.add(products[0])
        expect(cart.count).toBe(1)
        expect(cart.products.length).toBe(1)
        expect(cart.products[0].title).toBe('tomato')
        expect(cart.products[0].quantity).toBe(1)

        // add the same product again
        cart.add(products[0])
        expect(cart.count).toBe(2)
        expect(cart.products.length).toBe(1)
        expect(cart.products[0].quantity).toBe(2)

        // add an other product
        cart.add(products[1])
        expect(cart.count).toBe(3)
        expect(cart.products.length).toBe(2)
    })

    it("remove from cart", () => {
        const cart = useCartStore()
        // add 2 same products
        cart.add(products[0])
        cart.add(products[0])
        // remove 1
        cart.remove(products[0])
        expect(cart.count).toBe(1)
        expect(cart.products.length).toBe(1)
        // remove again, cart should be empty
        cart.remove(products[0])
        expect(cart.count).toBe(0)
        expect(cart.products.length).toBe(0)
    })


    it("clear cart", () => {
        const cart = useCartStore()
        cart.add(products[0])
        cart.add(products[1])

        cart.clear()
        expect(cart.count).toBe(0)
        expect(cart.products.length).toBe(0)
    })

})

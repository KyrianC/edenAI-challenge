import type { ProductType } from '@/types/product'
import { describe, it, expect, fn } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import HelloWorld from '../Product.vue'

const products: ProductType[] = [
    {
        id: 1,
        title: 'tomato',
        base_price: 200,
        quantity: 1,
        discount: 'BD'
    },
    {
        id: 2,
        title: 'potato',
        base_price: 100,
        quantity: 2,
    }
]

describe('Single Product', () => {
    it('renders properly with store', () => {
        const wrapper = mount(HelloWorld, {
            props: { product: products[0] },
            global: {
                plugins: [createTestingPinia({ createSpy: fn })]
            }
        })
        expect(wrapper.text()).toContain('tomato')
    })

    it("should show discount badge", () => {
        const wrapper = mount(HelloWorld, {
            props: { product: products[0] },
            global: {
                plugins: [createTestingPinia({ createSpy: fn })]
            }
        })
        expect(wrapper.find('.discount').exists()).toBe(true)

    })

    it("shouldn't show discount badge", () => {
        const wrapper = mount(HelloWorld, {
            props: { product: products[1] },
            global: {
                plugins: [createTestingPinia({ createSpy: fn })]
            }
        })
        expect(wrapper.find('.discount').exists()).toBe(false)

    })

})

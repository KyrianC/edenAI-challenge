import { describe, it, expect } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('Home', () => {
    it('renders properly', () => {
        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain('Catalogue')
    })

    it('loads products', async () => {
        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain('loading...')
    })
})

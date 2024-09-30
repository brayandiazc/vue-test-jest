import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('renders the counter', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('Counter: 0')
  })

  it('increments the counter when button is clicked', async () => {
    const wrapper = mount(Counter)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('Counter: 1')
  })
})

// Test para el componente 'Counter.vue'.
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

// Bloque de pruebas para el componente 'Counter.vue'.
describe('Counter.vue', () => {
  // Caso de prueba: verifica si el componente renderiza correctamente el contador.
  it('renders the counter', () => {
    const wrapper = mount(Counter)

    // Verifica que el texto renderizado por el componente contenga la cadena 'Counter: 0'.
    expect(wrapper.text()).toContain('Counter: 0')
  })

  // Caso de prueba: verifica si el contador incrementa al hacer clic en el botón.
  it('increments the counter when button is clicked', async () => {
    const wrapper = mount(Counter)

    // Encuentra el botón y simula un clic.
    const button = wrapper.find('button')

    // Simula un clic en el botón.
    await button.trigger('click')

    // Verifica que el contador haya incrementado.
    expect(wrapper.text()).toContain('Counter: 1')
  })
})

// Importa 'shallowMount' desde @vue/test-utils, que se utiliza para montar un componente de manera superficial,
// es decir, sin renderizar sus componentes hijos.
import { shallowMount } from '@vue/test-utils'

// Importa el componente 'HelloWorld' desde la ruta especificada.
import HelloWorld from '@/components/HelloWorld.vue'

// Bloque de pruebas para el componente 'HelloWorld.vue'.
describe('HelloWorld.vue', () => {
  // Caso de prueba: verifica si el componente renderiza correctamente la propiedad 'msg' cuando se le pasa.
  it('renders props.msg when passed', () => {
    // Define el mensaje que será pasado como propiedad.
    const msg = 'new message'

    // Monta el componente 'HelloWorld' utilizando 'shallowMount' y pasa la propiedad 'msg'.
    const wrapper = shallowMount(HelloWorld, {
      props: { msg } // Propiedad 'msg' que recibe el componente.
    })

    // Verifica que el texto renderizado por el componente coincida con el valor de la propiedad 'msg'.
    expect(wrapper.text()).toMatch(msg)
  })
})

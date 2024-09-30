module.exports = {
  // Define el entorno de prueba como 'jsdom', lo que simula un navegador para pruebas de frontend.
  testEnvironment: 'jsdom',

  // Especifica cómo transformar los archivos para que Jest pueda interpretarlos.
  transform: {
    // Usa el transformador '@vue/vue3-jest' para manejar archivos .vue.
    '^.+\\.vue$': '@vue/vue3-jest',
    // Usa 'babel-jest' para transformar archivos .js.
    '^.+\\js$': 'babel-jest'
  },

  // Expresión regular que identifica los archivos de prueba, puede ser archivos con .test o .spec en su nombre y con extensiones .js o .ts.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',

  // Extensiones de archivo que Jest reconocerá y manejará en los módulos importados.
  moduleFileExtensions: ['vue', 'js'],

  // Mapeo de nombres de módulos, permitiendo que '@/' sea equivalente al directorio 'src/'.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // Ignora los directorios 'node_modules' y 'tests' cuando calcula la cobertura del código.
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],

  // Formatos de salida para los reportes de cobertura: en texto legible y en resumen JSON.
  coverageReporters: ['text', 'json-summary'],

  // Opciones adicionales para el entorno de prueba jsdom.
  testEnvironmentOptions: {
    // Define condiciones personalizadas para la exportación de módulos, en este caso, para el entorno de Node.js.
    customExportConditions: ['node', 'node-addons']
  }
}

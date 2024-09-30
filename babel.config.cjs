module.exports = {
  env: {
    // Define una configuración específica para el entorno de prueba ('test').
    test: {
      // Los presets son conjuntos de configuraciones predeterminadas que Babel utiliza para transformar el código.
      presets: [
        [
          // Utiliza el preset '@babel/preset-env', que permite compilar código ECMAScript moderno a una versión compatible con entornos más antiguos.
          '@babel/preset-env',
          {
            // Configura el objetivo de transformación para el entorno Node.js actual.
            targets: {
              node: 'current' // Apunta a la versión actual de Node.js.
            }
          }
        ]
      ]
    }
  }
}

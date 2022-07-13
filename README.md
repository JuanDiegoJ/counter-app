# counter-app
Aplicación básica de React con pruebas básicas unitarias  

Se muestra en el siguiente proyecto: Intalación de Vite con NPM  

Comando para usa: npm install vite  
Comando para crear un proyecto: npm create vite:  
-  Se selecciona todo lo relacionado al proyecto, tipo de proyecto y nombre
-  Se usa el comando: npm install React para crear las dependencias necesarias 

Para escribir una expesión de JS en JSX se usan las {}:  

    <h1>{-Imprime una variable string}</h1>  
    <h1>{-Imprime una variable tipo numérico}</h1>  

Para imprimir un objeto se usa {JSON.stringify( -objeto )}  

Los componentes reciben props (propiedades que se le envían a componentes)  

Para instalar los prop-types se ejecuta el comando: npm install prop-types  
Para definir valores por defectos se usa:   
      name: 'No hay nombre'  
    FirstApp.defaultProps = {  
    }  

# Pruebas

Si no se alcanza a realizar todas las pruebas, lo primero que se debe probar
es la ruta crítica de la aplicación

## ¿Qué son las pruebas?

No son una pérdida de tiempo, son algo necesario y obligatorio. Hay 2 tipos de pruebas, Unitarias y de Integración

### Unitarias

Enfocadas en pequeñas funcionalidades de la aplicación

#### Ejemplo

La llanta de un carro. Se mira el rendimiento de la llanta de forma individual

### Integración

Enfocadas a cómo reaccionan varias piezas en conjunto

#### Ejemplo

La llanta de un carro. Ver cómo funcionan las llantas con la carrocería, timón y otras partes del vehículo

### Características de las pruebas

Las pruebas deben ser:

- Fáciles de escribir
- Fáciles de entender
- Confiables
- Rápidas
- Principalmente unitarias. Se comienza en pequeñas partes, si estas funcionan, el realizar una prueba de integración debe ser más sencillo

## Tipos de pruebas

### AAA

#### Arrange (Arreglar)

Es el paso en el cual se establece el estado inicial, se conoce como el sujeto a probar, en este paso se  

- Inicializan variables
- Se realizan las importaciones necesarias
- Se prepara el ambiente a probar

#### Act (Actuar)

Es en donde se aplican acciones o estímulos al sujeto de pruebas, se puede:  

- Llamar métodos
- Simular clicks
- Realizar acciones sobre el paso anterior

Se aplican estímulos al sujeto de pruebas para preparse para el siguiente paso  

#### Assert (Afirmar)

Es el observar el comportamiento resultante, como:  

- Algún cambio
- Algo incremente
- Nada suceda

## Mitos

### Hacen que la aplicación no tenga errores

Es falso, al ser escritas por el mismo u otro programador pueden haber fallos al realizarlas y no se implementen bien  

### Las pruebas no pueden fallar

Es falso, las pruebas sí pueden fallar, se pueden implementar pruebas que arrojen falsos positivos o falsos negativos  

### Hacen más lenta la aplicación

Las pruebas no llegan a la parte de producción, solo se quedan en el estado de desarrollo. Las pruebas son locales  

### Es una pérdida de tiempo

Es una perdida de tiempo si se prueban cosas que no tiene sentido probar  

### Hay que probar todo

Puede que sí, puede que no. 

# Configuración del framework de Testing en Vite

Para vite se debe realizar la instalación del framework de testing, en este caso será Jest y React Testing Library  

## Intalación

Para instalar Jest se ejecuta el siguiente comando en la terminal:  

    npm install --save-dev jest

Porsterior a esto se debe configurar los comandos script en el package.json:  

    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "test": "jest"
    },

Para ejecutar las pruebas se ejecuta el comando:  

    npm run jest

Para siempre estar viendo las pruebas y que no se tenga que ejecutar el primer comando se debe agregar "--watchAll" al script de ejecución  
# counter-app
Aplicación básica de React con pruebas básicas unitarias  

Se muestra en el siguiente proyecto: Intalación de Vite con NPM  

Comando para usa: npm install vite  
Comando para crear un proyecto: npm create vite:  
-  Se selecciona todo lo relacionado al proyecto, tipo de proyecto y nombre
-  Se usa el comando: npm install React para crear las dependencias necesarias 

Para escribir una expesión de JS en JSX se usan las {}  

{-Imprime una variable string}  
{-Imprime una variable tipo numérico}  

Para imprimir un objeto se usa {JSON.stringify( -objeto )}  

Los componentes reciben props (propiedades que se le envían a componentes)  

Para instalar los prop-types se ejecuta el comando: npm install prop-types  
Para definir valores por defectos se usa:   
FirstApp.defaultProps = {  
  name: 'No hay nombre'  
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

###
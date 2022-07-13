# counter-app
Aplicación básica de React con pruebas básicas unitarias  

Se muestra en el siguiente proyecto: Intalación de Vite con NPM  

Comando para usa: npm install vite  
Comando para crear un proyecto: npm create vite:  
-  Se selecciona todo lo relacionado al proyecto, tipo de proyecto y nombre
-  Se usa el comando: npm install React para crear las dependencias necesarias 

Para escribir una expesión de JS en JSX se usan las {}  

<h1>{-Imprime una variable string}<h1>  
<h1>{-Imprime una variable tipo numérico}<h1>  

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
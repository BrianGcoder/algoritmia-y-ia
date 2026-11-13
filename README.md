# Algoritmia y IA

Repositorio de ejercicios para practicar logica de programacion con PSeInt y
JavaScript. El contenido esta organizado por tema y puede ampliarse con nuevos
algoritmos y proyectos de inteligencia artificial.

## Contenido

### PSeInt

- [Condicionales](pseint/condicionales/)
  - `discoteca.psc`: validacion de ingreso.
  - `semaforo-inventario.psc`: estado del inventario segun las existencias.
  - `tarifa-parqueadero.psc`: calculo de una tarifa de parqueadero.
- [Ciclos](pseint/ciclos/)
  - `cajero-parqueadero.psc`: acumulado de cobros y vehiculos atendidos.
  - `calificaciones.psc`: promedio, aprobados y notas extremas.
  - `caracol.psc`: simulacion de avance y retroceso.
  - `piramide.psc`: impresion de una piramide de asteriscos.
- [Otros ejercicios](pseint/ejercicios/)
  - `calculo-edad-fechas.psc`: ejercicio de calculo de edad con fechas.
  - `edad-en-dias.psc`: aproximacion de edad en dias.
  - `factura-restaurante.psc` y `propina-restaurante.psc`: cuentas de restaurante.
  - `parqueadero-control-vehiculos.psc`: control de entradas y salidas.
  - `validar-pin.psc`: validacion de PIN con intentos limitados.

### JavaScript

- [Ahorro semanal](javascript/ahorro-semanal/): solicita un costo objetivo,
  calcula cuantas semanas se necesitan ahorrando 5000 por semana y muestra el
  resultado en la consola del navegador.

## Requisitos y uso

- Para los archivos `.psc`, instala [PSeInt](https://pseint.sourceforge.net/)
  y abre el archivo que quieras ejecutar.
- Para el ejemplo de JavaScript, abre `javascript/ahorro-semanal/index.html` en
  un navegador. Responde la pregunta y consulta los resultados en la consola
  del navegador.

Los ejercicios son material de practica; algunos pueden estar incompletos o
requerir correcciones antes de usarlos como soluciones definitivas.

## Publicar en GitHub

1. Crea en GitHub un repositorio vacio llamado `algoritmia-y-ia` (nombre
   visible: **Algoritmia y IA**).
2. Desde esta carpeta, ejecuta:

   ```bash
   git init
   git add .
   git commit -m "Organiza ejercicios de algoritmia"
   git branch -M main
   git remote add origin https://github.com/USUARIO/algoritmia-y-ia.git
   git push -u origin main
   ```

   Reemplaza `USUARIO` por tu nombre de usuario de GitHub.

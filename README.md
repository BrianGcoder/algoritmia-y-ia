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
- [Calculos y subprocesos](pseint/ejercicios/)
  - `calculo-edad-fechas.psc`: calculo de edad con fechas y anos bisiestos.
  - `edad-en-dias.psc`: conversion aproximada de edad a dias.
  - `factura-restaurante.psc`: subtotal, impuesto y propina organizados en
    subprocesos.
  - `propina-restaurante.psc`: cuenta y propina divididas entre varias personas.
- [Control y validacion](pseint/ejercicios/)
  - `parqueadero-control-vehiculos.psc`: control de entradas y salidas.
  - `validar-pin.psc`: validacion de PIN con intentos limitados.

### JavaScript

- [Catálogo de ejercicios](javascript/ahorro-semanal/index.html): presenta el
  ejercicio de ahorro semanal en JavaScript y organiza los ejercicios PSeInt
  por categoría. Cada reto PSeInt enlaza su archivo y el editor web.

## Proposito y aprendizaje

La pagina se creo para reunir las consignas y los archivos en un solo lugar,
ordenados por tema, y facilitar su practica en JavaScript o en PSeInt Web.
Cada grupo ayuda a aprender una herramienta distinta:

- **Condicionales:** comparan datos y rangos para elegir una respuesta, como
  permitir un ingreso o calcular una tarifa.
- **Ciclos:** repiten pasos para contar, acumular resultados o crear patrones.
- **Calculos y subprocesos:** aplican formulas y separan tareas para resolver
  problemas de fechas y dinero con mayor orden.
- **Control y validacion:** actualizan el estado de un sistema y verifican
  reglas, como registrar vehiculos o limitar intentos de acceso.
- **JavaScript:** el ahorro semanal suma un monto fijo en cada vuelta y se
  detiene al alcanzar el precio; practica ciclos, acumuladores y condiciones.

Estos conceptos sirven como base para crear programas mas completos y resolver
problemas nuevos paso a paso.

**Conclusion:** practicar algoritmos ayuda a convertir problemas cotidianos en
soluciones claras.

## Requisitos y uso

- Para los archivos `.psc`, instala [PSeInt](https://pseint.sourceforge.net/)
  y abre el archivo que quieras ejecutar.
- Para ejecutar los ejercicios PSeInt en línea, abre
  [PSeInt Web](https://pseint-web.app/), copia el contenido del archivo `.psc`
  y pégalo en el editor.
- Abre `javascript/ahorro-semanal/index.html` en un navegador para ver las
  consignas. En el ejercicio de JavaScript, responde la pregunta y consulta los
  resultados en la consola del navegador.

Los ejercicios son material de practica; algunos pueden estar incompletos o
requerir correcciones antes de usarlos como soluciones definitivas.

## Repositorio en GitHub

Este proyecto esta publicado en
[BrianGcoder/algoritmia-y-ia](https://github.com/BrianGcoder/algoritmia-y-ia).

Para publicar cambios futuros desde esta carpeta:

```bash
git add .
git commit -m "Describe tus cambios"
git push
```

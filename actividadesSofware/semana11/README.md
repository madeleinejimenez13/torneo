# Tienda de Ropa con Programacion Orientada a Objetos y Patrones de Diseño

Este repositorio muestra un ejemplo basico de una **tienda de ropa** implementada en **JavaScript** usando **Programacion Orientada a Objetos (POO)** y tres patrones de diseño:

## Contenido
- index.html: Pagina web que ejecuta la demo
- tienda.js: Codigo JavaScript con clases y patrones
- README.md: Explicacion del proyecto

## Patrones de Diseño Aplicados

### 1. Factory Method
- **Clase:** `PrendaFactory`
- **Uso:** Permite crear objetos de diferentes tipos de prenda (`RopaHombre`, `RopaMujer`) sin exponer la logica de instanciacion.
- **Ventaja:** Facilita la creacion de objetos segun el tipo requerido.

### 2. Observer
- **Clases:** `TiendaRopa`, `Cliente`
- **Uso:** Los clientes se suscriben a la tienda y son notificados cuando hay una nueva coleccion.
- **Ventaja:** Permite notificar a varios objetos interesados cuando ocurre un evento.

### 3. Strategy
- **Clases:** `DescuentoNormal`, `DescuentoVIP`, `Carrito`
- **Uso:** Define diferentes estrategias de descuento que se aplican en el carrito de compras.
- **Ventaja:** Permite cambiar el algoritmo de descuento sin modificar el carrito.

## Ejecucion
1. Abre el archivo `index.html` en tu navegador.
2. Haz clic en **"Ejecutar Demo"**.
3. La consola del navegador mostrara:
   - Descripcion de las prendas creadas.
   - Notificaciones a clientes suscritos.
   - Precio final con diferentes descuentos.

## Tecnologias
- HTML
- JavaScript Puro

## Autor
Ejemplo educativo generado para ilustrar POO y patrones en JavaScript.

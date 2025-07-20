// Clase base para una prenda de ropa
class Prenda {
    // Atributos privados: nombre y precio
    #nombre;
    #precio;

    // Constructor para inicializar nombre y precio
    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    }

    // Getter para obtener el nombre
    get nombre() { return this.#nombre; }

    // Getter para obtener el precio
    get precio() { return this.#precio; }

    // Metodo para mostrar descripcion de la prenda
    descripcion() {
        console.log(`Prenda: ${this.#nombre}, Precio: $${this.#precio}`);
    }
}

// Clase hija para Ropa de Hombre que hereda de Prenda
class RopaHombre extends Prenda {
    // Ademas de nombre y precio, recibe talla
    constructor(nombre, precio, talla) {
        super(nombre, precio); // Llama al constructor de Prenda
        this.talla = talla;    // Asigna la talla
    }
}

// Clase hija para Ropa de Mujer que hereda de Prenda
class RopaMujer extends Prenda {
    // Ademas de nombre y precio, recibe color
    constructor(nombre, precio, color) {
        super(nombre, precio); // Llama al constructor de Prenda
        this.color = color;    // Asigna el color
    }
}

// Patron Factory: crea prendas segun el tipo indicado
class PrendaFactory {
    // Metodo estatico para crear prendas de hombre o mujer
    static crearPrenda(tipo, nombre, precio, extra) {
        if (tipo === 'hombre') {
            return new RopaHombre(nombre, precio, extra); // extra es talla
        } else if (tipo === 'mujer') {
            return new RopaMujer(nombre, precio, extra); // extra es color
        } else {
            throw new Error('Tipo de prenda desconocido');
        }
    }
}

// Clase Cliente para suscriptores que reciben notificaciones
class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Metodo para recibir notificacion
    notificar(mensaje) {
        console.log(`Hola ${this.nombre}, ${mensaje}`);
    }
}

// Patron Observer: Tienda con clientes suscritos
class TiendaRopa {
    constructor() {
        this.suscriptores = []; // Lista de clientes
    }

    // Agregar un cliente a la lista de suscriptores
    suscribir(cliente) {
        this.suscriptores.push(cliente);
    }

    // Enviar mensaje a todos los suscriptores
    anunciarNuevaColeccion(mensaje) {
        this.suscriptores.forEach(cliente => cliente.notificar(mensaje));
    }
}

// Estrategia de descuento normal (10%)
class DescuentoNormal {
    aplicar(precio) {
        return precio * 0.9;
    }
}

// Estrategia de descuento VIP (25%)
class DescuentoVIP {
    aplicar(precio) {
        return precio * 0.75;
    }
}

// Clase Carrito que aplica una estrategia de descuento
class Carrito {
    // Recibe una prenda y la estrategia de descuento
    constructor(prenda, estrategiaDescuento) {
        this.prenda = prenda;
        this.estrategiaDescuento = estrategiaDescuento;
    }

    // Calcula el precio final aplicando el descuento
    precioFinal() {
        return this.estrategiaDescuento.aplicar(this.prenda.precio);
    }
}

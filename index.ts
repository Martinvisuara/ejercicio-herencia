class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
  getPrice() {
    return this.price;
  }
}

class ProductoAlimenticio extends Product {
  fechaCaducidad: Date;
  constructor(name, price, fechaCaducidad) {
    super(name, price);
    // guarda la fecha de caducidad
    this.fechaCaducidad = new Date(fechaCaducidad);
  }

  checkCaducidad(): boolean {
    const hoy = new Date();
    // [Completa la lógica para obtener si el producto está vencido]
    return this.fechaCaducidad < hoy;
  }
}

// Creación de la instancia
const pan = new ProductoAlimenticio("Pan Integral", 3.5, "2024-05-30");

const estaVencido = pan.checkCaducidad();
console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", pan.name);
console.log("Precio:", pan.getPrice());
console.log("Fecha de Caducidad:", pan.fechaCaducidad);
console.log("otro commit");

CanvasCaptureMediaStreamTrack
CountQueuingStrategy

class Usuario {
    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
    }
  }
  
  // Definir una clase para representar un producto
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  
  const inventarioTienda = {
    usuarios: [],
    productos: [],
  
    agregarUsuario: function(nombre, email) {
      const nuevoUsuario = new Usuario(nombre, email);
      this.usuarios.push(nuevoUsuario);
      console.log("Usuario agregado:", nuevoUsuario);
    },
  
    agregarProducto: function(nombre, precio) {
      const nuevoProducto = new Producto(nombre, precio);
      this.productos.push(nuevoProducto);
      console.log("Producto agregado:", nuevoProducto);
    },
  
    borrarProducto: function(nombre) {
      const indice = this.productos.findIndex(producto => producto.nombre === nombre);
      if (indice !== -1) {
        const productoBorrado = this.productos.splice(indice, 1);
        console.log("Producto borrado:", productoBorrado[0]);
      } else {
        console.log("Producto no encontrado.");
      }
    },
  
    consultarProductos: function() {
      console.log("Productos disponibles:");
      this.productos.forEach(producto => {
        console.log("- Nombre:", producto.nombre, "| Precio:", producto.precio);
      });
    }
  };
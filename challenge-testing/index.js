class CarritoCompras {
    constructor() {
       this.carrito = []
    }

    agregarProducto(producto) {
        this.carrito.push(producto)
    }

    calcularTotal() {
        const productos = this.carrito
        let total = 0;
        for(const producto of productos) {
            total += producto.quantity * producto.price
        }

        return total
    }

    aplicarDescuento(porcentaje) {
        if(porcentaje < 0 || porcentaje > 100) {
            return 'El porcentaje debe ser un numero entre 0 y 100'
        }
        const valorTotal = this.calcularTotal()
        const descuento = (porcentaje * valorTotal) / 100
        const valorFinal = valorTotal - descuento
        return valorFinal
    }
}

module.exports = CarritoCompras

const CarritoCompras = require('../index')







describe('la clase "CarritoCompras"', () => {
    const carritoCompras = new CarritoCompras

    it('debe estar definida', () => {
        expect(CarritoCompras).toBeDefined()
    })
    it('CarritoCompras debe ser una clase', () => {
        expect(typeof CarritoCompras).toBe('function')
    })
//? constructor(): Inicializa el carrito como un array vacío.
    it('debe tener un constructor que inicialice carrito con un array vacio', () => {
        expect(Array.isArray(carritoCompras.carrito)).toBe(true)
        expect(carritoCompras.carrito).toHaveLength(0)
    })

//? agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
    it('debe tener un metodo agregarProducto(producto) que reciba un objeto y lo agregue al carrito', () => {
        carritoCompras.agregarProducto({name: 'tele', price: 45, quantity: 2})
        expect(carritoCompras.carrito).toEqual([{name: 'tele', price: 45, quantity: 2}])
        carritoCompras.agregarProducto({name: 'celular', price: 55, quantity: 1})
        expect(carritoCompras.carrito).toEqual([{name: 'tele', price: 45, quantity: 2}, {name: 'celular', price: 55, quantity: 1}])
    })

//? calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
    it('debe tener un metodo calcularTotal, que calcule el total de la compra sumando todos los productos del carrito', () => {
        carritoCompras.carrito = [{name: 'tele', price: 45, quantity: 2}, {name: 'celular', price: 55, quantity: 1}]
        expect(carritoCompras.calcularTotal()).toBe(145)
        carritoCompras.carrito = [{name: 'tele', price: 15, quantity: 1}, {name: 'celular', price: 70, quantity: 3}]
        expect(carritoCompras.calcularTotal()).toBe(225)
    })

//? aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
    it('debe terner un metodo aplicarDescuento, que reciba un porcentaje y aplique un descuento al total de la compra segun ese porcentaje', () => {
        expect(carritoCompras.aplicarDescuento(15)).toBe(191.25)
        expect(carritoCompras.aplicarDescuento(10)).toBe(202.5)
        expect(carritoCompras.aplicarDescuento(50)).toBe(112.5)
        expect(carritoCompras.aplicarDescuento(150)).toBe('El porcentaje debe ser un numero entre 0 y 100')
    })

})
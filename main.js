class Producto {
    constructor(categoria, nombre, precio, cuotas){
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.cuotas = cuotas;

        this.precio_final_cuotas = 0;
        switch(this.cuotas) {
            case 3:
                let cuota3 = (this.precio / 3);
                this.precio_final_cuotas = Math.round(cuota3 * 1.05);
                break;
            case 6:
                let cuota6 = (this.precio / 6);
                this.precio_final_cuotas = Math.round(cuota6 * 1.15);
                break;
            case 12:
                let cuota12 = (this.precio / 12);
                this.precio_final_cuotas = Math.round(cuota12 * 1.40);
                break;
        }
    }
}

const cantidadDeCuotas = parseInt(prompt("ingrese la cantidad de cuotas deseadas (3, 6 o 12)"));

const producto1 = new Producto("Tecnologia", "Televisor", 35000, cantidadDeCuotas)
const producto2 = new Producto("Tecnologia", "PlayStation 5", 80000, cantidadDeCuotas)
const producto3 = new Producto("Tecnologia", "Notebook", 68000, cantidadDeCuotas)

const productos =[producto1, producto2, producto3]


// dom
const ul = document.getElementById("lista-productos");

for(const producto of productos) {
    const li = document.createElement("li");
    
    const  h3 = document.createElement("h3");
    h3.innerHTML = `Categoria del producto:  ${producto.categoria}`;

    const h4Nombre = document.createElement("h4");
    h4Nombre.innerHTML = `Nombre del producto: ${producto.nombre}`;
    
    const h4Precio = document.createElement("h4")
    h4Precio.innerHTML = `Precio del producto: $${producto.precio}`;

    const cantidadDeCuotas = document.createElement("h4");
    cantidadDeCuotas.innerHTML = `La cantidad de cuotas elegidas es: ${producto.cuotas}`
    
    const valorDeCuotas = document.createElement("h4");
    valorDeCuotas.innerHTML = `El valor de cuotas con los intereses es $${producto.precio_final_cuotas}`
    

    li.append(h3);
    li.append(h4Nombre);
    li.append(h4Precio);
    li.append(cantidadDeCuotas);
    li.append(valorDeCuotas);

    ul.append(li);
};  
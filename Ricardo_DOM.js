class Producto {
    constructor(id, nombre, marca, precio, stock, img) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
        this.img  = img
    }
}

const producto1 = new Producto(12548, "Cafe_Con_Leche", "Le cafe", 120, 40, "https://th.bing.com/th/id/OIP.DK9gplFXbSt6dG4ZhScwcAHaFj?pid=ImgDet&w=3143&h=2357&rs=1")
const producto2 = new Producto(14856, "Cafe_Con_Chocolate", "Nescafe", 110, 40, "https://th.bing.com/th/id/OIP.CZrRZgTBvAnAjnTgSBzYSwHaE7?pid=ImgDet&rs=1")
const producto3 = new Producto(78944, "Cafe_Expreso", "Nespresso", 99, 40, "https://th.bing.com/th/id/R.d09cd1c92c0e1cdad9e0f428b6804a27?rik=2Poorn1IS74dzQ&riu=http%3a%2f%2fwww.cafe-mx.com%2fblog%2fapp%2fassets%2fmedia%2f2018%2f08%2fcafe-expreso.jpg&ehk=erKq7rXooa2sYWc3%2bPRMDIqwfF2Vw6rJN8km3Y1wMVo%3d&risl=&pid=ImgRaw&r=0")
const producto4 = new Producto(65327, "Tisana", "Marina", 61, 40, "https://laopinion.com/wp-content/uploads/sites/3/2019/11/shutterstock_338815997-e1574183895570.jpg?quality=80&strip=all&w=1200")
const producto5 = new Producto(63215, "Chocolate_Semi_Amargo", "Le cafe", 600, 40, "https://th.bing.com/th/id/OIP.mYTdNPraAaVmtgbUnDQBlQHaD4?pid=ImgDet&rs=1")
const producto6 = new Producto(84951, "Cafe_Americano", "Le cafe", 156, 40, "https://th.bing.com/th/id/OIP.NkEWDNt_xhkmVpmKbZZXsQHaIi?pid=ImgDet&w=390&h=450&rs=1")

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

const divProductos = document.getElementById("divProductos")

productos.forEach((productoArray) => {
    divProductos.innerHTML += `
    <div class="card productos">
        <div class="card-body">
            <h5 class="card-title">${productoArray.nombre}</h5>
            <p class="card-text">Marca: ${productoArray.marca}</p>
            <p class="card-text">Precio: $${productoArray.precio}</p>
            <p class="card-text">Stock: ${productoArray.stock}</p>
            <img src="${productoArray.img}"class="card-img-top">
            
    </div>
  </div>
    `
}) 

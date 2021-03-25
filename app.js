var auto = {    
    marca: "fiat",
    modelo: "palio",
    antiguedad: "1950",
    describir: function (){
        return `El auto es marca "${auto.marca}" 
        y modelo ${this.modelo}. 
        El ano de fabricacion es ${this.antiguedad}.`
    }
}

var contenido = document.getElementById('h11')
contenido.innerHTML += auto.describir()

console.log(auto["marca"])
console.log(auto.marca)
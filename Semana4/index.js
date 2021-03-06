let pikachuOriginal = {
  vida: 100,
  fuerza: 80,
};

//REFERENCIA
let pikachuAzul = pikachuOriginal;

//SPREAD OPERATOR
let pikachuNaranja = { ...pikachuOriginal };
let pikachuVerde = { ...pikachuOriginal, toxicidad: 50, fuerza: 90 };
pikachuAzul.vida = 60;
// console.log({pikachuAzul:pikachuAzul})
console.table({ pikachuAzul });
console.table({ pikachuOriginal });
console.table({ pikachuNaranja });
console.table({ pikachuVerde });

let alumnos = ["Mijail", "Gustavo", "Jose Antonio"];

let matriculados = [...alumnos, "Estefani"];

console.table({ matriculados });

// DESESTRUCTURACIÓN

let mascota = {
  nombre: "Luna",
  color: "blanca",
  edad: 4,
};

console.log(mascota.color);

let { color, nombre } = mascota;

console.log(color);

let frutas = ["Piña", "Naranja", "Uva", "Lima"];

console.log(frutas[1]);

let [fruta1, fruta2, fruta3, fruta4] = frutas;

console.log(fruta4);

//Uso en funciones

const describir = ({ nombres, 
                    edad, 
                    hobbies = "hacer nada", 
                    apellidos 
                }) => {
                    return `Esta persona se llama ${nombres} ${apellidos}, tiene ${edad} años de edad y le gusta ${hobbies}`;
                };

let persona = {
  hobbies: "Escuchar Música",
  nombres: "Jorge Osmar",
  apellidos: "Montesinos Aramayo",
  edad: 31,
};

// console.log(describir("Jorge Osmar","Montesinos Aramayo", "escuchar música", 31))

console.log(describir(persona));

let persona2 = {
  nombres: "Juan",
  apellidos: "Perez",
  edad: 20,
};

console.log(describir(persona2));

//Object Literals

let smartphone = {
    marca:"Redmi",
    modelo:"Note 9",
    anio:2021,
    ["color"]:"azul"
}

console.log(smartphone.color);

console.log(smartphone["modelo"]);

//switch
const pedirBebida = (bebida) => {
    let bebidaEscogida = ""
    switch(bebida){
        case 1:1
            bebidaEscogida = "Cocacola";
            break; //cortar la ejecución del código
        case 2:
            bebidaEscogida = "Chicha Morada";
            break;
        case 3:
            bebidaEscogida = "Inka cola";
            break;
        default:
            bebidaEscogida = "Agua";
    }

    return bebidaEscogida
}

console.log(pedirBebida(3))

const pedirBebida2 = (bebida) => {
    let escogida = ""
    let misBebidas = {
        '1':"Cocacola",
        '2':"Chicha",
        '3':"Inkacola",
        'default':"Agua"
    }

    return misBebidas[bebida] || misBebidas["default"]
}

console.log(pedirBebida2())
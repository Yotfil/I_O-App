const character = {
    name: '',
    class: '',
    race: '',
    weapon: '',
    description:'',
    habilities: {
        strength: 0,
        agility: 0,
        intelligence: 0,
    },
}
const raceCharacter = {
    options: {
        1:'Humano',
        2:'Enano',
        3:'Elfo',
    },
    message: `Escribe el valor entre parentesis para escoger una clase
    (1) Humano
    (2) Enano
    (3) Elfo`
}
const classCharacter = {
    options: {
        1:'Mago',
        2:'Guerrero',
        3:'Arquero',
    },
    message: `Escribe el valor entre parentesis para escoger una raza
    (1) Mago:
            Se caracterizan por el uso de la inteligencia para poder lanzar poderosos hechizos.

    (2) Guerrero:
            Se caracterizan por el uso de la fuerza para poder hacer ataques dañinos con poderozas armas

    (3) Arquero:
            Se caracterizan por el uso de la agilidad para dar en el blanco con mortiferas armas a distancia`
}
const weaponCharacter = {
    Mago: 'Bola de Fuego',
    Guerrero: 'Espada Larga',
    Arquero: 'Arco Largo'
}

const habilityCharacter = {
    Guerrero: 'Fuerza',
    Mago: 'Inteligencia',
    Arquero: 'Agilidad'
}



function askName(){
    const name = prompt('Escribe el nombre de tu personaje')
    if(!name){
        alert('Debes escribir un nombre')
        return askName()
    }
    return name
}

function askProperties(property){
    let value = Number(prompt(property.message))
    if( Number.isNaN(value) || value < 1 || value > 3 ){
        alert('No escogiste una opción valida')
        return askProperties(property)
    }
    return property.options[value]
}


function askDescription(){
    const descriptionCharacter = prompt('Describe tu personaje (color de cabello, ojos, piel ¿Tiene marcas en la piel? ¿Tiene alguna manía o vicio?')
    if(!descriptionCharacter){
        alert('Describe tu personaje, ayudará a que puedas visualizar mejor las escenas')
        return askDescription()
    }
    return descriptionCharacter
}

function askHabilities( classCharacter ){
    const pattern = /\d{1}\W{1}\s?\d{1}\W{1}\s?\d$/
    let hability = habilityCharacter[classCharacter]
    let strength = 0;
    let intelligence = 0;
    let agility = 0;


    const habilitiesCharacter = prompt(`Tu personaje cuenta con 3 habilidades que son: fuerza, inteligencia y agilidad.

    Fuerza:
        Te ayudará con actividades físicas exigentes, como mover objetos pesados.

    Agilidad:
        Te ayudará para poder escabullirte fácilmente o escalar entre muros.

    Inteligencia:
        Te ayudará a resolver acertijos, poder expresarte mejor ante los demás.

    Ten en cuenta que solo tienes 11 puntos para distribuir y estará condicionado por tu clase.
    Como ${classCharacter} deberás darle prioridad a la ${hability} con un máximo de 6 puntos. No podrá haber una con menos de 2 puntos.

    Ingresa los puntajes como en el siguiente ejemplo:

    "6, 3, 2"

    El primer número será la fuerza, el segundo la inteligencia y el tercero la agilidad. Respeta ese orden.`, '6, 3, 2')

    const arrayHabilities = habilitiesCharacter.split(',')

    if(pattern.test(arrayHabilities)){
        arrNumHabilities = arrayHabilities.map(num => Number(num))
    }else{
        alert(`Recuerda que debes ingresar las habilidades con el patrón indicado`)
        return askHabilities(classCharacter)
    }

    let total = arrNumHabilities.reduce( (a,b) => a + b, 0)

    if(total < 11){
        alert('recuerda que debes completar 11 puntos')
        return askHabilities(classCharacter)
    }else if(total > 11){
        alert('recuerda que solo tienes 11 puntos')
        return askHabilities(classCharacter)
    }

    arrNumHabilities.forEach(( num )=>{
        if(num < 2){
            alert('no puede haber una propiedad menor a 2')
            return askHabilities(classCharacter)
        }
    })

    if(classCharacter === 'Guerrero'){
        if(arrNumHabilities[0] > arrNumHabilities[1] && arrNumHabilities[0] > arrNumHabilities[2]){
            strength = arrNumHabilities[0]
            intelligence = arrNumHabilities[1]
            agility = arrNumHabilities[2]
        }else{
            alert(`Recuerda que para los ${classCharacter} su habilidad principal es ${hability}`)
            return askHabilities(classCharacter)
        }
    }else if(classCharacter === 'Mago'){
        if(arrNumHabilities[1] > arrNumHabilities[0] && arrNumHabilities[1] > arrNumHabilities[2]){
            strength = arrNumHabilities[0]
            intelligence = arrNumHabilities[1]
            agility = arrNumHabilities[2]
        }else{
            alert(`Recuerda que para los ${classCharacter} su habilidad principal es ${hability}`)
            return askHabilities(classCharacter)
        }
    }else if(classCharacter === 'Arquero'){
        if(arrNumHabilities[1] > arrNumHabilities[0] && arrNumHabilities[1] > arrNumHabilities[2]){
            strength = arrNumHabilities[0]
            intelligence = arrNumHabilities[1]
            agility = arrNumHabilities[2]
        }else{
            alert(`Recuerda que para los ${classCharacter} su habilidad principal es ${hability}`)
            return askHabilities(classCharacter)
        }
    }
    character.habilities.strength = strength;
    character.habilities.intelligence = intelligence;
    character.habilities.agility = agility;
}

function askConfirm(arma){
    const answer = {
        empezar: () => alert('Acá va la función que empieza la historia'),
        nombre: () => {
            character.name = askName()
        },
        clase: () => {
            character.class = askProperties(classCharacter)
            askHabilities( character.class)
        },
        raza: () => {
            character.race = askProperties(raceCharacter)
        },
        descripcion: () => {
            character.description = askDescription()
        },
        habilidades: () => {
            askHabilities( character.class)
        },
        undefined: () => {
            alert('Escribe un valor válido para poder continuar')
        }
    }

    const confirm = prompt(`Este es tu personaje:
        Nombre = ${character.name}
        Clase = ${character.class}
        Raza = ${character.race}
        ${arma} = ${character.weapon}
        Habilidades:
            Fuerza = ${character.habilities.strength}
            Inteligencia = ${character.habilities.intelligence}
            Agilidad = ${character.habilities.agility}
        Descripción = ${character.description}

        ¿Estás de acuerdo?
        Si la respuesta es sí, escribe "empezar" sino, escribe el nombre de la propiedad que deseas cambiar  sin acentos (Ej: Descripcion).

        Nota: Si quieres cambiar una habilidad en específico escribe "Habilidades" y las re-asignas de nuevo.
        Nota: El ${arma} es acorde a la clase que escojas.
    `).toLocaleLowerCase()

        const callback = Object.keys(answer).find(key => key === confirm)

    answer[callback]()

    if(callback !== 'empezar') askConfirm(arma)
}

function crearPersonaje(){
    character.name = askName()
    character.race = askProperties(raceCharacter)
    character.class = askProperties(classCharacter)
    character.weapon = weaponCharacter[character.class]
    character.description = askDescription()
    askHabilities( character.class)

    const arma = character.race === 'Mago' ? 'Poder' : 'Arma'

    askConfirm(arma)
}

crearPersonaje()
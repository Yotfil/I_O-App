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
    if(value !== 1 && value !== 2 && value !== 3){
        alert('No escogiste una opción valida')
        return askProperties(property)
    }
    return property.options[value]
}


function askWeapon(race){
    let weaponCharacter = ''
    if(race === 'Mago'){
        weaponCharacter = 'Bola de fuego'
    }else if(race === 'Guerrero'){
        weaponCharacter = 'Espada'
    }else if(race === 'Arquero'){
        weaponCharacter = 'Arco'
    }
    return weaponCharacter
}

function askDescription(){
    const descriptionCharacter = prompt('Describe tu personaje (color de cabello, ojos, piel ¿Tiene marcas en la piel? ¿Tiene alguna manía o vicio?')
    if(!descriptionCharacter){
        alert('Describe tu personaje, ayudará a que puedas visualizar mejor las escenas')
        return askDescription()
    }
    return descriptionCharacter
}

function askHabilities(habilities, clase){
    let hability = ''
    if( clase === 'Guerrero' ){
        hability = 'Fuerza'
    }else if( clase === 'Mago' ){
        hability = 'Inteligencia'
    }else if( clase === 'arquero' ){
        hability = 'Agilidad'
    }
    const habilitiesCharacter = prompt(`Tu personaje cuenta con 3 habilidades que son: fuerza, inteligencia y agilidad.

    Fuerza:
        Te ayudará con actividades físicas exigentes, como mover objetos pesados.

    Agilidad:
        Te ayudará para poder escabullirte fácilmente o escalar entre muros.

    Inteligencia:
        Te ayudará a resolver acertijos, poder expresarte mejor ante los demás.

    Ten en cuenta que solo tienes 11 puntos para distribuir y estará condicionado por tu clase.
    Como ${clase} deberás darle prioridad a la ${hability} con un máximo de 6 puntos. No podrá haber una con menos de 2 puntos.

    Ingresa los puntajes como en el siguiente ejemplo:

    "6, 3, 2"

    El primer número será la fuerza, el segundo la inteligencia y el tercero la agilidad. Respeta ese orden.`, '6, 3, 2')

    return habilitiesCharacter
}

function crearPersonaje(){

    character.name = askName(),
    character.class = askProperties(raceCharacter),
    character.race = askProperties(classCharacter),
    character.weapon = askWeapon(character.race),
    character.description = askDescription(),
    character.habilities = askHabilities(character.habilities, character.race),



    console.log(character);

}

crearPersonaje()
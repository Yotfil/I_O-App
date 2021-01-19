const character = {
    name: '',
    class: '',
    race: '',
    weapon: '',
    habilities: {
        strength: 0,
        agility: 0,
        intelligence: 0,
    },
    description:''
}

function askName(){
    const name = prompt('Escribe el nombre de tu personaje')
    return name
}

function askClass(){
    let classCharacter = ''
    const askClassCharacter = Number(prompt(`Escribe el valor entre parentesis para escoger una clase
    (1) Humano
    (2) Enano
    (3) Elfo`))

    if(askClassCharacter === 1){
        classCharacter = 'Humano'
    }else if(askClassCharacter === 2) {
        classCharacter = 'Enano'
    }else if(askClassCharacter === 3){
        classCharacter = 'Elfo'
    }else{
        alert('No has seleccionado un valor válido')
        return askClass()
    }
    return classCharacter
}

function askRace(){
    let raceCharacter = ''
    const askRaceCharacter = Number(prompt(`Escribe el valor entre parentesis para escoger una raza
    (1) Mago: Se caracterizan por el uso de la inteligencia para poder lanzar poderosos hechizos.
    (2) Guerrero: Se caracterizan por el uso de la fuerza para poder hacer ataques dañinos con poderozas armas
    (3) Arquero: Se caracterizan por el uso de la agilidad para dar en el blanco con mortiferas armas a distancia`))

    if(askRaceCharacter === 1){
        raceCharacter = 'Mago'
    }else if(askRaceCharacter === 2) {
        raceCharacter = 'Guerrero'
    }else if(askRaceCharacter === 3){
        raceCharacter = 'Arquero'
    }else{
        alert('No has seleccionado un valor válido')
        return askRace()
    }
    return raceCharacter
}

function askWeapon(){
    let weaponCharacter = ''
    let askWeaponCharacter = ''
    if(character.race === 'Mago'){
        askWeaponCharacter = Number(prompt(`Escribe el valor entre parentesis para escoger un poder
        (1) Bola de fuego
        (2) Esporas acidas
        (3) Frío espectral`))
    }
}

function crearPersonaje(){


}
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

const storyOptions = {
    options: {
        1:'Mansión del terror',
        2:'Catacumbas malditas',
        3:'Dragón ermitaño',
    },
    message: `Escoge una de las siguientes historias para empezar tu partida
    (1) Mansión del terror
    (2) Catacumbas malditas
    (3) Dragón ermitaño`
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
        if(arrNumHabilities[2] > arrNumHabilities[0] && arrNumHabilities[2] > arrNumHabilities[1]){
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

function chooseStory(){
    const option = Number(prompt(storyOptions.message))
    let answer = ""

    if(Number.isNaN(option) || option < 1 || option > 3){
        alert('No escogiste una opció valida')
        return chooseStory()
    }else{
        answer = alert(`¡Buena elección! "${storyOptions.options[option]}" es una excelente historia para iniciar.

        ¡Empecemos!
        `)
    }
    return answer
}

function askConfirm(){

    const arma = character.class === 'Mago' ? 'Poder' : 'Arma'

    const answer = {
        empezar: () => chooseStory(),
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

function capitalize(word){
    const capitalLetter = word.slice(0, 1).toUpperCase()
    const remaining = word.slice(1)
    return `${capitalLetter}${remaining}`
}


function crearPersonaje(){
    character.name = capitalize(askName())
    character.race = askProperties(raceCharacter)
    character.class = askProperties(classCharacter)
    character.weapon = weaponCharacter[character.class]
    character.description = askDescription()
    askHabilities( character.class)

}

function saveGame(){

    const characterToStorage = JSON.stringify(character)
    console.log(characterToStorage);
    localStorage.setItem('character', characterToStorage)
}

function story(){

    let arma = character.class === 'Mago' ? 'tus grandiosos poderes' : 'tu grandiosa arma'

    alert(
        `Oh! Qué gusto es poder contar con tu ayuda, querido ${character.name}, tu nombre resuena a lo largo y ancho de este territorio, tus proesas son grandes y sin contar ${arma}.

        Han sido tiempos dificiles, hemos estado bajo ataque, el reino del norte ha sido implacable, está invadiendo nuestros territorios, ya conquistó el reino del Este y el Oeste somos la última porción de esperanza.

        Tengo una misión de calentamiento y cuando la termines te daré una lista de misiones a escoger. Tanto esta misión como posteriores tienen tiempo para ser llevadas a cabo, es por eso que debes ser preciso y constante.`
    )
    const missionDialogue = confirm(`Para iniciar, necesito que vayas a la torre de los magos, mi espada fue destruida en la última batalla. Busca a Friedrich y pídele que te dé un pergamino con el hechizo "Encantar Arma" lo usaremos sobre la espada que Liotar está forjando para mí, aunque jamas se igualaría a ${arma}. Tienes 12 horas una vez aceptes la misión para completarla ¿Estás listo para iniciar la misión?`)

    return missionDialogue
}

function confirmMission1(answer){
    let answerMission1 = ""

    let negativeAnswer = `Nunca imaginé esto, nos has condenado ${character.name}

    Fin del juego`

    if(answer){
        answerMission1 = alert(`Excelente ${character.name} la bendición de los dioses te acompañe. Eres nuestra esperanza. ¡Corre!`)
    }else{
        const secondOption = Number(prompt(`¿Qué quieres hacer?
            (1) Pensarlo.
            (2) Desertar
        `))
        if(Number.isNaN(secondOption) || secondOption < 1 || secondOption >2){
            alert('Selecciona una respuesta valida')
            return confirmMission1(answer)
        }else if(secondOption === 1){
            const confirmSecondOption = confirm(`Estamos bajo ataque ${character.name} entiéndelo! No hay tiempo de pensarlo, debes decidir ya!

            Si escoges no, desertarás automaticamente`)
            if(confirmSecondOption){
                answerMission1 = alert(`Sabía que la fama que te precede no es falsa. ¡Corre! Busca a Friedrich `)
            }else{
                answerMission1 = alert(negativeAnswer)
            }
        }else if( secondOption === 2){
            answerMission1 = alert(negativeAnswer)
        }
    }
    return answerMission1
}

function mission1(answer){
    console.log('this is answer', answer);
    if(!answer){
        const startAgain = confirm(`¿Deseas empezar una nueva partida?`)
        if(startAgain){
            startGame()
        }else{
            alert(`¡Adíos!`)
        }
    }

    alert(`Sales corriendo de la sala del rey, quien se veía muy preocupado, tomas rumbo hacia la torre de los magos que logras divisar no muy lejos de allí`)

}

function startGame(){
    crearPersonaje()
    askConfirm()
    const storyVar = story()
    const confirmMission1Var = confirmMission1(storyVar)
    const mission1var = mission1(confirmMission1Var)

    // const getCharacter = JSON.parse(localStorage.getItem('character'))
    // if(!getCharacter){
    //     saveGame()
    // }else{
    //     confirm('Hay una partida guardada ¿quieres continuarla?')
    // }
}
startGame()
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//A

const copiaPokemon1 = {
    ...pokemon1
}

copiaPokemon1.nome =`Squirtle`
copiaPokemon1.tipo = `agua`

//b
pokemon1.ataques = []

//c
const ataque= {
    nome: `investida`,
    dano:40,
    tipo:`normal`,
    precisao:100

}
pokemon1.ataques.push(ataque)

//d

copiaPokemon1.ataques= {
    ...pokemon1
}
console.log(pokemon1)
console.log(copiaPokemon1)

//e
const ataque1 = {
    nome: `folha de navalha`,
    dano:45,
    tipo:`grama`,
    precisao: 100
}

pokemon1.ataques.push(ataque1)

copiaPokemon1.ataques= []
//f

const ataque2 ={
    nome:`jato de agua`,
    dano:40,
    tipo:`agua`,
    precisa:100
}

pokemon1.ataques.push(ataque2)

console.log(pokemon1)
console.log(copiaPokemon1)

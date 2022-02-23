type PetType = 'dog' | 'cat' | 'fish';

type Pet = {
    name: string,
    type: PetType,
    image: string,
    race: string, 
    color: string, 
    gender: 'Masculino' | 'Feminino'
}

const data: Pet[] = [
    {
        name: 'GoddBoy',
        type: 'dog',
        image: 'pastor-alemao.jpg',
        race: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'dog',
        image: 'labrador.jpg',
        race: 'Labrador-retriever',
        color: 'Branco',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'dog',
        image: 'zwergspitz.jpg',
        race: 'Zwergspitz',
        color: 'Amarelo',
        gender: 'Feminino'
    },
    {
        name: 'GoddBoy',
        type: 'dog',
        image: 'husky.jpg',
        race: 'Husky Siberiano',
        color: 'Branco e Preto',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'dog',
        image: 'golden.jpg',
        race: 'Golden Retriever',
        color: 'Amarelo',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'dog',
        image: 'poodle.jpg',
        race: 'Poodle',
        color: 'Branco',
        gender: 'Feminino'
    },
    {
        name: 'GoddBoy',
        type: 'dog',
        image: 'bulldog.jpg',
        race: 'Bulldog',
        color: 'Branco e Amarelo',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'cat',
        image: 'persa.jpg',
        race: 'Persa',
        color: 'Amarelo',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'cat',
        image: 'mainecoon.jpg',
        race: 'Maine Coon',
        color: 'Preto e Branco',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'cat',
        image: 'bengal.jpg',
        race: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        gender: 'Feminino'
    },
    {
        name: 'GoddBoy',
        type: 'cat',
        image: 'siames.jpg',
        race: 'Siamês',
        color: 'Amarelo e Preto',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'cat',
        image: 'sphynx.jpg',
        race: 'Sphynx',
        color: 'Branco',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'fish',
        image: 'neon.jpg',
        race: 'Tetra Neon',
        color: 'Vermelho e Azul',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'fish',
        image: 'matogrosso.jpg',
        race: 'Mato Grosso',
        color: 'Laranja',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'fish',
        image: 'limpavidro.jpg',
        race: 'Limpa Vidro',
        color: 'Verde e Branco',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'fish',
        image: 'tanictis.jpg',
        race: 'Tanictis',
        color: 'Vermelho',
        gender: 'Masculino'
    },
    {
        name: 'GoddBoy',
        type: 'fish',
        image: 'acara.jpg',
        race: 'Acará Bandeira',
        color: 'Preto',
        gender: 'Masculino'
    }
]

export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getByType: (type: PetType): Pet[] => {
        return data.filter(pet => pet.type === type);
    },
    getByRace: (race: string): Pet[] =>{
        return data.filter( pet => 
            pet.race.toLowerCase().indexOf(race.toLowerCase()) > -1
        )
    }
}
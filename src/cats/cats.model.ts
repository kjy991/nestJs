export type CatType = {
    id: string;
    name: string;
    age: number;
    species: string;
    isCute: boolean;
    friends: string[];
};
export const Cat: CatType[] = [
    {
        id: 'fsduifh',
        name: 'blue',
        age: 8,
        species: 'Russian Blue',
        isCute: true,
        friends: ['asdfhj29009', 'WE09tju2j'],
    },

    {
        id: 'iohf2309q4hr',
        name: 'som',
        age: 4,
        species: 'Sphynx cat', isCute: true,
        friends: ['wejuefj20qj', 'asdfhj29009', 'wejufj20aj'],
    },
    {
        id: 'WE09tjuzj',
        name: 'lean',
        age: 6,
        species: 'Munchkin',
        isCute: false, friends: ['wejuefj20qj', 'asdfhj29009', 'wejufj20aj']
    },
    {
        id: 'asdfhi29009', name: 'star', age: 10, species: 'Scottish Fold', isCute: true, friends: ['wejufj20qj']
    }
]
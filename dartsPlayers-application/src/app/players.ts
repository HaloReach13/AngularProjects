export interface DartsPlayer {
    id: number;
    name: string;
    nickname: string;
    rank: number;
    experience: '0-5' | '5-10' | '10+';
    salary: number;
}

export const PLAYERS_LIST: DartsPlayer[] = [
    {
        id: 1,
        name: 'Luke Humphries',
        nickname: 'Cool Hand Luke',
        rank: 1,
        experience: '0-5',
        salary: 500000
    },
    {
        id: 2,
        name: 'Michael van Gerwen',
        nickname: 'Mighty Mike',
        rank: 2,
        experience: '10+',
        salary: 1000000
    },
    {
        id: 3,
        name: 'Michael Smith',
        nickname: 'Bully Boy',
        rank: 3,
        experience: '5-10',
        salary: 750000
    },
    {
        id: 4,
        name: 'Gerwyn Price',
        nickname: 'The Iceman',
        rank: 5,
        experience: '5-10',
        salary: 600000
    },
    {
        id: 5,
        name: 'Peter Wright',
        nickname: 'Snakebite',
        rank: 8,
        experience: '10+',
        salary: 550000
    },
    {
        id: 6,
        name: 'Luke Littler',
        nickname: 'The Nuke',
        rank: 25,
        experience: '0-5',
        salary: 200000
    },
    {
        id: 7,
        name: 'Rob Cross',
        nickname: 'Voltage',
        rank: 6,
        experience: '5-10',
        salary: 650000
    },
    {
        id: 8,
        name: 'Gary Anderson',
        nickname: 'The Flying Scotsman',
        rank: 21,
        experience: '10+',
        salary: 400000
    },
    {
        id: 9,
        name: 'Nathan Aspinall',
        nickname: 'The Asp',
        rank: 4,
        experience: '5-10',
        salary: 700000
    },
    {
        id: 10,
        name: 'Dave Chisnall',
        nickname: 'Chizzy',
        rank: 7,
        experience: '5-10',
        salary: 620000
    }
];
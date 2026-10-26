
let albums: string[] = [
    "matrix",
    "jurrasic park",
    "congo"
]

console.log(albums)

let dates: number[] = [
    1945,
    1914,
    2010
];

console.log(dates)

// arrays of objects


type Album = {
    artist: string;
    title: string;
    year: number;
}

let selectedDiscography: Album[] = [
    {
        artist: " The beatles",
        title: "Rubber Soul",
        year: 1965
    },

    {
    artist: "The beatles",
    title: "Revolver",
    year: 1966,
    },
];

selectedDiscography.push({ artist: "Karma", title: "cat", year: 1502})
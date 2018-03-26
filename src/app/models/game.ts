

export class Game {
    MyQuotes: string[]= [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    Players: User[]=[];
    Picture: string;
    PlayedQuotes: Quote[]=[];
}

export class User{
    Name: string;

}

export class Quote {
    Text:string;
    PlayerName: string;
    Chosen: boolean=false;
}
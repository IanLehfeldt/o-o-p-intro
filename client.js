console.log('Client loaded');

class MoviePlayer {
    constructor(movie){
        this.movie = movie;
        this.snacks = "Popcorn";
    }
    playMovie(){
        this.currentlyPlaying = "Currently playing "+this.movie 
    }
    stopMovie(){
        this.currentlyPlaying = this.movie+" is currently stopped, time to grab a snack.";
    }
}

class ClosedCaption extends MoviePlayer {
    constructor( movie, language ){
        super(movie);
        super.playMovie(movie);
        this.captions = language;
    }
}

class SnackAttack extends MoviePlayer {
    constructor( movie, snack ) {
        super(movie);
        super.stopMovie(movie);
        this.snacks = snack;
    }
}

let WhatImWatching = new MoviePlayer( "Amelie" );

let CaptionsOn = new ClosedCaption( "Amelie", "French" );

let NewSnack = new SnackAttack( "Amelie", "Nachos" );

console.log(WhatImWatching);
console.log('Captions On: ', CaptionsOn);
console.log('Snacking: ', NewSnack);
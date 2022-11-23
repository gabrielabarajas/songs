const songs = require("./data");

//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map((artista)=> artista.artist);
    console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let result = array.filter((song)=> song.artist == artist);
    return result;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let result = array.map((titulo)=>`${titulo.title}`);
    result.sort();
    let finalResult= result.slice (0,10);
    return finalResult;
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
    let newArray = array.map((x) => x);
    newArray.sort((a,b)=>a-b);
    return newArray;
};

//Exercise 5: Filter songs by genre
function songsByGenre() {
    //Write your code here
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    };
};

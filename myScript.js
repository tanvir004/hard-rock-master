let inputValue = document.querySelector('.inputValue');
let button = document.querySelector('.button');
//let titleOne = document.querySelector('.title-one');
let diletea = document.querySelector('name');

button.addEventListener('click', function(){
    fetch('https://api.lyrics.ovh/suggest/'+inputValue.value)
.then(response => response.json())
.then(data =>{
    
    console.log(data);
    let detailsArea = document.getElementById('songArea')
    detailsArea.style.display = "block";
    let songTitle = data.data.map(inputValue => inputValue.title);
    let songAlbum = data.data.map(songTitle => songTitle.album.title);
    let artistName = data.data.map(songAlbum => songAlbum.artist.name);
    console.log(artistName);
    // let artName = artistName[0];
    // console.log(artName);

    let titleOne = songTitle[0];
    let artistNameOne = artistName[0];
    document.getElementById('one').innerHTML=titleOne;
    document.getElementById('artistOne').innerHTML=artistNameOne;

    let titleTwo = songTitle[1];
    let artistNameTwo = artistName[1];
    document.getElementById('two').innerHTML=titleTwo;
    document.getElementById('artistTwo').innerHTML=artistNameTwo;

    let titleThree = songTitle[2];
    let artistNameThree = artistName[2];
    document.getElementById('three').innerHTML=titleThree;
    document.getElementById('artistThree').innerHTML=artistNameThree;

    let titleFour = songTitle[3];
    let artistNameFour = artistName[3];
    document.getElementById('four').innerHTML=titleFour;
    document.getElementById('artistFour').innerHTML=artistNameFour;

    let titleFive = songTitle[4];
    let artistNameFive = artistName[4];
    document.getElementById('five').innerHTML=titleFive;
    document.getElementById('artistFive').innerHTML=artistNameFive;

    let titleSix = songTitle[5];
    let albumNameSix = artistName[5];
    document.getElementById('six').innerHTML=titleSix;
    document.getElementById('artistSix').innerHTML=albumNameSix;

    let titleSeven = songTitle[6];
    let artistNameSeven = artistName[6];
    document.getElementById('seven').innerHTML=titleSeven;
    document.getElementById('artistSeven').innerHTML=artistNameSeven;

    let titleEight = songTitle[7];
    let artistNameEight = artistName[7];
    document.getElementById('eight').innerHTML=titleEight;
    document.getElementById('artistEight').innerHTML=artistNameEight;

    let titleNine = songTitle[8];
    let albumNameNine = artistName[8];
    document.getElementById('nine').innerHTML=titleNine;
    document.getElementById('artistNine').innerHTML=albumNameNine;

    let titleTen = songTitle[9];
    let artistNameTen = artistName[9];
    document.getElementById('ten').innerHTML=titleTen;
    document.getElementById('artistTen').innerHTML=artistNameTen;

  
    //lyrics
let songLyrics = document.getElementById('lyrics-area')
let lyricBtn = document.getElementById('lyrics-btn');
lyricBtn.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameOne+'/'+titleOne)
    .then(response => response.json())
    .then(data =>{
        let fullLyrics = data.lyrics    
        console.log(data)
        document.getElementById('lyrics-area').innerHTML=fullLyrics
            
    })
    .catch(err => alert("no lyrics found"))
})


let lyricBtnTwo = document.getElementById('lyrics-btn-two');
lyricBtnTwo.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameTwo+'/'+titleTwo)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsTwo = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsTwo
            
 
    })
    .catch(err => alert("no lyrics found")) 
})


let lyricBtnThree = document.getElementById('lyrics-btn-three');
lyricBtnThree.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameThree+'/'+titleThree)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsThree = data.lyrics
        if(fullLyricsThree.error){
            alert("error")
        }
        else{
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsThree 
        }  
                
    
    })
    
})


let lyricBtnFour = document.getElementById('lyrics-btn-four');
lyricBtnFour.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameFour+'/'+titleFour)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsFour = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsFour        
    
    })
    .catch(err => alert("no lyrics found")) 
})

let lyricBtnFive = document.getElementById('lyrics-btn-five');
lyricBtnFive.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameFive+'/'+titleFive)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsFive = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsFive       
    
    })
    .catch(err => alert("no lyrics found")) 
})

let lyricBtnSix = document.getElementById('lyrics-btn-six');
lyricBtnSix.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameSix+'/'+titleSix)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsSix = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsSix     
    
    })
    .catch(err => alert("no lyrics found")) 
})

let lyricBtnSeven = document.getElementById('lyrics-btn-seven');
lyricBtnSeven.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameSeven+'/'+titleSeven)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsSeven = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsSeven   
    
    })
    .catch(err => alert("no lyrics found")) 
})

let lyricBtnEight = document.getElementById('lyrics-btn-eight');
lyricBtnEight.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameEight+'/'+titleEight)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsEight = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsEight  
    
    })
    .catch(err => alert("no lyrics found")) 
})

let lyricBtnNine = document.getElementById('lyrics-btn-nine');
lyricBtnNine.addEventListener('click',function(){
    songLyrics.style.display = "block"
    fetch('https://api.lyrics.ovh/v1/'+artistNameNine+'/'+titleNine)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsNine = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsNine
    
    })
    .catch(err => alert("no lyrics found")) 
})

let lyricBtnTen = document.getElementById('lyrics-btn-ten');
lyricBtnTen.addEventListener('click',function(){
    fetch('https://api.lyrics.ovh/v1/'+artistNameTen+'/'+titleTen)
    .then(response => response.json())
    .then(data =>{
        let fullLyricsTen = data.lyrics
        console.log(data);
        document.getElementById('lyrics-area').innerHTML=fullLyricsTen
    
    })
    .catch(err => alert("no lyrics found")) 
})

    
    // for(let i=0; i<10; i++){
    //     let title = songTitle[i];
    //     console.log(title);
    //     //titleOne.innerHTML = title;
    //     document.getElementById('one').innerHTML=title;
    // }

    // let albumName = data.data.map(title => inputValue.album);
    // for(let i=0; i<10; i++){
    //     let album = albumName[i];
    //     console.log(album);
    //     document.getElementById('albumOne').innerHTML=album;
    // }
    
   
    
})
})


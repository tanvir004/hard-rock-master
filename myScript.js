var inputValue = document.querySelector('.inputValue');
var button = document.querySelector('.button');
//var titleOne = document.querySelector('.title-one');
var divArea = document.querySelector('name');

button.addEventListener('click', function(){
    fetch('https://api.lyrics.ovh/suggest/'+inputValue.value)
.then(response => response.json())
.then(data =>{
    
    console.log(data);
    var songTitle = data.data.map(inputValue => inputValue.title);
    var songAlbum = data.data.map(songTitle => songTitle.album.title);
    console.log(songAlbum);
    var titleOne = songTitle[0];
    var albumNameOne = songAlbum[0];
    document.getElementById('one').innerHTML=titleOne;
    document.getElementById('albumOne').innerHTML=albumNameOne;

    var titleTwo = songTitle[1];
    var albumNameTwo = songAlbum[1];
    document.getElementById('two').innerHTML=titleTwo;
    document.getElementById('albumTwo').innerHTML=albumNameTwo;

    var titleThree = songTitle[2];
    var albumNameThree = songAlbum[2];
    document.getElementById('three').innerHTML=titleThree;
    document.getElementById('albumThree').innerHTML=albumNameThree;

    var titleFour = songTitle[3];
    var albumNameFour = songAlbum[3];
    document.getElementById('four').innerHTML=titleFour;
    document.getElementById('albumFour').innerHTML=albumNameFour;

    var titleFive = songTitle[4];
    var albumNameFive = songAlbum[4];
    document.getElementById('five').innerHTML=titleFive;
    document.getElementById('albumFive').innerHTML=albumNameFive;

    var titleSix = songTitle[5];
    var albumNameSix = songAlbum[5];
    document.getElementById('six').innerHTML=titleSix;
    document.getElementById('albumSix').innerHTML=albumNameSix;

    var titleSeven = songTitle[6];
    var albumNameSeven = songAlbum[6];
    document.getElementById('seven').innerHTML=titleSeven;
    document.getElementById('albumSeven').innerHTML=albumNameSeven;

    var titleEight = songTitle[7];
    var albumNameEight = songAlbum[7];
    document.getElementById('eight').innerHTML=titleEight;
    document.getElementById('albumEight').innerHTML=albumNameEight;

    var titleNine = songTitle[8];
    var albumNameNine = songAlbum[8];
    document.getElementById('nine').innerHTML=titleNine;
    document.getElementById('albumNine').innerHTML=albumNameNine;

    var titleTen = songTitle[9];
    var albumNameTen = songAlbum[9];
    document.getElementById('ten').innerHTML=titleTen;
    document.getElementById('albumTen').innerHTML=albumNameTen;


    
    
    // for(let i=0; i<10; i++){
    //     var title = songTitle[i];
    //     console.log(title);
    //     //titleOne.innerHTML = title;
    //     document.getElementById('one').innerHTML=title;
    // }

    // var albumName = data.data.map(title => inputValue.album);
    // for(let i=0; i<10; i++){
    //     var album = albumName[i];
    //     console.log(album);
    //     document.getElementById('albumOne').innerHTML=album;
    // }
    
   
    
})
})
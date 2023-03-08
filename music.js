const img = document.querySelector("#img")
const artist = document.querySelector("#artist")
const song = document.querySelector("#song")
const btn = document.querySelector("#btn")

let searchBar = document.querySelector("#input").value



fetch("https://open.spotify.com/album/1B68g8b4wpedNDvvQLAoCe")
  
    
    .then((res) => {
      return res.json();
    })
  .then((data) => {
    console.log(data);
    img.innerHTML = data.image.url;
    artist.innertext = data.name;
    song.innertext = data.uri;
  });
  
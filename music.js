
// const img = document.querySelector("#img")
// const artist = document.querySelector("#artist")
// const song = document.querySelector("#song")
// const btn = document.querySelector("#btn")

// let searchBar = document.querySelector("#input").value



// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "8b567cd1f4mshe3add9253ac36e2p1f2a47jsn668f76c60d98",
//     "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));


const artistOne = document.querySelector('.artist__one')
const artistTwo = document.querySelector('.artist__two')
const artistThree = document.querySelector('.artist__three')
const artistFour = document.querySelector('.artist__four')
const artistFive = document.querySelector('.artist__five')
const artistSix = document.querySelector('.artist__six')
const artistSeven = document.querySelector('.artist__seven')
const artistEight = document.querySelector('.artist__eight')
const artistNine = document.querySelector('.artist__nine')
const artistTen = document.querySelector('.artist__ten')
const artistEleven = document.querySelector('.artist__eleven')
const artistTwelve = document.querySelector('.artist__twelve')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fee49b26amsh03cd7e91ceafab6p1c6f00jsncf77259865d7',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

// NAMES OF ARTISTS AND NUMBER OF FOLLOWERS

// fetch('https://spotify23.p.rapidapi.com/artist_related/?id=2w9zwq3AktTeYYMuhMjju8', options)
// .then(response => response.json())
// .then(response => {
// 	console.log(response);
// 		artistOne.innerText = response.artists[0].name;
// 		artistTwo.innerText = response.artists[1].name;
// 		artistThree.innerText = response.artists[2].name;
// 		artistFour.innerText = response.artists[3].name;
// 		artistFive.innerText = response.artists[4].name;
// 		artistSix.innerText = response.artists[5].name;
// 		artistSeven.innerText = response.artists[6].name;
// 		artistEight.innerText = response.artists[7].name;
// 		artistNine.innerText = response.artists[8].name;
// 		artistTen.innerText = response.artists[9].name;
// 		artistEleven.innerText = response.artists[10].name;
// 		artistTwelve.innerText = response.artists[11].name;
// 	})
	// .catch(err => console.error(err));


	// COVER IMAGES OF ARTISTS


	// Artist one

	fetch('https://i.scdn.co/image/ab6761610000e5eb1c81fe3a4d4ad7ce968d1349')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__one').src = url;
  });

	//   Artist two

	fetch('https://i.scdn.co/image/ab6761610000e5ebce558d6252eb871bd6310c94')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__two').src = url;
  });

  	// Artist three

	fetch('https://i.scdn.co/image/ab6761610000e5ebe9b9fbdd998a20f9d3d28068')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__three').src = url;
  });

  	// Artist four

	fetch('https://i.scdn.co/image/ab6761610000e5ebd7fc46d6b21a51bcb57e55eb')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__four').src = url;
  });

  	// Artist five

	fetch('https://i.scdn.co/image/ab6761610000e5ebd42df33b004a1fbb03bd9620')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__five').src = url;
  });

  	// Artist six

	fetch('https://i.scdn.co/image/ab6761610000e5eba8f9dce9103e30a3f9a3d781')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__six').src = url;
  });

  	// Artist Seven

	fetch('https://i.scdn.co/image/ab6761610000e5eb2a7ed9042a0122efcc29cccc')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__seven').src = url;
  });

  	// Artist Eight

	fetch('https://i.scdn.co/image/ab6761610000e5eb5528742b7e1ca953de6ac2e9')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__eight').src = url;
  });

  	// Artist Nine

	fetch('https://i.scdn.co/image/ab676161000051741284be636e28e9406803eaa3')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__nine').src = url;
  });

  	// Artist Ten

	fetch('https://i.scdn.co/image/ab6761610000e5eb8262b709f687d9f1b9a3454b')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__ten').src = url;
  });

  	// Artist Eleven

	fetch('https://i.scdn.co/image/ab6761610000e5eb3002f1b6846fae7796ff2560')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__eleven').src = url;
  });

  	// Artist Twelve

	fetch('https://i.scdn.co/image/ab6761610000e5ebb5a575508288bbd00cd8c988')
  .then(response => response.blob())
  .then(blob => {
    let url = URL.createObjectURL(blob);
    document.getElementById('img__twelve').src = url;
  });


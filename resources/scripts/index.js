
function findSongs(){
    var url = "https://mis321pa4evc.herokuapp.com/api/Songs";

    url += searchString;

    console.log(searchString)

    fetch(url).then(function(response) {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((song) => {
            console.log(song.title)
            html += `<div class="card col-md-4 bg-dark text-white">`;
			html += `<img src="./resources/images/music.jpeg" class="card-img" alt="...">`;
			html += `<div class="card-img-overlay">`;
			html += `<h5 class="card-title">`+song.title+`</h5>`;
            html += `</div>`;
            html += `</div>`;
		});
		
        if(html === ``){
            html = "No Songs found :("
        }
		document.getElementById("searchSongs").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}
function addSongs(){
    var url = "https://mis321pa4evc.herokuapp.com/api/Songs";
    const time = Date.now();
    const Deleted = "n";

    url += searchString;

    console.log(searchString)
    const sendSong = {
        id: id,
        SongTitle: document.getElementById("title").value,
        SongTimestamp: time,
        Deleted: Deleted

    }

    fetch(url, {
        method: "Post",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendSong)
    }).then((response)=>{
        Song = sendSong;
    })
}
function deleteSongs(id){
    var url = "https://mis321pa4evc.herokuapp.com/api/Songs/"+id;
    const time = Date.now();
    const Deleted = "y";

    url += searchString;

    console.log(searchString)
    const sendSong = {
        id: id,
        SongTitle: document.getElementById("title").value,
        SongTimestamp: time,
        Deleted: Deleted

    }

    fetch(url, {
        method: "Delete",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendSong)
    }).then((response)=>{
        Song = sendSong;
    })
}
function editSongs(id){
    var url = "https://mis321pa4evc.herokuapp.com/api/Songs/"+id;
    const time = Date.now();
    const Deleted = "y";

    url += searchString;

    console.log(searchString)
    const sendSong = {
        id: id,
        SongTitle: document.getElementById("title").value,
        SongTimestamp: time,
        Deleted: Deleted

    }

    fetch(url, {
        method: "Put",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendSong)
    }).then((response)=>{
        Song = sendSong;
    })
}

const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];



function loadImg(){
    removeImages();


    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+"&per_page=8&client_id=orJtxyi6fO-vbjUjgGk-4g5wu8rwwmMLg2ZymNN-3jk"

    fetch(url)
    .then(response => {
       if(response.ok)
           return response.json()
           else alert(response.status)
    })

    .then(data =>{
       const imageNodes = []
       for(let i = 0; i < data.results.length; i++){
             imageNodes[i] = document.createElement("div")
             imageNodes[i].className = "img";
             imageNodes[i].style.backgroundImage = `url(`+data.results[i].urls.raw+`)`
             imageNodes[i].addEventListener("click", function(){
               window.open(data.results[i].links.download,`_blank`)
             })
             grid.appendChild(imageNodes[i])
       }
    })
}



function removeImages(){
     grid.innerHTML = ""
}



input.addEventListener("keydown", function(event){
   if(event.key === "Enter")
      loadImg()
})




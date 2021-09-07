const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const submitButton = document.querySelector("#submit");
const imageHolderDiv = document.querySelector("#imageholder");
submitButton.addEventListener("click", (e) => {
  //let myKey = process.env.secretkey;
  let myKey = '';
  let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=goose`;
  fetch(myQuery)
    .then((response)=> response.json()) 
    .then(json => {
      let gif = json.data[getRandom(json.data.length)];
      imageHolderDiv.innerHTML = "<img src=" + gif.images.original.url + ">"; 
  })
})

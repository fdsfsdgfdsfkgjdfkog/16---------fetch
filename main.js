let linkS = document.querySelector('img')
let inputSearch = document.querySelector('#inputSearch')
let btnSearchImg = document.querySelector('#btnSearchImg')
let btnRandomImg = document.querySelector('#btnRandomImg')

let request = false;

let API = '6ptbSLgbYhS9Hl4HEodnBAPMomy1KrHY'
let RequestURLRandom = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=&rating=g`
let RequestURLSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${inputSearch.value}&limit=1&offset=0&rating=g&lang=en`

btnRandomImg.addEventListener("click", async () => {
  await requestRandom()
})


const requestRandom = async () =>{       
    fetch(RequestURLRandom)
    .then((oleg)=>oleg.json())
    .then(oleg =>{
        let link = oleg['data']['images']['original']['url']
        linkS.src = link
        console.log(link)   
    })
}
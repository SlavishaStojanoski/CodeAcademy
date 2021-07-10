const inputCrypto = document.querySelector('.inputFild')
const btn = document.querySelector('.btn')
const image = document.querySelector('.image')
const artTitle = document.querySelector('.artTitle')
const artContext = document.querySelector('.artContext')

// btn.addEventListener('click', function() {
//     image.src="images/bitcoin.png";
//     artTitle.textContent = el.name
//     artContext.textContent = 'sss'
// })

// let curentCrypto 

// btn.addEventListener('click', function() {
//     curentCrypto = cryptos.find()
// })

//https://api.coingecko.com/api/v3/exchanges

fetch('https://api.coingecko.com/api/v3/exchanges')
  .then(response => response.json())
  .then(crypto => crypto.map(elemet => showCharacters(elemet)))

  
  showCharacters = element => {
        btn.addEventListener('click' , function() {
            if (element.name === inputCrypto.value) {
                image.src=element.image;
                artTitle.innerHTML = `${element.description}`
                artContext.innerHTML = 
                    element.trust_score >= 8 ? 
                    "<p class='positive grade'>Positive</p>" : 
                    "<p class='negative grade'>Negative</p>"
            } 
            // image.src=element.image;
            // artTitle.innerText = (element.name)
            // artContext.innerText = element.id
        })
    }

    const input = document.getElementById('myInput') 
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("myBtn").click();
        }
      });
    

    


    // https://api.coingecko.com/api/v3/coins/list?include_platform=true
    // https://api.coingecko.com/api/v3/exchanges

    

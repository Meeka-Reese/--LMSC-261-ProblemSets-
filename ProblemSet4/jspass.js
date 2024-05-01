function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
let x = 0;
function progress(num)
{
  x += num;
  
}
function ranImages() {
    // Array of image URLs
    var images = [
      "eva.jpeg",
      "tesla-cat.jpg",
      "shinji.jpg"
    ];
  
   
    var randomImage = document.querySelector("#random-image");
  
    // Get a random index from the images array
    var randomIndex = Math.floor(Math.random() * images.length);
  
    // Set the src attribute of the image to the randomly chosen image URL
    randomImage.src = images[randomIndex];
  };



function password() {
    let pass = document.querySelector('#name').value;
    let secretpass = "runaway";
    if (pass == secretpass)
    {
      console.log("Correct Password");
      if (window.confirm("Select Yes If You Still Wish To Pass"))
      {
        window.location.href="ReiSecretHideOut.html";
      }
    else
    {
      console.log("Incorect Password");
    }
    }
    /*password to get into Rei's Secret Countdown*/
    
    
}
let alive = true;
let myInterval;
function countdown()
{
  
  let time = document.querySelector("#Seconds").value;
  /*grabbing number of seconds entered*/
  let remainingTime = parseInt(time);
  
  updateCountdown(remainingTime);
  
  myInterval = setInterval(timer, 1000);
  /*setting interval to countdown by 1 every second */
  function timer() 
  {
    remainingTime--;
    updateCountdown(remainingTime);
  
  }
  




  
}

function updateCountdown(remainingTime)
  {
    
    let countdownElement = document.getElementById("countdown");
    
    countdownElement.textContent = remainingTime;
    if (remainingTime < 0 && alive)
    {
      /*killing countdown when it reaches zero*/
      alive = false;
      alert("Suprise!")
      countdownElement.textContent = 0;
      clearInterval(myInterval);
      console.log("The countdown has ended");
      
    }
    
  }
  
function seal()
{
  document.querySelector('#text').innerHTML = "To Further The Evolution Of Humanity";
  
}



    
  
  
  


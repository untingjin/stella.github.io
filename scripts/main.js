let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/03.hwaseong.jpg') {
      myImage.setAttribute ('src','images/02.yanggam.jpg');
    } else {
      myImage.setAttribute ('src','images/03.hwaseong.jpg');
    }
}
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Seohaeline railway, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Seohaeline railway, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
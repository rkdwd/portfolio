// W3schools
let modals = new Array(12);
let imgs = new Array(12);
let modalImgs = new Array(12);
let captionTexts = new Array(12);
let spans = new Array(12);

for(let i=1; i<=12; i++){
  modals[i-1] = document.getElementById("modal"+String(i));
  imgs[i-1] = document.getElementById("myImg"+String(i));

  modalImgs[i-1] = document.getElementById("modalImg"+String(i));
  captionTexts[i-1] = document.getElementById("caption"+String(i));

  imgs[i-1].onclick = function(){
    modals[i-1].style.display = "block";
    modalImgs[i-1].src = this.src;
    captionTexts[i-1].innerHTML = this.alt;
  }

  spans[i-1] = document.getElementById("close"+String(i));

  spans[i-1].onclick = function(){
    modals[i-1].style.display = "none";
  }
}
const carousel = document.getElementById('slider');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

let images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];

let newImage = document.createElement('img');
newImage.src = "img/"+images[0];
carousel.appendChild(newImage);

let counter = 1;

nextBtn.onclick = () => {
  if (counter < images.length -1) {
    counter++;
    newImage.src = "img/"+images[counter];
    prevBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}

prevBtn.onclick = () => {
  if (counter !== 0) {
    counter--;
    newImage.src = "img/"+images[counter];
  } else {
    prevBtn.classList.add('disabled');
    nextBtn.classList.remove('disabled');
  }
}







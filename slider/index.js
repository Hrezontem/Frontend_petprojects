window.onload = () => {
  const images = document.querySelectorAll('.slider img')
  const buttons = document.querySelectorAll('.slider button')
  const indicat = document.querySelector('.slider .indicat')
  console.log(images.length)
  const indicatItem = document.querySelectorAll('.slider .indicat .indicat__item')
  let currentIndex = 0;
  
  console.log(indicat)
  function showImage(index) {
    images[currentIndex].classList.remove('active');
    images[index].classList.add('active')
    indicatItem[currentIndex].classList.remove('active_indicat')
    indicatItem[index].classList.add('active_indicat')
    currentIndex = index;
  }

buttons[0].addEventListener('click', () => {
      let index = currentIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage(index);
  });
buttons[1].addEventListener('click', () => {
    let index = currentIndex + 1;
    if (index >= images.length) { 
      index = 0;
    }
    showImage(index);
});

indicatItem.forEach((item, i) => {
  item.addEventListener('click', () => {
    let index = i;
    showImage(index)
  })
})


  showImage(currentIndex);
};

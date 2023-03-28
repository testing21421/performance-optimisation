const images = document.querySelectorAll('img');

images.forEach(image => {
  const img = new Image();
  img.src = image.getAttribute('data-src');
  img.onload = () => {
    image.setAttribute('src', img.src);
  };
});

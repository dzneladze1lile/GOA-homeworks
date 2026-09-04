const items = document.querySelectorAll('.item');

items.forEach(item => {
  const button = item.querySelector('.question');
  const icon = button.querySelector('img'); 

  button.addEventListener('click', () => {

    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        const otherButton = otherItem.querySelector('.question');
        const otherIcon = otherButton.querySelector('img');
        if (otherIcon) {
          otherIcon.src = "./assets/images/icon-plus.svg";
        }
      }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      icon.src = "./assets/images/icon-minus.svg";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
    }
  });
});
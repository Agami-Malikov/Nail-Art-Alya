const refs = {
  servicesLinks: document.querySelector('.services__menu'),
  links: document.querySelectorAll('.services__menu-link'),
};

refs.servicesLinks.addEventListener('click', evt => {

  evt.preventDefault();

  const activeLink = evt.target;
  
  if (activeLink.classList.contains('services__menu-link')) {
    for (let i = 0; i < refs.links.length; i += 1) {
      refs.links[i].classList.remove('services__menu-link--active');
    }

    activeLink.classList.add('services__menu-link--active');
  }
});

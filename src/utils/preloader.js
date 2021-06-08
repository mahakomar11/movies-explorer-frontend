const showPreloader = () => {
  if (document.querySelector('.preloader'))
    document.querySelector('.preloader').classList.remove('preloader_inactive');
};

const hidePreloader = () => {
  if (document.querySelector('.preloader'))
    document.querySelector('.preloader').classList.add('preloader_inactive');
};

export { showPreloader, hidePreloader };

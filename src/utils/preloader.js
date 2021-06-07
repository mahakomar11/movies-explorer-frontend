const showPreloader = () => {
  document.querySelector('.preloader').classList.remove('preloader_inactive');
};

const hidePreloader = () => {
  document.querySelector('.preloader').classList.add('preloader_inactive');
};

export { showPreloader, hidePreloader };

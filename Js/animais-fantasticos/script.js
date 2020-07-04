function initTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function addClass(index) {
      tabContent.forEach(section => section.classList.remove('ativo'));
      tabContent[index].classList.add('ativo');
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => addClass(index));
    });
  }
}
initTab();

// Accordion list
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach(item => item.addEventListener('click', activeAccordion));
}
initAccordion();

// Scroll suave Link interno
function initScrollInterno() {
  const linksInternos = document.querySelectorAll('.js-manu a[href^="#"]');
  
  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttrubute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  linksInternos.forEach(item => item.addEventListener('click', scrollSection));
}
initScrollInterno();

// Scroll animation
function initScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const value = window.innerHeight * 0.6;
  
  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top - value;
      if(sectionTop < 0) section.classList.add('ativo'); 
    });
  }
  
  window.addEventListener('scroll', animaScroll);
}
initScroll();

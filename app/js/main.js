const headerMenu = document.querySelector('.header__menu');
const openMenuBtn = document.querySelector('.header__menu-icon');
const navigation = document.querySelector('.header__navigation')


const hendleOpenMenu = (e) => {
    const target = e.target;
    const openMenu = target.closest('.header__menu-icon');

    if(openMenu) {
        headerMenu.classList.toggle('active')
        navigation.classList.toggle('active')
    }else {
        headerMenu.classList.remove('active')
        navigation.classList.remove('active') 
    }

}
navigation.addEventListener('click',hendleOpenMenu)
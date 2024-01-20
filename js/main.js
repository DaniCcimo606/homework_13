// Имя страници в логотипе
const titleName = document.title;
const webTitle = document.querySelector('.web-title')
const titleText = document.querySelector('.title__name');

if (document.title == 'Team') {
    const arr = [];
    document.querySelectorAll('.title__text').forEach(item => {
        const h4 = item.querySelector('h4');
        arr.push(h4.innerHTML);
    });
    console.log(arr);
    localStorage.setItem('headLink', arr);
}

const headLink = localStorage.getItem('headLink');
console.log(headLink.split(','));
const webTitlEntTeam = headLink.split(',');

if (document.title !== 'Home') {
    titleText.textContent = titleName;
    for (let i = 0; i < webTitlEntTeam.length; i++) {
        if (document.title == webTitlEntTeam[i]) {
            titleText.textContent = 'team';
        }
    }
} else {
    document.title == 'Home';
    webTitle.style.display = 'none';
}


// Бургер меню

const nav = document.querySelector('.header__nav');
const burgMenu = document.createElement('div');
burgMenu.classList.add('burger-menu');
burgMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
<path d="M7 10.5H25" stroke="white" stroke-width="2"/>
<path d="M7 16.5H25" stroke="white" stroke-width="2"/>
<path d="M7 22.5H25" stroke="white" stroke-width="2"/>
</svg>`;
const navList = document.querySelector('.header__nav--list');
const navClose = document.createElement('li');
navClose.classList.add('nav__close');
navClose.id = 'navClose';
const closeImg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M7 7L25 25" stroke="#EC6F5D" stroke-width="2"/>
<path d="M25 7L7 25" stroke="#EC6F5D" stroke-width="2"/>
</svg>`;
navClose.innerHTML = closeImg;
setInterval(() => {
    if (window.innerWidth <= 600) {
        nav.appendChild(burgMenu);
        navList.prepend(navClose);
        burgMenu.addEventListener('click', function (item) {
            navList.classList.add('show');
            burgMenu.firstChild.style.animation = 'rotateNav .3s ease-in-out .1s 1';
        })
        navClose.addEventListener('click', function (item) {
            navList.classList.remove('show');
            burgMenu.firstChild.style.animation = '';
        })
    }
    if (window.innerWidth > 600) {
        burgMenu.remove();
        navClose.remove();
    }
}, 100);


// Действующая ссылка в header nav link
let b = window.location.href;
let count = document.querySelector('.header__nav--list').querySelectorAll('.header__nav--item a').length;
console.log(b);

for (let i = 0; i < count; i++) {
    let c = document.querySelectorAll('.header__nav--link')[i];
    let d = c.href;
    console.log(d);
    if (d == b) {
        c.classList.add('header__nav--link_target');
    } else if (document.title == 'Oksana Kobzar') {
        document.querySelectorAll('.header__nav--link')[2].classList.add('header__nav--link_target');
    } else {
        c.classList.remove('header__nav--link_target');
    }
}


// Отмена перехода к табу при нажатии
if (document.title == 'Home') {
    let tabs = document.querySelectorAll('.hero__experience--link, .slider__btn--item');
    let tabsContent = document.querySelectorAll('.hero__experience--item--content, .slider__item');
    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            let id = e.target.getAttribute('href').replace('#', '');
            tabs.forEach(tabItem => {
                tabItem.classList.remove('hero__experience--link--target', 'slider__btn--item--target');
            });
            tabsContent.forEach(tabItem => {
                tabItem.classList.remove('hero__experience--item--content--target', 'slider__item--target');
            });
            tab.classList.add('hero__experience--link--target', 'slider__btn--item--target');
            document.getElementById(id).classList.add('hero__experience--item--content--target', 'slider__item--target');
        })
    });
    document.querySelector('.hero__experience--link').click();
    document.querySelector('.slider__btn--item').click();
}


// Убираю position для header
if (document.title == 'Team' || document.title == 'Publications' || document.title == 'Services' || document.title == 'Oksana Kobzar') {
    let headPosition = document.querySelector('.header');
    headPosition.style.position = 'inherit';
}


// Кнопка "news" "articles" на странице Publications
if (document.title == 'Publications') {
    let publickFloatBg = document.querySelector('.floating-bg');
    let news = document.getElementById('news');
    let articles = document.getElementById('articles');
    
    news.addEventListener('click', function () {
        publickFloatBg.style.width = '50%';
    })
    articles.addEventListener('click', function () {
        publickFloatBg.style.width = '100%';
    })
    news.click();
}


// Смена цвета titleContent
if (document.title == 'Services') {
    let titleColor = document.querySelector('.title__name');
    titleColor.style.color = 'white';
}


// pop-up
if (document.title == 'Oksana Kobzar') {
    const popUp = document.getElementById('popUp');
    const popUpClose = document.getElementById('popUpClose');
    const popUpOpen = document.getElementById('popUpOpen');
    console.log(popUp);
    console.log(popUpClose);
    console.log(popUpOpen);
    // popUp.classList == 'pop-up' ? console.log(true) : console.log(false);
    setInterval(() => {
        const popUpOpenTop = popUpOpen.getBoundingClientRect().top;
        const popUpOpenLeft = popUpOpen.getBoundingClientRect().left;
        if (popUp.classList != 'pop-up show') {
            popUp.style.top = `${popUpOpenTop}px`;
            popUp.style.left = `${popUpOpenLeft}px`;
        }
    }, 100);
    
    popUpOpen.addEventListener('click', function () {
        popUp.classList.add('show');
        popUp.style.top = '0px';
        popUp.style.left = '0px';
    })
    popUpClose.addEventListener('click', function () {
        popUp.classList.remove('show');
    })
}
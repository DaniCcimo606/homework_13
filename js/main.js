// Имя страници в логотипе
let titleName = document.title;
let webTitle = document.querySelector(`.web-title`)
let titleText = document.querySelector(`.title__name`)

if (document.title !== `Home`) {
    document.title = titleName;
    titleText.textContent = titleName;
} else {
    document.title == `Home`;
    webTitle.style.display = `none`;
}

// Действующая ссылка в header nav link
let b = window.location.href;
let count = document.querySelector(`.header__nav--list`).querySelectorAll(`.header__nav--item a`).length;

for (let i = 0; i < count; i++) {
    let c = document.querySelectorAll(`.header__nav--link`)[i];
    let d = c.href;
    if (d == b) {
      c.classList.add(`header__nav--link_target`);
    } else {
      c.classList.remove(`header__nav--link_target`);
    }
}

// Отмена перехода к табу при нажатии
let tabs = document.querySelectorAll(`.hero__experience--link, .slider__btn--item`);
let tabsContent = document.querySelectorAll(`.hero__experience--item--content, .slider__item`);

if (document.title == `Home`) {
    tabs.forEach(tab => {
        tab.addEventListener(`click`, function (e) {
            e.preventDefault();
            let id = e.target.getAttribute(`href`).replace(`#`, ``);
            tabs.forEach(tabItem => {
                tabItem.classList.remove(`hero__experience--link--target`, `slider__btn--item--target`);
            });
            tabsContent.forEach(tabItem => {
                tabItem.classList.remove(`hero__experience--item--content--target`, `slider__item--target`);
            });
            tab.classList.add(`hero__experience--link--target`, `slider__btn--item--target`);
            document.getElementById(id).classList.add(`hero__experience--item--content--target`, `slider__item--target`);
        })
    });
    document.querySelector(`.hero__experience--link`).click();
    document.querySelector(`.slider__btn--item`).click();
}


// Убираю position для header
if (document.title == `Team` || document.title == `Publications` || document.title == `Services`) {
    let headPosition = document.querySelector(`.header`);
    headPosition.style.position = `inherit`;
}

// Кнопка "news" "articles" на странице Publications
if (document.title == `Publications`) {
    let publickFloatBg = document.querySelector(`.floating-bg`);
    let news = document.getElementById(`news`);
    let articles = document.getElementById(`articles`);
    
    news.addEventListener(`click`, function () {
        publickFloatBg.style.width = `50%`;
    })
    articles.addEventListener(`click`, function () {
        publickFloatBg.style.width = `100%`;
    })
    news.click();
}

// Смена цвета titleContent
if (document.title == `Services`) {
    let titleColor = document.querySelector(`.title__name`);
    titleColor.style.color = `white`;
}
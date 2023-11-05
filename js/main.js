// Имя страници в логотипе
let titleName = document.title;
let webTitle = document.querySelector(`.web-title`)
let titleText = document.querySelector(`.title__name`)

if (document.title != `Home`) {
    document.title = titleName;
    titleText.textContent = titleName;
} else {
    document.title = `Home`;
    webTitle.style.display = `none`;
}

// Активная ссылка в header nav link
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
let tabs = document.querySelectorAll(`.hero__experience--link`);
let tabsContent = document.querySelectorAll(`.hero__experience--item--content`);

if (document.title == `Home`) {
    tabs.forEach(tab => {
        tab.addEventListener(`click`, function (e) {
            e.preventDefault();
            const id = e.target.getAttribute(`href`).replace(`#`, ``);
    
            tabs.forEach(tabItem => {
                tabItem.classList.remove(`hero__experience--link--target`);
            });
            tabsContent.forEach(tabItem => {
                tabItem.classList.remove(`hero__experience--item--content--target`);
            });
            tab.classList.add(`hero__experience--link--target`);
            document.getElementById(id).classList.add(`hero__experience--item--content--target`);
        })
    });
    document.querySelector(`.hero__experience--link`).click();
}


// Добавляю изменяю макс. ширину для страниц
let c = document.querySelector(`.header`);
let container = document.querySelectorAll(`.container`);

if (document.title == `Team`, `Publications`) {
    c.style.position = `inherit`;
    container.forEach(element => {
        element.style.maxWidth = `1600px`;
        element.style.margin = `0 auto`;
    });
}

// Кнопка "news" "articles" на странице Publications
let publickFloatBg = document.querySelector(`.floating-bg`);
let news = document.getElementById(`news`);
let articles = document.getElementById(`articles`);

news.addEventListener(`click`, function () {
    publickFloatBg.style.width = `50%`;
})
articles.addEventListener(`click`, function () {
    publickFloatBg.style.width = `100%`;
})
if (document.title == `Publications`) {
    news.click();
}
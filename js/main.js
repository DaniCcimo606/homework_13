// Имя страници в логотипе
let titleName = document.title;
let titleText = document.querySelector(`.web-title`)

if (document.title =! `Home`) {
    document.title = titleName;
} else {
    document.title = `Home`;
    titleText.style.display = `none`;
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
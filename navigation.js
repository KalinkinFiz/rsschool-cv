class Navigation {
  constructor() {
    this.navigationElement = document.getElementById("navigation");
    this.burgerElement = document.getElementById("navigation-burger");

    this.isOpen = false;

    this.overlay = document.createElement("div");
    this.overlay.className = "navigation-overlay";
  }

  init() {
    this.burgerElement.addEventListener("click", () => this.toggle());
    this.overlay.addEventListener("click", () => this.close());

    this.navigationElement.querySelectorAll("a").forEach((el) => {
      el.addEventListener("click", (e) => this.close());
    });
  }

  open() {
    this.navigationElement.style.transition = ".25s";
    this.navigationElement.style.transform = "translate(0)";
    this.burgerElement.classList.add("open");

    document.body.style.overflowY = "hidden";
    this.navigationElement.parentNode.insertBefore(
      this.overlay,
      this.navigationElement
    );

    this.isOpen = true;
  }

  close() {
    this.navigationElement.style.transform = "translate(100%)";
    this.burgerElement.classList.remove("open");

    document.body.style.overflowY = "auto";
    this.overlay.parentNode.removeChild(this.overlay);

    this.isOpen = false;

    setTimeout(
      () => (this.navigationElement.style.transitionProperty = "none"),
      250
    );
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }
}

new Navigation().init();

let style = [
  "padding: 5px;",
  "background-color: #3E5F8A;",
  "font-size: 12px;",
  "color: white;",
].join("");

console.groupCollapsed("CV %c(Click here 🧐)", "color: red; ");
console.group("%c📝 Самооценка: ", style);
console.log(
  "🛠 +10 баллов - Вёрстка валидная. Проверить валидность вёрстки: https://validator.w3.org/"
);
console.log(
  "🛠 +20 балла - Вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов. Заголовок h1 может быть только один. feedback: header, nav, address, main, article, section, figure, figcaption, footer, h1, h2"
);
console.log(
  "🛠 +10 баллов - Для оформления СV используются css-стили. 1 балл за каждый стилизованный элемент, но не больше 10 баллов"
);
console.log(
  "🛠 +10 баллов - Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы"
);
console.log(
  "🛠 +10 баллов - Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется"
);
console.log(
  "🛠 +10 баллов - Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным."
);
console.log(
  "🛠 +10 баллов - На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым)"
);
console.log(
  "🛠 +10 баллов - Контакты для связи и перечень навыков оформлены в виде списка ul > li"
);
console.log(
  "🛠 +10 баллов - CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского"
);
console.log(
  "🛠 +10 баллов - CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода"
);
console.log(
  "🛠 +10 баллов - CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий"
);
console.log("🛠 +10 баллов - CV выполнено на английском языке");
console.log(
  "🛠 +10 баллов - Выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт)"
);
console.log(
  "🙈 0 баллов - Есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs)"
);
console.log(
  "🛠 +10 баллов - Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию"
);
console.groupEnd();
console.log("%c🏆 Итого: 150 из 160 баллов", style);
console.groupEnd();

var bodyClass = "home";
const body = document.querySelector('body');

export function bgHandler(page) {
  body.classList.remove(`${bodyClass}`);

  switch(page) {
    case "/":
      bodyClass = "home";
      break;
    case "/the-universe":
      bodyClass = "universe";
      break;
    case "/exploring":
      bodyClass = "exploration";
      break;
    default:
      bodyClass = "home";
      break;
  }

  body.classList.add(`${bodyClass}`);

}
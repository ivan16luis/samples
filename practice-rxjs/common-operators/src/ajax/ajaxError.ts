import { catchError, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const handlerError = (error: AjaxError) => {
  console.warn("error en:", error.message);
  return of([]);
};

const obs$ = ajax("https://api.github.com/users?per_page=5").pipe(
  pluck("response"),
  catchError(handlerError)
);

obs$.subscribe(console.log);

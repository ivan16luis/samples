import {catchError, of,  } from "rxjs";
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

const url = "https://api.github.com/users?per_page=5";

const obs$ = ajax
  .getJSON(url, {
    "Content-Type": "application/json",
    Authorization: "Bearer WDC123QZA",
  }).pipe(catchError(handlerError));

obs$.subscribe(console.log);

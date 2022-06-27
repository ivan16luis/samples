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

const url = "https://httpbin.org/delay/1";

ajax
  .post(
    url,
    {
      name: "luis",
      age: 30,
      job: "developer",
    },
    { "Content-Type": "application/json" }
  )
  .pipe(pluck("response"), catchError(handlerError))
  .subscribe(console.log);

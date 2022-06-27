import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const textField = document.createElement("input");
const orderList = document.createElement("ol");

app.append(textField, orderList);

const input$ = fromEvent<KeyboardEvent>(textField, "keyup");

const url = "https://api.github.com/search/users?q=";

input$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    map((value) => {
      console.log("====> ", value);
      return ajax.getJSON(`${url}${value}`);
    }),
    mergeAll(),
    pluck("items")
  )
  .subscribe(console.log);

import { fromEvent, Observable } from "rxjs";
import { pluck, map, debounceTime, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import "./style.css";
import { GithubResponse, GithubUser } from "../interfaces/github.interface";

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

const showResults = (users: GithubUser[]) => {
  orderList.innerHTML = "";
  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = user.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.text = "Show profile";
    anchor.target = "_blank";

    li.append(img);
    li.append(user.login + "");
    li.append(anchor);

    orderList.append(li);
  }
};

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck(`target`, `value`),
    map((value) => {
      console.log("====> ", value);
      return ajax.getJSON<GithubResponse>(`${url}${value}`);
    }),
    mergeAll<Observable<GithubResponse>>(),
    pluck("items")
  )
  .subscribe(showResults);

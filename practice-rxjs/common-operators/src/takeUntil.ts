import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const button = document.createElement("button");
button.innerHTML = "SAVE";

app.append(button);

const counter$ = interval(1000);
const clickButton$ = fromEvent(button, "click").pipe(
  tap(()=>console.log('before:skip')),
  skip(1),
  tap(()=>console.log('alter:skip')),
);

counter$
  .pipe(takeUntil(clickButton$))
  .subscribe({
    next: console.log,
    complete: () => console.log("complete:counter"),
  });

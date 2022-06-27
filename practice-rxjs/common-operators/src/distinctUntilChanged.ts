import {  distinctUntilChanged, map, range, tap } from "rxjs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const numbers$ = range(0, 20).pipe(
  map((x) => (x % 2 === 0 ? x + 1 : x * 2 - 1)),
  tap((x) => console.log(`----> ${x}`)),
  distinctUntilChanged()
);

numbers$.subscribe({
  next: console.log,
  complete: () => console.log("complete:distinct"),
});

import { fromEvent, interval, map, sample } from "rxjs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const interval$ = interval(5000);
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sample(interval$),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);

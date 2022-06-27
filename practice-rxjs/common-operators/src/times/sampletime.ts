import { fromEvent, map, sampleTime } from "rxjs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);

import { auditTime, fromEvent, map, tap } from "rxjs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    tap((position) => console.log("position: ", position)),
    auditTime(2000)
  )
  .subscribe(console.log);

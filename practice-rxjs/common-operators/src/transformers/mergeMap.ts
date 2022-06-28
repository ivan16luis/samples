import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <br/>
`;

const letters$ = of("a", "b", "c");
letters$.pipe(
  mergeMap((letter) =>
    interval(1000).pipe(
      map((index) => letter + index),
      take(3)
    )
  )
);
// .subscribe(console.log);

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);

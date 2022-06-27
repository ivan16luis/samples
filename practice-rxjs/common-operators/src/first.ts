import { first, fromEvent, map, range, take, tap } from "rxjs";
const sourceRange$ = range(0, 11).pipe(
  tap((x) => console.log(">", x)),
  take(5) //position
);

sourceRange$.subscribe(console.log);

const sourceFirst$ = fromEvent<MouseEvent>(document, "click").pipe(
  tap<MouseEvent>(console.log),
  map((position) => ({ x: position.clientX, y: position.clientY })),
  first((position) => position.x > 250 && position.y > 250)
);

sourceFirst$.subscribe(console.log);

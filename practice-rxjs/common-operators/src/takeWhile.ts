import { fromEvent, map, takeWhile, tap } from "rxjs";

const sourceTakeWhile$ = fromEvent<MouseEvent>(document, "click").pipe(
  tap<MouseEvent>(console.log),
  map((position) => ({ x: position.clientX, y: position.clientY })),
  takeWhile(({ y }) => y <= 150)
);

sourceTakeWhile$.subscribe({
  next: console.log,
  complete: () => console.log("complete:takeWhile"),
});

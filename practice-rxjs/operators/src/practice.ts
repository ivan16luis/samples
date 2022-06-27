import {
  asyncScheduler,
  filter,
  from,
  fromEvent,
  interval,
  map,
  of,
  pluck,
  range,
  tap,
  timer,
} from "rxjs";
import "./style.css";

const sourceFromEvent1$ = fromEvent<MouseEvent>(document, "click");
// const sourceFromEvent2$ = fromEvent<KeyboardEvent>(document, "keyup");

sourceFromEvent1$.subscribe({
  next: ({ x, y }) => console.log("click: ", x, y),
  error: console.log,
  complete: () => console.log("complete:source1"),
});

// sourceFromEvent2$.subscribe({
//   next: ({ key }) => console.log("keyup: ", key),
//   error: console.log,
//   complete: () => console.log("complete:source2"),
// });

const sourceRage$ = range(0, 10);
sourceRage$.subscribe({ next: console.log });

const sourceInterval$ = interval(3000);
const obsInterval$ = sourceInterval$.subscribe({
  next: (count) => {
    console.log(">", count);
    if (count === 5) {
      obsInterval$.unsubscribe();
    }
  },
});

const nowDate = new Date();
nowDate.setSeconds(nowDate.getSeconds() + 5);
const sourceTimer$ = timer(nowDate);
sourceTimer$.subscribe({
  next: (val) => {
    console.log("timer: ", val);
  },
});

const doHello = (name: String) => console.log(`hello: ${name}`);

doHello("luis");

const subscribe = asyncScheduler.schedule(
  function (value) {
    let state = value ?? 0;
    console.log("state", state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

asyncScheduler.schedule(() => subscribe.unsubscribe(), 6000);

const sourceFrom$ = from("luis16ivan");
sourceFrom$.subscribe({ next: (val) => console.log("from: ", val) });

const sourceFrom1$ = from([1, 2, 3, 4, 5, 6]);
sourceFrom1$.subscribe({ next: (val) => console.log("from1: ", val) });

const sourceFrom2$ = from(fetch("https://api.github.com/users/ivan16luis"));
sourceFrom2$.subscribe({
  next: async (response) => {
    const data = await response.json();
    console.log("form2: ", data);
  },
});

const sourceOf$ = of(...[312, 456, 789]);
sourceOf$.subscribe({ next: (val) => console.log("of: ", val) });

const myGenerator = function* () {
  yield 31;
  yield 32;
  yield 33;
  yield 34;
  yield 35;
  yield 36;
};

const myIterable = myGenerator();

const sourceFrom3$ = from(myIterable);
sourceFrom3$.subscribe({ next: console.log });

const sourceMap$ = range(1, 20).pipe(map((x) => Math.pow(x, 2)));
sourceMap$.subscribe({ next: (val) => console.log("pow: ", val) });

const sourceMap1$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code)
);
sourceMap1$.subscribe({
  next: (key) => console.log("keyup:map: ", key),
});

const sourcePluck$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  pluck("key"),
  map((x) => x.toUpperCase())
);
sourcePluck$.subscribe({
  next: (key) => console.log("keyup:pluck: ", key),
});

const sourceFilter$ = range(0, 20).pipe(filter((x) => x % 2 === 1));
sourceFilter$.subscribe({
  next: (key) => console.log("filter: ", key),
});

const sourceTap$ = range(0, 20).pipe(
  tap((x) => {
    console.log(">>>> before:", x);
  }),
  map((x) => x * 2),
  tap((x) => {
    console.log(">>>> after:", x);
  })
);

sourceTap$.subscribe({
  next: (key) => console.log("tap:map:tap ", key),
});

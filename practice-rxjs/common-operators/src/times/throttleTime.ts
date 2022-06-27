import {
    asyncScheduler,
    distinctUntilChanged,
    fromEvent,
    pluck,
    throttleTime,
  } from "rxjs";
  import "./style.css";
  
  const app = document.querySelector<HTMLDivElement>("#app")!;
  
  app.innerHTML = `
    <h1>Hello Vite!</h1>
    <br/>
  `;
  
  const textField = document.createElement("input");
  app.append(textField);
  
  const input$ = fromEvent<KeyboardEvent>(textField, "keyup");
  
  input$
    .pipe(
      throttleTime(500, asyncScheduler, {
        leading: false, // true
        trailing: true,
      }),
      pluck("target", "value"),
      distinctUntilChanged()
    )
    .subscribe(console.log);
  
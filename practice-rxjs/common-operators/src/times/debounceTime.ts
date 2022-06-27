import {
    debounceTime,
    distinctUntilChanged,
    fromEvent,
    pluck,
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
    .pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged())
    .subscribe(console.log);
  
import { fromEvent, map } from "rxjs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
<div id="lipsum">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et posuere magna. Sed pulvinar eros vel velit blandit consectetur sed vel turpis. Quisque ex ipsum, pretium sed venenatis in, maximus sit amet ligula. Nullam fringilla, neque a mollis vehicula, sapien felis suscipit tortor, at ultrices erat augue scelerisque eros. Curabitur eget leo convallis, eleifend quam at, malesuada quam. Aenean lorem quam, malesuada sit amet ipsum eget, tempus maximus leo. Aenean in erat a eros fringilla auctor sed in ligula. Ut feugiat dignissim sapien, eget placerat massa. Sed interdum congue ex vel imperdiet. Nullam rutrum mi finibus ante faucibus, a luctus sem ornare. Morbi id semper dolor, ac iaculis risus. In cursus sem sed lacus eleifend congue.
</p>
<p>
Praesent tincidunt scelerisque purus in congue. Nunc imperdiet nisl at est ullamcorper, id lacinia orci blandit. Aenean scelerisque dui ut dolor vulputate maximus. Mauris velit tortor, condimentum vel ex eu, faucibus hendrerit neque. Morbi vitae pretium elit, nec dictum odio. Etiam maximus, justo et tincidunt rutrum, odio magna auctor neque, sed congue felis diam quis arcu. Duis tincidunt metus sed mauris tempus rhoncus. Fusce mattis leo at nulla finibus, ut placerat tellus placerat. Ut at risus dignissim, accumsan orci at, accumsan velit. Nam elementum vitae mauris nec viverra. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nisl a leo blandit fringilla. Curabitur ligula justo, malesuada in feugiat id, porta non lectus.
</p>
<p>
Vestibulum sodales elit sed odio eleifend, accumsan sagittis massa feugiat. Phasellus nec sem iaculis, fringilla ex eget, fringilla tortor. Vestibulum eget vulputate lectus. Duis lectus arcu, varius non elementum ut, suscipit non mauris. Ut a nunc nec lacus scelerisque fermentum. Duis orci diam, luctus eu consectetur vitae, consequat non lectus. Curabitur ullamcorper euismod velit in sagittis. Nullam feugiat tempor ante, nec auctor lectus vulputate eget.
</p>
<p>
In sem velit, porttitor nec dui nec, congue scelerisque odio. Morbi porttitor ex non fermentum vehicula. Quisque dui mi, scelerisque et mollis at, aliquet finibus turpis. Nulla et libero urna. Sed imperdiet tortor id blandit laoreet. Nullam non risus nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque fringilla, libero eu dictum vestibulum, magna purus dictum dolor, pharetra gravida nisi sapien ac urna. Pellentesque condimentum magna est, sed pharetra metus dapibus sed. Aenean venenatis massa non urna placerat scelerisque. Vivamus convallis enim pharetra ligula aliquam, id dignissim urna aliquet. Phasellus ornare tellus nunc, et malesuada turpis aliquam quis. Duis tincidunt ligula in nunc ultrices, ac hendrerit orci faucibus. Vestibulum pellentesque lacus vel pharetra mattis. Morbi molestie, tellus non convallis tincidunt, nibh tellus suscipit tellus, a eleifend mauris arcu at mi.
</p>
<p>
Praesent eget tincidunt ex. In aliquam commodo mauris, non congue dui fringilla vitae. Nam commodo commodo lectus et elementum. Nam vel lacus a elit blandit aliquam. Maecenas fringilla erat ante, at blandit dolor sollicitudin eget. Donec fringilla malesuada nunc id pharetra. Fusce tempor vulputate sollicitudin. Phasellus ultrices ac mauris quis bibendum. Morbi tellus nulla, tristique id odio a, feugiat vulputate nulla. Mauris volutpat risus nec tincidunt fermentum.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et posuere magna. Sed pulvinar eros vel velit blandit consectetur sed vel turpis. Quisque ex ipsum, pretium sed venenatis in, maximus sit amet ligula. Nullam fringilla, neque a mollis vehicula, sapien felis suscipit tortor, at ultrices erat augue scelerisque eros. Curabitur eget leo convallis, eleifend quam at, malesuada quam. Aenean lorem quam, malesuada sit amet ipsum eget, tempus maximus leo. Aenean in erat a eros fringilla auctor sed in ligula. Ut feugiat dignissim sapien, eget placerat massa. Sed interdum congue ex vel imperdiet. Nullam rutrum mi finibus ante faucibus, a luctus sem ornare. Morbi id semper dolor, ac iaculis risus. In cursus sem sed lacus eleifend congue.
</p>
<p>
Praesent tincidunt scelerisque purus in congue. Nunc imperdiet nisl at est ullamcorper, id lacinia orci blandit. Aenean scelerisque dui ut dolor vulputate maximus. Mauris velit tortor, condimentum vel ex eu, faucibus hendrerit neque. Morbi vitae pretium elit, nec dictum odio. Etiam maximus, justo et tincidunt rutrum, odio magna auctor neque, sed congue felis diam quis arcu. Duis tincidunt metus sed mauris tempus rhoncus. Fusce mattis leo at nulla finibus, ut placerat tellus placerat. Ut at risus dignissim, accumsan orci at, accumsan velit. Nam elementum vitae mauris nec viverra. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nisl a leo blandit fringilla. Curabitur ligula justo, malesuada in feugiat id, porta non lectus.
</p>
<p>
Vestibulum sodales elit sed odio eleifend, accumsan sagittis massa feugiat. Phasellus nec sem iaculis, fringilla ex eget, fringilla tortor. Vestibulum eget vulputate lectus. Duis lectus arcu, varius non elementum ut, suscipit non mauris. Ut a nunc nec lacus scelerisque fermentum. Duis orci diam, luctus eu consectetur vitae, consequat non lectus. Curabitur ullamcorper euismod velit in sagittis. Nullam feugiat tempor ante, nec auctor lectus vulputate eget.
</p>
<p>
In sem velit, porttitor nec dui nec, congue scelerisque odio. Morbi porttitor ex non fermentum vehicula. Quisque dui mi, scelerisque et mollis at, aliquet finibus turpis. Nulla et libero urna. Sed imperdiet tortor id blandit laoreet. Nullam non risus nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque fringilla, libero eu dictum vestibulum, magna purus dictum dolor, pharetra gravida nisi sapien ac urna. Pellentesque condimentum magna est, sed pharetra metus dapibus sed. Aenean venenatis massa non urna placerat scelerisque. Vivamus convallis enim pharetra ligula aliquam, id dignissim urna aliquet. Phasellus ornare tellus nunc, et malesuada turpis aliquam quis. Duis tincidunt ligula in nunc ultrices, ac hendrerit orci faucibus. Vestibulum pellentesque lacus vel pharetra mattis. Morbi molestie, tellus non convallis tincidunt, nibh tellus suscipit tellus, a eleifend mauris arcu at mi.
</p>
<p>
Praesent eget tincidunt ex. In aliquam commodo mauris, non congue dui fringilla vitae. Nam commodo commodo lectus et elementum. Nam vel lacus a elit blandit aliquam. Maecenas fringilla erat ante, at blandit dolor sollicitudin eget. Donec fringilla malesuada nunc id pharetra. Fusce tempor vulputate sollicitudin. Phasellus ultrices ac mauris quis bibendum. Morbi tellus nulla, tristique id odio a, feugiat vulputate nulla. Mauris volutpat risus nec tincidunt fermentum.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et posuere magna. Sed pulvinar eros vel velit blandit consectetur sed vel turpis. Quisque ex ipsum, pretium sed venenatis in, maximus sit amet ligula. Nullam fringilla, neque a mollis vehicula, sapien felis suscipit tortor, at ultrices erat augue scelerisque eros. Curabitur eget leo convallis, eleifend quam at, malesuada quam. Aenean lorem quam, malesuada sit amet ipsum eget, tempus maximus leo. Aenean in erat a eros fringilla auctor sed in ligula. Ut feugiat dignissim sapien, eget placerat massa. Sed interdum congue ex vel imperdiet. Nullam rutrum mi finibus ante faucibus, a luctus sem ornare. Morbi id semper dolor, ac iaculis risus. In cursus sem sed lacus eleifend congue.
</p>
<p>
Praesent tincidunt scelerisque purus in congue. Nunc imperdiet nisl at est ullamcorper, id lacinia orci blandit. Aenean scelerisque dui ut dolor vulputate maximus. Mauris velit tortor, condimentum vel ex eu, faucibus hendrerit neque. Morbi vitae pretium elit, nec dictum odio. Etiam maximus, justo et tincidunt rutrum, odio magna auctor neque, sed congue felis diam quis arcu. Duis tincidunt metus sed mauris tempus rhoncus. Fusce mattis leo at nulla finibus, ut placerat tellus placerat. Ut at risus dignissim, accumsan orci at, accumsan velit. Nam elementum vitae mauris nec viverra. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam semper nisl a leo blandit fringilla. Curabitur ligula justo, malesuada in feugiat id, porta non lectus.
</p>
<p>
Vestibulum sodales elit sed odio eleifend, accumsan sagittis massa feugiat. Phasellus nec sem iaculis, fringilla ex eget, fringilla tortor. Vestibulum eget vulputate lectus. Duis lectus arcu, varius non elementum ut, suscipit non mauris. Ut a nunc nec lacus scelerisque fermentum. Duis orci diam, luctus eu consectetur vitae, consequat non lectus. Curabitur ullamcorper euismod velit in sagittis. Nullam feugiat tempor ante, nec auctor lectus vulputate eget.
</p>
<p>
In sem velit, porttitor nec dui nec, congue scelerisque odio. Morbi porttitor ex non fermentum vehicula. Quisque dui mi, scelerisque et mollis at, aliquet finibus turpis. Nulla et libero urna. Sed imperdiet tortor id blandit laoreet. Nullam non risus nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque fringilla, libero eu dictum vestibulum, magna purus dictum dolor, pharetra gravida nisi sapien ac urna. Pellentesque condimentum magna est, sed pharetra metus dapibus sed. Aenean venenatis massa non urna placerat scelerisque. Vivamus convallis enim pharetra ligula aliquam, id dignissim urna aliquet. Phasellus ornare tellus nunc, et malesuada turpis aliquam quis. Duis tincidunt ligula in nunc ultrices, ac hendrerit orci faucibus. Vestibulum pellentesque lacus vel pharetra mattis. Morbi molestie, tellus non convallis tincidunt, nibh tellus suscipit tellus, a eleifend mauris arcu at mi.
</p>
<p>
Praesent eget tincidunt ex. In aliquam commodo mauris, non congue dui fringilla vitae. Nam commodo commodo lectus et elementum. Nam vel lacus a elit blandit aliquam. Maecenas fringilla erat ante, at blandit dolor sollicitudin eget. Donec fringilla malesuada nunc id pharetra. Fusce tempor vulputate sollicitudin. Phasellus ultrices ac mauris quis bibendum. Morbi tellus nulla, tristique id odio a, feugiat vulputate nulla. Mauris volutpat risus nec tincidunt fermentum.
</p>
</div>
`;

const body = document.querySelector("body");

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body?.append(progressBar);

// funcion calculate
const getPercentScroll = (event: any) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  let value = (scrollTop / (scrollHeight - clientHeight)) * 100;
  let percent = value.toFixed(2);
  console.log(percent);
  return percent;
};

const scroll$ = fromEvent(document, "scroll").pipe(
  map((event) => getPercentScroll(event))
);
scroll$.subscribe((percent) => {
  progressBar.style.width = `${percent}%`;
});

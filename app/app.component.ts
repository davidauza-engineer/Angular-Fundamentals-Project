import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type="text" #username>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  // {{ expressions }}
  // [property]="binding"
  // (event)="binding"
  // [(two-way)]="binding"
  // #refVariables => Giving a name to a DOM node
  name: string = 'Todd';

  handleClick(value: string) {
    console.log(value);
  }
}

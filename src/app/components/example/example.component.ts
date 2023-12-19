import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
interface Item {title: string; url: string;}

export class ExampleComponent {
  items: Item[] = [
    {title: "Hello World", url: "/hello"},
    {title: "Hello World", url: "/hello"},
    {title: "Hello World", url: "/hello"}
  ];
  select() {
    console.log("Select hier");
  }
}

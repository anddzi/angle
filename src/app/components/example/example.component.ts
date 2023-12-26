import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {title: string; url: string;}

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})

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

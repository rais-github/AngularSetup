import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = 'BL_logo_square_jpg.jpg';
  ngOnInit() {
    this.title = 'Hello from Bridgelabz';
  }
}

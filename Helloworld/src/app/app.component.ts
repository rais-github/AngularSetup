import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = 'BL_logo_square_jpg.jpg';
  url = 'https://www.bridgelabz.com/';
  username: string = '';
  ngOnInit() {
    this.title = 'Hello from Bridgelabz';
  }

  onClick($event: any) {
    console.log('Save button is clicked!', $event);
    window.open(this.url, '_blank');
  }
}

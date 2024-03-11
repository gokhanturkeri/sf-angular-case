import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeModule]
})
export class AppComponent {
  title = 'Your Angular Shopping App';
}

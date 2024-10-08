import { Component } from '@angular/core';
import { DynamicHooksComponent } from 'ngx-dynamic-hooks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  content = 'Load a component here: <div class="myWidget"></div>';
}
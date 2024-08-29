import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutComponent, NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NzLayoutModule,
    NzButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CarpoolSystemWeb';
}

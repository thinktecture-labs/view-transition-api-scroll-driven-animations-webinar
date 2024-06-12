import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiAvatarModule, NavigationComponent, RouterLink],
})
export class HomeComponent {}

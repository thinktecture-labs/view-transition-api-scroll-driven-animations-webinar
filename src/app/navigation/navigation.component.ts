import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButtonModule, TuiIconModule } from '@taiga-ui/experimental';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TuiButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}

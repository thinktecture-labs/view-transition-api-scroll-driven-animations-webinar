import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Exercise } from '../../exercise.model';
import { TuiChipModule, TuiIconModule } from '@taiga-ui/experimental';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-exercise-item',
  standalone: true,
  imports: [TuiChipModule, TuiButtonModule, TuiIconModule],
  templateUrl: './exercise-item.component.html',
  styleUrl: './exercise-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseItemComponent {
  public exercise = input.required<Exercise>();
  public action = output();
  public actionIcon = input<string>('tuiIconPlus');
}

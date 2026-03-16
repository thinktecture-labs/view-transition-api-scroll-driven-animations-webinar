import { TuiChip } from "@taiga-ui/kit";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Exercise } from '../../exercise.model';
import { TuiIcon, TuiButton } from '@taiga-ui/core';

@Component({
    selector: 'app-exercise-item',
    imports: [TuiChip, TuiButton, TuiIcon],
    templateUrl: './exercise-item.component.html',
    styleUrl: './exercise-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseItemComponent {
  public exercise = input.required<Exercise>();
  public action = output();
  public actionIcon = input<string>('@tui.plus');
}

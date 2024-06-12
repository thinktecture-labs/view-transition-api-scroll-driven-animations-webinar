import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiChipModule, TuiIconModule } from '@taiga-ui/experimental';
import { ExerciseChooserStore } from '../exercise-chooser/signal-chooser.store';
import { MOCK_DATA } from '../exercise.model';

@Component({
  selector: 'app-exercise-detail',
  standalone: true,
  imports: [TuiButtonModule, TuiIconModule, TuiChipModule, RouterLink],
  templateUrl: './exercise-detail.component.html',
  styleUrl: './exercise-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExerciseDetailComponent {
  public name = input.required<string>({ alias: 'id' });
  public exercise = computed(() =>
    MOCK_DATA.find(({ name }) => name === this.name()),
  );
}

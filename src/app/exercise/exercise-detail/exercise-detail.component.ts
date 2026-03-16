import { TuiChip } from "@taiga-ui/kit";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiIcon, TuiButton } from '@taiga-ui/core';
import { ExerciseChooserStore } from '../exercise-chooser/signal-chooser.store';
import { MOCK_DATA } from '../exercise.model';

@Component({
    selector: 'app-exercise-detail',
    imports: [TuiButton, TuiIcon, TuiChip, RouterLink],
    templateUrl: './exercise-detail.component.html',
    styleUrl: './exercise-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ExerciseDetailComponent {
  public name = input.required<string>({ alias: 'id' });
  public exercise = computed(() =>
    MOCK_DATA.find(({ name }) => name === this.name()),
  );
}

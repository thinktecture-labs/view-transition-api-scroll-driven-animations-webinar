import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ExerciseChooserStore } from './signal-chooser.store';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';
import { RouterLink } from '@angular/router';
import { TuiSwipe, TuiSwipeModule } from '@taiga-ui/cdk';

@Component({
  selector: 'app-exercise-chooser',
  standalone: true,
  imports: [ExerciseItemComponent, RouterLink, TuiSwipeModule],
  templateUrl: './exercise-chooser.component.html',
  styleUrl: './exercise-chooser.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseChooserComponent implements OnInit {
  private store = inject(ExerciseChooserStore);

  protected currentView = signal<'lib' | 'workout'>('lib');
  protected workoutSelected = computed(() => this.currentView() === 'workout');

  public exercises = this.store.filteredExercises;
  public workout = this.store.workout;

  public ngOnInit(): void {
    this.store.init();
  }

  public swipe(swipe: TuiSwipe): void {
    if (swipe.direction === 'left') {
      this.currentView.set('workout');
    }
    if (swipe.direction === 'right') {
      this.currentView.set('lib');
    }
  }

  public addExercise(name: string): void {
    this.store.addExercise(name);
  }

  public removeExercise(name: string): void {
    this.store.removeExercise(name);
  }
}

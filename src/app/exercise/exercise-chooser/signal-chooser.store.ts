import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Exercise, MOCK_DATA } from '../exercise.model';
import { ExerciseService } from '../exercise.service';
import { computed, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface ExerciseChooserState {
  library: Exercise[];
  workout: Exercise[];
  searchTerm: string;
}

const initialState: ExerciseChooserState = {
  library: [],
  workout: [],
  searchTerm: '',
};

export const ExerciseChooserStore = signalStore(
  withState(initialState),
  withComputed(({ library, workout, searchTerm }) => {
    const exercises = computed(() =>
      library().filter((exercise) => workout().indexOf(exercise) === -1),
    );

    return {
      exercises,
      filteredExercises: computed(() => {
        if (searchTerm() !== '') {
          return exercises().filter(({ name }) => name.includes(searchTerm()));
        }
        return exercises();
      }),
    };
  }),
  withMethods((state, exerciseService = inject(ExerciseService)) => ({
    async init(): Promise<void> {
      const library = await firstValueFrom(exerciseService.exercises$);
      patchState(state, { library });
    },
    filter(searchTerm: string): void {
      patchState(state, { searchTerm });
    },
    addExercise(exerciseName: string): void {
      const [selectedExercise] = state
        .exercises()
        .filter(({ name }) => name === exerciseName);
      if (selectedExercise) {
        patchState(state, { workout: [...state.workout(), selectedExercise] });
      }
    },
    removeExercise(exerciseName: string): void {
      const workout = [...state.workout()];
      const index = workout.findIndex(({ name }) => name === exerciseName);

      if (index !== -1) {
        workout.splice(index, 1);
        console.log('New Workout', workout);
        patchState(state, { workout });
      }
    },
    getExercise(exerciseName: string): Exercise | undefined {
      return state.library().find(({ name }) => name === exerciseName);
    },
  })),
);

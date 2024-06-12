import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MOCK_DATA } from './exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private _exercises$ = new BehaviorSubject(MOCK_DATA);
  public exercises$ = this._exercises$.asObservable();
}

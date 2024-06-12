import { Directive, inject, input, computed } from '@angular/core';
import { ViewTransitionService } from './view-transition.service';

@Directive({
  selector: '[appViewTransition]',
  standalone: true,
  host: { '[style.view-transition-name]': 'viewTransitionName()' },
})
export class ViewTransitionDirective {
  private readonly viewTranistionService = inject(ViewTransitionService);

  readonly name = input<string>('', { alias: 'appViewTransition' });
  readonly id = input<string>();

  protected readonly viewTransitionName = computed(() => {
    const currentTransition = this.viewTranistionService.currentTransition();

    const apply =
      currentTransition?.to.firstChild?.firstChild?.params['id'] ===
        this.id() ||
      currentTransition?.from.firstChild?.firstChild?.params['id'] ===
        this.id();

    return apply ? this.name() : 'none';
  });
}

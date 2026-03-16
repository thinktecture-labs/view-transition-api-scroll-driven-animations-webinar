import { TuiRoot, TuiAlert, TuiDialog } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TuiRoot, TuiDialog, TuiAlert],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'view-transition-scroll-animation';
}

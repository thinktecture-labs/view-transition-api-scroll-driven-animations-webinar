import { TuiInitialsPipe, TuiAutoColorPipe } from "@taiga-ui/core";
import { TuiAvatar } from "@taiga-ui/kit";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TuiAvatar, NavigationComponent, RouterLink, TuiInitialsPipe, TuiAutoColorPipe]
})
export class HomeComponent {}

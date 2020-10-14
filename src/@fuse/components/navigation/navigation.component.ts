import { Component, HostBinding } from '@angular/core';
import { merge, Subject } from 'rxjs';


@Component({
    selector       : 'fuse-navigation',
    templateUrl    : './navigation.component.html',
    styleUrls      : ['./navigation.component.scss'],
})
export class FuseNavigationComponent
{
    @HostBinding('class')
    classes = 'nav-item';

   
}

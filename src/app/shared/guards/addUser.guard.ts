import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

import { UserModalComponent } from 'app/features/custumers/shared/Modals/user-modal/user-modal.component';


@Injectable({ providedIn: 'root' })
export class AddUserGuardService implements CanDeactivate <UserModalComponent>{
    canDeactivate(component: UserModalComponent):boolean {
        if(component.AddUserForm.dirty){

            return confirm('are you sure to discard your changes ?');
        }
      return true;

}
}
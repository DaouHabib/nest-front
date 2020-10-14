import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl) {
    if (control.value > new Date()) {
        return { 'validDate': true };
    }
    return null;
}
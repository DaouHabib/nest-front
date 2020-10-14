import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({ providedIn: "root" })
export class ToastService {
  
  constructor(private notifier: NotificationsService) { }

  success(title: any, content?: any, override?: any) {
    this.notifier.success(title, content, override)
  }

  error(title: string, content: string, override?: any) {
    this.notifier.error(title, content, override);
  }

  alert(title: string, content: string, override?: any) {
    this.notifier.alert(title, content, override);
  }

  info(title: string, content: string, override?: any) {
    this.notifier.info(title, content, override);
  }

  bare(title: string, content: string, override?: any) {
    this.notifier.bare(title, content, override);
  }
}
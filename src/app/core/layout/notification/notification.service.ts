import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastrService: ToastrService) {}

  info(message: string, title: string = null) {
    this.toastrService.info(message, title);
  }

  success(message: string, title: string = null) {
    this.toastrService.success(message, title);
  }

  warning(message: string, title: string = null) {
    this.toastrService.warning(message, title);
  }

  error(message: string, title: string = null) {
    this.toastrService.error(message, title);
  }

  problem(problem) {
    this.error(problem.detail ? problem.detail : problem.title);
  }
}

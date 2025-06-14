import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../../core/api/security.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss'],
  standalone: false,
})
export class LogoutPageComponent implements OnInit {
  constructor(private securityService: SecurityService) {}

  ngOnInit() {
    this.securityService.clearSession();
    window.location.reload();
  }
}

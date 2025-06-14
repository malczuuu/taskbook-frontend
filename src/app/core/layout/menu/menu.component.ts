import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.model';
import { NgFor, NgIf } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [NgFor, NgIf, RouterLinkActive, RouterLink],
})
export class MenuComponent {
  @Input()
  menu: MenuItem[] = [];
}

import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input()
  menu: MenuItem[] = [];
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Breadcrumb } from './breadcrumbs.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private content: Breadcrumb[] = [];
  private breadcrumbs: Subject<Breadcrumb[]> = new Subject<Breadcrumb[]>();

  constructor() {}

  getBreadcrumbs(): Observable<Breadcrumb[]> {
    return this.breadcrumbs.asObservable();
  }

  push(breadcrumb: Breadcrumb) {
    this.content.push(breadcrumb);
    this.breadcrumbs.next(this.content);
  }

  pop(): Breadcrumb {
    const breadcrumb = this.content.pop();
    this.breadcrumbs.next(this.content);
    return breadcrumb;
  }

  peek(): Breadcrumb[] {
    return this.content;
  }
}

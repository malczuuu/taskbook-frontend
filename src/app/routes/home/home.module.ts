import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, CoreModule, HomePageComponent],
})
export class HomeModule {}

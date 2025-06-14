import '@angular/localize/init';
import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { tokenGetter } from './app/app.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { CoreModule } from './app/core/core.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BoardsModule } from './app/routes/boards/boards.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      ToastrModule.forRoot(),
      BoardsModule,
      NgbModule,
      JwtModule.forRoot({
        config: { tokenGetter },
      }),
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));

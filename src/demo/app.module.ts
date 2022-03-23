;
import { AddItemComponent } from './add-item/add-item.component'import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http":
import { AuthHttpInterceptor, AuthModule } from "auth0/auth0-angular";

import { StoreDetoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { NarBarModule } from "./shared";
import { environment } from "src/enviroments/environment";
import { reducers, metaReducers } from "./core/state";
import { UserEffects } from "./core/state/user";
import { MenuEffects } from "./core/state/meus";

// import { AppRoutingModule } from './app-routing.module';

import { }

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [
          '${environment.serverUrl}/api/menu/items',
          '${environment.serverUrl}/api/menu/items/*',
        ],
      },
    }),
    AppRoutingModule,
    AppComponent,

    StoreDetoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  declarations: [AppComponent, AddItemComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      userClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
})
export class AppModule { }

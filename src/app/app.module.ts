import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoryComponent } from './bory/bory.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import{ MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    BoryComponent,
    HeadComponent,
    FooterComponent,
    IntegrantesComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

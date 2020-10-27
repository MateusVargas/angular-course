import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CursoModule } from './cursos/modulo.cursos';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Error404Component } from './error-404/error-404.component';

import { CoreModule } from './core/module.core';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],//DECLARAÇÃO DE COMPONENTES

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CursoModule,
    RouterModule.forRoot([
      { 
        path: '', redirectTo: 'cursos', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],//TODOS OS MÓDULOS DA APLICAÇÃO DEVEM SER IMPORTADOS AQUI 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

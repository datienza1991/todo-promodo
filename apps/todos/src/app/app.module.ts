import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosFeatureHomeModule } from '@todos/todos/feature-home';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule,TodosFeatureHomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

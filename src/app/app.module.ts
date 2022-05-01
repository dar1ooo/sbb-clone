import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SbbModule } from './sbbmodule.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Route, RouterModule, Routes } from '@angular/router';
import { DesignPatternComponent } from './design-pattern/design-pattern.component';
@NgModule({
  declarations: [AppComponent, DesignPatternComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    RouterModule.forRoot([]),
    SbbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

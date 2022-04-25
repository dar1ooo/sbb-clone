import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SbbModule } from './sbbmodule.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { SearchAutocompleteExample } from './searchautocomplete/searchautocomplete.component';

@NgModule({
  declarations: [AppComponent, SearchAutocompleteExample],
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

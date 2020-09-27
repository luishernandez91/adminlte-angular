import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule {
}

import {NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {AlertModule} from "ngx-bootstrap/alert";
import {TabsModule} from "ngx-bootstrap/tabs";

@NgModule({
  imports: [AlertModule.forRoot(), TabsModule.forRoot()],
  exports: [MatMenuModule, AlertModule, TabsModule]
})
export class MaterialModule {
}

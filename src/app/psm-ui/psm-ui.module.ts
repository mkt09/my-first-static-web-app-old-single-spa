import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PsmUiComponent } from './psm-ui.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PsmUiComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PsmUiModule { }

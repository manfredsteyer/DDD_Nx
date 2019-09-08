import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CityPipe],
  exports: [CityPipe]
})
export class SharedUiCommonModule {}

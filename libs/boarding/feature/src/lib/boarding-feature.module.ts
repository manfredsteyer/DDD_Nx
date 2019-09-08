import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@nx-flights/boarding/domain';
import { SharedUtilAuthModule } from '@nx-flights/shared/util-auth';
import { BookingApiModule } from '@nx-flights/booking/api';

@NgModule({
  imports: [
    CommonModule, 
    BoardingDomainModule, 
    SharedUtilAuthModule, 
    BookingApiModule
  ]
})
export class BoardingFeatureModule {}

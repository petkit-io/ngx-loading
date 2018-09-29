import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle/battle.component';
import { LoadingDirective } from './loading.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BattleComponent, LoadingDirective],
  exports: [BattleComponent, LoadingDirective]
})
export class LoadingModule { }

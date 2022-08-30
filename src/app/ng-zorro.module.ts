import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  exports: [NzButtonModule, NzInputModule, NzFormModule],
})
export class NgZorroModule {}

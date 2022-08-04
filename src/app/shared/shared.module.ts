import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';


@NgModule({
    declarations: [
        ErrorMsgDirective,
        CustomIfDirective,
        InternalServerErrorComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ErrorMsgDirective,
        CustomIfDirective,
        InternalServerErrorComponent
    ]
})
export class SharedModule { }

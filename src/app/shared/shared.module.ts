import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { InputPasswordDirective } from './directives/input-password.directive';


@NgModule({
    declarations: [
        ErrorMsgDirective,
        CustomIfDirective,
        InternalServerErrorComponent,
        InputPasswordDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ErrorMsgDirective,
        CustomIfDirective,
        InternalServerErrorComponent,
        InputPasswordDirective
    ]
})
export class SharedModule { }

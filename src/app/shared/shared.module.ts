import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { InputPasswordDirective } from './directives/input-password.directive';

import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
    declarations: [
        ErrorMsgDirective,
        CustomIfDirective,
        InputPasswordDirective,
        InternalServerErrorComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ErrorMsgDirective,
        CustomIfDirective,
        InputPasswordDirective,
        InternalServerErrorComponent
    ]
})
export class SharedModule { }

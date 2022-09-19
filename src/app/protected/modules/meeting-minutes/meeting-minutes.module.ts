import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingMinutesRoutingModule } from './meeting-minutes-routing.module';
import { ListMeetingMinutesComponent } from './pages/list-meeting-minutes/list.component';
import { FormMeetingMinutesComponent } from './pages/form-meeting-minutes/form.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
    declarations: [
        ListMeetingMinutesComponent,
        FormMeetingMinutesComponent,
        MainComponent
    ],
    imports: [
        CommonModule,
        MeetingMinutesRoutingModule
    ]
})
export class MeetingMinutesModule { }

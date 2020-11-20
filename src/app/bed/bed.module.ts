import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BedComponent } from './bed.component';
import { BrowserModule } from '@angular/platform-browser';
import { BedService } from './bed.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MonitoringVitalModule } from '../vitals/monitor.vitals.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DemoMaterialModule } from '../vitals/material.module';


@NgModule({
    declarations: [BedComponent],
    imports: [FormsModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        MonitoringVitalModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        CheckboxModule

    ],
    exports: [BedComponent],
    providers: [BedService]
})
export class BedModule {


}

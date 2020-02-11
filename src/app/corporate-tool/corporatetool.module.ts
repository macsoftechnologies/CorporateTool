import { NgModule } from "@angular/core";
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { corporateToolRoutes } from "./corporatetool.routing";
import { RouterModule } from "@angular/router";
import { MasterComponent } from './master/master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { FormsModule } from '@angular/forms';
// import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule  } from '@angular/common';



@NgModule({ imports: [
    RouterModule.forChild(corporateToolRoutes),
    NgbModule,
    FormsModule,
    // BrowserModule,
    CommonModule
],
declarations: [ManageCompanyComponent, MasterComponent, ManageEmployeesComponent]
})

export class CorporateToolModule {

}

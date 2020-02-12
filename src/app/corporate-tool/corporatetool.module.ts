import { NgModule } from "@angular/core";
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { corporateToolRoutes } from "./corporatetool.routing";
import { RouterModule } from "@angular/router";
import { MasterComponent } from './master/master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common';
import { PermissionsComponent } from './permissions/permissions.component';
import { AdminpermissionsComponent } from './adminpermissions/adminpermissions.component';
import { TravelpolicyAComponent } from './travelpolicy-a/travelpolicy-a.component';




@NgModule({ imports: [
    RouterModule.forChild(corporateToolRoutes),
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
],
declarations: [ManageCompanyComponent, MasterComponent, ManageEmployeesComponent, PermissionsComponent, AdminpermissionsComponent, TravelpolicyAComponent]
})

export class CorporateToolModule {

}

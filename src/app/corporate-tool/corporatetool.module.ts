import { NgModule } from "@angular/core";
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { corporateToolRoutes } from "./corporatetool.routing";
import { RouterModule } from "@angular/router";
import { MasterComponent } from './master/master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

@NgModule({ imports: [
    RouterModule.forChild(corporateToolRoutes),
    NgbModule
],
declarations: [ManageCompanyComponent, MasterComponent, ManageEmployeesComponent]
})

export class CorporateToolModule {

}

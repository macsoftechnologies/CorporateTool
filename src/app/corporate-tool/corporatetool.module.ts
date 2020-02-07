import { NgModule } from "@angular/core";
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { corporateToolRoutes } from "./corporatetool.routing";
import { RouterModule } from "@angular/router";
import { MasterComponent } from './master/master.component';

@NgModule({ imports: [
    RouterModule.forChild(corporateToolRoutes)
],
declarations: [ManageCompanyComponent, MasterComponent]
})

export class CorporateToolModule {

}

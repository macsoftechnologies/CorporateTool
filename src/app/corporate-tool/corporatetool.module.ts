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
import { ManagePersonalDetailsComponent } from './manage-personal-details/manage-personal-details.component';
import { ManagePreferencesComponent } from './manage-preferences/manage-preferences.component';
import { ManageEmploymentComponent } from './manage-employment/manage-employment.component';
import { ManagePassportDetailsComponent } from './manage-passport-details/manage-passport-details.component';
import { ManageLoyaltyMembershipsComponent } from './manage-loyalty-memberships/manage-loyalty-memberships.component';
import { TravelPolicyComponent } from './travel-policy/travel-policy.component';
import { ManageCompanySubComponent } from './manage-company-sub/manage-company-sub.component';
import { ManageBranchComponent } from './manage-branch/manage-branch.component';
import { MasterManageDepartmentComponent } from './master-manage-department/master-manage-department.component';
import { MasterManageGradesComponent } from './master-manage-grades/master-manage-grades.component';
import { MasterManageDesignationsComponent } from './master-manage-designations/master-manage-designations.component';
import { MasterManageTeamsComponent } from './master-manage-teams/master-manage-teams.component';
import { MasterManageBandsComponent } from './master-manage-bands/master-manage-bands.component';
import { CompanyPreferencesComponent } from './company-preferences/company-preferences.component';
import { ToastrModule} from 'ngx-toastr';
import { AllTripsComponent } from './dashboard/all-trips/all-trips.component';
import { PendingApprovalsComponent } from './dashboard/pending-approvals/pending-approvals.component';
import { ApprovedComponent } from './dashboard/approved/approved.component';
import { DeclinedComponent } from './dashboard/declined/declined.component';
import { CancelledComponent } from './dashboard/cancelled/cancelled.component';
import { RejectedComponent } from './dashboard/rejected/rejected.component';
import { SkippedComponent } from './dashboard/skipped/skipped.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({ imports: [
    RouterModule.forChild(corporateToolRoutes),
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule,
    ToastrModule.forRoot()
    // BrowserAnimationsModule
],
declarations: [ManageCompanyComponent, MasterComponent, ManageEmployeesComponent, PermissionsComponent, AdminpermissionsComponent, TravelpolicyAComponent, ManagePersonalDetailsComponent, ManagePreferencesComponent, ManageEmploymentComponent, ManagePassportDetailsComponent, ManageLoyaltyMembershipsComponent, TravelPolicyComponent, ManageCompanySubComponent, ManageBranchComponent, MasterManageDepartmentComponent, MasterManageGradesComponent, MasterManageDesignationsComponent, MasterManageTeamsComponent, MasterManageBandsComponent, CompanyPreferencesComponent, AllTripsComponent, PendingApprovalsComponent, ApprovedComponent, DeclinedComponent, CancelledComponent, RejectedComponent, SkippedComponent]
})

export class CorporateToolModule {

}

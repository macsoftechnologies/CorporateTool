import { Routes } from '@angular/router';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { MasterComponent } from './master/master.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AdminpermissionsComponent } from './adminpermissions/adminpermissions.component';
import { TravelpolicyAComponent } from './travelpolicy-a/travelpolicy-a.component';
import { PermissionsComponent } from './permissions/permissions.component';
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

export const corporateToolRoutes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'manageCompany',
            component: ManageCompanyComponent,
            data: {
              title: 'Manage Company',
            }
          },
          {
            path: 'manageCompanysub',
            component: ManageCompanySubComponent,
            data: {
              title: 'Manage Company',
            }
          },
          {
            path: 'managebranch',
            component: ManageBranchComponent,
            data: {
              title: 'Manage Branch',
            }
          },
          {
            path: 'master',
            component: MasterComponent,
            data: {
              title: 'Master',
             /*  urls: [
                { title: 'manageCompaany', url: '/dashboard' },
                { title: 'Modern Dashboard' }
              ] */
            }
          },
          {
            path: 'managedepartment',
            component: MasterManageDepartmentComponent,
            data: {
              title: 'Manage Department',
            }
          },
          {
            path: 'managegrades',
            component: MasterManageGradesComponent,
            data: {
              title: 'Manage Grades',
            }
          },
          {
            path: 'managedesignations',
            component: MasterManageDesignationsComponent,
            data: {
              title: 'Manage Designations',
            }
          },
          {
            path: 'manageteams',
            component: MasterManageTeamsComponent,
            data: {
              title: 'Manage Teams',
            }
          },
          {
            path: 'managebands',
            component: MasterManageBandsComponent,
            data: {
              title: 'Manage Bands',
            }
          },
          {
            path: 'manageEmployees',
            component: ManageEmployeesComponent,
            data: {
              title: 'Manage Employees',
            }
          },
          {
            path: 'managepersonaldetails',
            component: ManagePersonalDetailsComponent,
            data: {
              title: 'Personal Details',
            }
          },
          {
            path: 'managepreferences',
            component: ManagePreferencesComponent,
            data: {
              title: 'Preferences',
            }
          },
          {
            path: 'manageemployment',
            component: ManageEmploymentComponent,
            data: {
              title: 'Employment',
            }
          },
          {
            path: 'managepassportdetails',
            component: ManagePassportDetailsComponent,
            data: {
              title: 'Passport Details',
            }
          },
          {
            path: 'manageloyaltymemberships',
            component: ManageLoyaltyMembershipsComponent,
            data: {
              title: 'Loyalty Memberships',
            }
          },
          {
            path: 'permissions',
            component: PermissionsComponent,
            data: {
              title: 'Permissions',
            }
          },
          {
            path: 'adminpermissions',
            component: AdminpermissionsComponent,
            data: {
              title: 'Admin',
            }
          },
          {
            path: 'travelpolicy',
            component: TravelPolicyComponent,
            data: {
              title: 'Travel Policy',
            }
          },
          {
            path: 'travelpolicya',
            component: TravelpolicyAComponent,
            data: {
              title: 'Policy A',
            }
          },
          {
            path: 'companypreferences',
            component: CompanyPreferencesComponent,
            data: {
              title: 'Company Preferences',
            }
          }
        ]
        }
];
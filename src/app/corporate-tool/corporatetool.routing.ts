import { Routes } from '@angular/router';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { MasterComponent } from './master/master.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AdminpermissionsComponent } from './adminpermissions/adminpermissions.component';
import { TravelpolicyAComponent } from './travelpolicy-a/travelpolicy-a.component';

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
            path: 'manageEmployees',
            component: ManageEmployeesComponent,
            data: {
              title: 'Manage Employees',
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
            path: 'travelpolicy-a',
            component: TravelpolicyAComponent,
            data: {
              title: 'Policy A',
            }
          }
        ]
        }
];
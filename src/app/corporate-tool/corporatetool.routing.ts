import { Routes } from '@angular/router';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { MasterComponent } from './master/master.component';

export const corporateToolRoutes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'manageCompany',
            component: ManageCompanyComponent,
            data: {
              title: 'Manage Company',
             /*  urls: [
                { title: 'manageCompaany', url: '/dashboard' },
                { title: 'Modern Dashboard' }
              ] */
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
        ]
        }
];
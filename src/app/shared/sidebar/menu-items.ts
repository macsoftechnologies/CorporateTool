import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 /*  {
    path: '',
    title: 'Personal',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  }, */
  
  {
    path: '',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: 'has-arrow',
    label: '',
    labelClass: 'label label-rouded label-themecolor',
    extralink: false,
    submenu: [
      {
        path: '/corporateTool/allTrips',
        title: 'All Trips',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/corporateTool/pendingApprovals',
        title: 'Pending Approvals',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/corporateTool/approved',
        title: 'Approved',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/corporateTool/declined',
        title: 'Declined',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/corporateTool/cancelled',
        title: 'Cancelled',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/corporateTool/rejected',
        title: 'Rejected',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/corporateTool/skipped',
        title: 'Skipped',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }

    ]
  },
  {
    path: '',
    title: 'Book A Trip',
    icon: 'mdi mdi-airplane-takeoff',
    class: 'has-arrow',
    label: '',
    labelClass: 'label label-rouded label-themecolor',
    extralink: false,
    submenu: [
      
    ]
  },
  {
    path: '',
    title: 'transactions',
    icon: 'mdi mdi-transfer',
    class: 'has-arrow',
    label: '',
    labelClass: 'label label-rouded label-themecolor',
    extralink: false,
    submenu: [
      
    ]
  },
  {
    path: '',
    title: 'Settings',
    icon: 'mdi mdi-settings',
    class: 'has-arrow',
    label: '',
    labelClass: 'label label-rouded label-themecolor',
    extralink: false,
    submenu: [
      {
        path: '/corporateTool/manageCompany',
        title: 'Manage Company',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/corporateTool/manageCompanysub',
            title: 'Manage Company',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/managebranch',
            title: 'Manage Branch',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
        ]
      },
      {
        path: '/corporateTool/master',
        title: 'Master',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/corporateTool/managedepartment',
            title: 'Manage Department',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/manageteams',
            title: 'Manage Teams',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/managegrades',
            title: 'Manage Grades',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/managebands',
            title: 'Manage Bands',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/managedesignations',
            title: 'Manage Designations',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          
          
        ]
      },
      {
        path: '/corporateTool/manageEmployees',
        title: 'Manage Employees',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/corporateTool/managepersonaldetails',
            title: 'Personal Details',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/managepreferences',
            title: 'Preferences',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },


          {
            path: '/corporateTool/manageemployment',
            title: 'Employment',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/managepassportdetails',
            title: 'Passport Details',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: '/corporateTool/manageloyaltymemberships',
            title: 'Loyalty Memberships',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
        ]
      },
      {
        path: '/corporateTool/permissions',
        title: 'Permissions',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/corporateTool/adminpermissions',
            title: 'Admin',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          }
        ]
      },
      {
        path: '/corporateTool/travelpolicy',
        title: 'Travel Policy',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: '/corporateTool/travelpolicya',
            title: 'Policy A',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          }
        ]
      },
      {
        path: '/corporateTool/companypreferences',
        title: 'Company preferences',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
      
    ]
  },

  /* {
    path: '',
    title: 'Dashboards',
    icon: 'mdi mdi-gauge',
    class: 'has-arrow',
    label: '4',
    labelClass: 'label label-rouded label-themecolor',
    extralink: false,
    submenu: [
      {
        path: '/dashboard/dashboard1',
        title: 'Modern',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard2',
        title: 'Classic',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard3',
        title: 'Analytical',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Apps',
    icon: 'mdi mdi-apps',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/apps/email',
        title: 'Mailbox',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/apps/fullcalendar',
        title: 'Calendar',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/apps/taskboard',
        title: 'Taskboard',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'UI Components',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Component',
    icon: 'mdi mdi-bullseye',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/alert',
        title: 'Alert',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/carousel',
        title: 'Carousel',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/modal',
        title: 'Modal',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/pagination',
        title: 'Pagination',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/poptool',
        title: 'Popover & Tooltip',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/progressbar',
        title: 'Progressbar',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/rating',
        title: 'Ratings',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/tabs',
        title: 'Tabs',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/timepicker',
        title: 'Timepicker',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/buttons',
        title: 'Button',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/cards',
        title: 'Card',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Extra Components',
    icon: 'mdi mdi-dropbox',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/extra-component/toastr',
        title: 'Toastr',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/extra-component/upload',
        title: 'File Upload',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/extra-component/editor',
        title: 'Editor',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/extra-component/dragndrop',
        title: 'Drag n Drop',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Forms & Tables',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Forms',
    icon: 'mdi mdi-file',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/forms/basicform',
        title: 'Basic Forms',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formvalidation',
        title: 'Form Validation',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/typehead',
        title: 'Form Typehead',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/datepicker',
        title: 'Datepicker',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/language-datepicker',
        title: 'Language Datepicker',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Tables',
    icon: 'mdi mdi-table',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/tables/basictable',
        title: 'Basic Tables',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/tables/smarttable',
        title: 'Smart Tables',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/tables/datatable',
        title: 'Data Tables',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/widgets',
    title: 'Widgets',
    icon: 'mdi mdi-widgets',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Charts & Icons',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Charts',
    icon: 'mdi mdi-chart-arc',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/charts/chartjs',
        title: 'Chart Js',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/charts/chartistjs',
        title: 'Chartist Js',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Icons',
    icon: 'mdi mdi-brush',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/icons/fontawesome',
        title: 'Fontawesome',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/icons/simpleline',
        title: 'Simple Line Icons',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/icons/material',
        title: 'Material Icons',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Pages',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Authentication',
    icon: 'mdi mdi-lock',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/authentication/login',
        title: 'Login',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/login2',
        title: 'Login 2',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/signup',
        title: 'Register',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/signup2',
        title: 'Register 2',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/404',
        title: '404',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/lock',
        title: 'Lockscreen',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Sample Pages',
    icon: 'mdi mdi-file',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/sample-pages/timeline',
        title: 'Timeline',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/profile',
        title: 'Profile',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/pricing',
        title: 'Pricing',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/invoice',
        title: 'Invoice',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/helperclasses',
        title: 'Helper Classes',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/starter',
        title: 'Starter Page',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Menu Levels',
    icon: 'mdi mdi-arrange-send-backward',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: 'javascript:void(0);',
        title: 'Second Level',
        icon: '',
        class: '',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
      },
      {
        path: '',
        title: 'Second Child',
        icon: '',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
          {
            path: 'javascript:void(0);',
            title: 'Third 1.1',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          },
          {
            path: 'javascript:void(0);',
            title: 'Third 1.2',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            submenu: []
          }
        ]
      }
    ]
  } */
];

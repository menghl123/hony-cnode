import {Routes} from '@angular/router';
import {IndexComponent} from './normal/index/index.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'index', component: IndexComponent},
  // {path: 'system', loadChildren: 'app/system/system.module#SystemModule', canActivate: [AuthLoginPermission]},
  {path: '*', pathMatch: 'full', redirectTo: '/login'},
];

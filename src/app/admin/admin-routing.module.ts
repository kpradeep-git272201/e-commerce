import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { RolePermissionsComponent } from './role-permissions/role-permissions.component';
import { SystemLogsComponent } from './system-logs/system-logs.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'role-permissions', component: RolePermissionsComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'system-logs', component: SystemLogsComponent },
  { path: 'user-management', component: UserManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

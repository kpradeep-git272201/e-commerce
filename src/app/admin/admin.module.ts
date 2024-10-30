import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RolePermissionsComponent } from './role-permissions/role-permissions.component';
import { SystemLogsComponent } from './system-logs/system-logs.component';

debugger

@NgModule({
  declarations: [
    SettingComponent,
    ProfileComponent,
    UserManagementComponent,
    RolePermissionsComponent,
    SystemLogsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    SettingComponent,
    ProfileComponent
  ]
})
export class AdminModule { }

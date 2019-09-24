import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingComponent} from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ApiTockensComponent} from './api-tockens/api-tockens.component';


const routes: Routes = [
  {
    path: '', component: SettingComponent, children: [
      {
        path: 'api-keys',
        component: ApiTockensComponent
      },
      {
        path: 'my-profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

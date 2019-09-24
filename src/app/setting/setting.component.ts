import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  public settingsMenu = [
    {
      title: 'API Keys',
      route: 'api-keys'
    },
    {
      title: 'My Profile',
      route: 'my-profile'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

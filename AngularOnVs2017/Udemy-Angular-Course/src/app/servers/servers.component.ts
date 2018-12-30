import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = "No server was created";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']
  displayToggle = false;
  displayClicks = [];

  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreation = "Server was created! Name is: " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDisplayToggle() {
    return this.displayToggle;
  }

  onClickDisplayDetails() {
    this.displayClicks.push('New click number: ' + this.displayClicks.length);
    this.displayToggle = !this.displayToggle;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatsus: string = 'offline';

  getServerStatus() {
    return this.serverStatsus;
  }

}
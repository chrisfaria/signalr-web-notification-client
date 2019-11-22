import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    // Create a connection to the SignalR server
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl("http://localhost:51000/notifyhub")
      .build();

    // Setup a function for the SignalR server to be able to call
    connection.on("BroadcastMessage", (type: string, payload: string) => {
      this.messageService.add({ severity: type, summary: 'SignalR Message', detail: payload });
    });

    // Start the connection to the SignalR server
    connection.start().then(function () {
      console.log('Connected to SignalR hub!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
  }

  handleClick() {
    console.log('clicked');
    this.messageService.add({ severity: 'success', summary: 'From button', detail: 'Hello from your friendly neighborhood Spiderman' });
  }
}

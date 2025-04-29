import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './WarningAlert/warning-alert.component';
import { SuccessComponent } from './SuccessAlert/success-alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //This wasn't imported here, I had to write it here. Make sure all imports are here.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

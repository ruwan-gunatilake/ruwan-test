import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BusDataService} from './services/bus-data.service';
import {AccordionModule, Ng2BootstrapModule} from 'ng2-bootstrap';
import {TnAccordionComponent} from './shared-components/tn-accordion/tn-accordion.component';
import {BusStatusPipe} from './pipes/bus-status.pipe';
import {BusStatusColorPipe} from './pipes/bus-status-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TnAccordionComponent,
    BusStatusPipe,
    BusStatusColorPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
  ],
  exports: [
    Ng2BootstrapModule,
    TnAccordionComponent,
  ],
  providers: [BusDataService, BusStatusPipe, BusStatusColorPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

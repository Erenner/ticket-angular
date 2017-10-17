import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TicketsComponent } from './component/tickets.component';
import { EditTicketComponent } from './component/edit-ticket.component';
import { CreateTicketComponent } from './component/create-ticket.component';

import { TicketService } from './service/ticket.service';
import { TicketDescriptionPipe } from './component/ticket-description.filter';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    EditTicketComponent,
    CreateTicketComponent,
    TicketDescriptionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

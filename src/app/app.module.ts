import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RequisitionTableComponent } from './requisition-dialog-box/requisition-table/requisition-table.component';
import { RequisitionTableRowComponent } from './requisition-dialog-box/requisition-table/requisition-table-row/requisition-table-row.component';
import { RequistionApiService } from './requistion-api.service';

import {Ng2PaginationModule} from "ng2-pagination";
import {FilterPipe} from "./search-pipe";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './requisition-dialog-box/header/header.component';
import { RequisitionDialogBoxComponent } from './requisition-dialog-box/requisition-dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisitionTableComponent,
    RequisitionTableRowComponent,
    FilterPipe,
    HeaderComponent,
    RequisitionDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2PaginationModule,
    FormsModule
  ],
  providers: [RequistionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

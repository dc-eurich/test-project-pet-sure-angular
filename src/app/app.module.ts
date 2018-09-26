import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClaimsComponent } from './claims/claims.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SelectDropdownComponent } from './shared/select-dropdown/select-dropdown.component';
import { FileUploadMultipleComponent } from './shared/file-upload-multiple/file-upload-multiple.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { HttpClientModule } from '@angular/common/http';

import { PetManagementService } from './services/pet-management.service';

@NgModule({
  declarations: [
    AppComponent,
    ClaimsComponent,
    SelectDropdownComponent,
    FileUploadMultipleComponent
  ],
  imports: [
    BrowserModule,
    SelectDropDownModule,
    NgxUploaderModule,
    HttpClientModule
  ],
  providers: [PetManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }

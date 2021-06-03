import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { PageunavailableComponent } from './pageunavailable/pageunavailable.component';
import { SearchcompComponent } from './searchcomp/searchcomp.component';
import { OptparametercompComponent } from './optparametercomp/optparametercomp.component';
import { ShopkeeperComponent } from './shopkeeper/shopkeeper.component';
import { Customer1Component } from './customer1/customer1.component';
import { Customer2Component } from './customer2/customer2.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SpecificproductComponent } from './specificproduct/specificproduct.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FrmBuildercompComponent } from './frm-buildercomp/frm-buildercomp.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import {CompmusicComponent} from './compmusic/compmusic.component';
import {ServicecallwebapiService} from './servicecallwebapi.service';
import {MusicserviceService} from './musicservice.service';
import {HttpClientModule} from '@angular/common/http'
imports :[BrowserModule, HttpClientModule]

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    CreateComponent,
    DisplayallComponent,
    PageunavailableComponent,
    SearchcompComponent,
    OptparametercompComponent,
    ShopkeeperComponent,
    Customer1Component,
    Customer2Component,
    AllproductsComponent,
    SpecificproductComponent,
    TemplateformComponent,
    FrmBuildercompComponent,
    ReactiveformsComponent,
    CompmusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicecallwebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

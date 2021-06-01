import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1basicComponent } from './comp1basic/comp1basic.component';
import { Comp2basicComponent } from './comp2basic/comp2basic.component';
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


const routes: Routes = [{path: 'basic1', component:Comp1basicComponent}, {path:'basic2', component:Comp2basicComponent},
{path:"Create", component: CreateComponent}, 
{path:"displayall", component: DisplayallComponent},
{path:"search", component:SearchcompComponent},
{path:"optparameter", component:OptparametercompComponent},
{path:'shopkeeper', component:ShopkeeperComponent,
  children:[{path:'customer1', component: Customer1Component}, 
    {path:'customer2',component: Customer2Component}]},
    {path:"allproducts", component:AllproductsComponent},
    {path:"myproduct/:id", component:SpecificproductComponent},

{path:"**", component: PageunavailableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents =[Comp1basicComponent, Comp2basicComponent,CreateComponent,DisplayallComponent,SearchcompComponent,OptparametercompComponent,AllproductsComponent,SpecificproductComponent]

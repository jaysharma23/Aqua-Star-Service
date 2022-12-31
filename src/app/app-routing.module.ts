import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [ { path: 'contactus', component: ContactUsComponent },
{ path: 'aboutUs', component: AboutUsComponent },
{ path: '', component: HomeComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'blogs', component: ProductsComponent },
{ path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

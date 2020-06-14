import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CustomerComponent } from './customer';
import { CustomerRegisterComponent } from './customerregister';
import { CustomerInfoComponent } from './customerinfo';
import { OrdersModule } from './orders/orders.module';
import { AboutComponent } from './about';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] }, 
    { path: 'customerregister/:id', component: CustomerRegisterComponent },
    { path: 'customerinfo/:id/:mode', component: CustomerInfoComponent },
    { path: 'orders', loadChildren: () => OrdersModule, canActivate: [AuthGuard] }, 
    { path: 'about', component: AboutComponent }
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule { }
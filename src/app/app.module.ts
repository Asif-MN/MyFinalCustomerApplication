import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CustomerComponent } from './customer';
import { CustomerCardViewComponent } from './customercardview';
import { CustomerListViewComponent } from './customerlistview';
import { CustomerRegisterComponent } from './customerregister';
import { CustomerInfoComponent } from './customerinfo';
import { AboutComponent } from './about';
import { AlertComponent } from './_components';
import { CustomerRolePipe } from './customercardview/customerrole.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        appRoutingModule,
        Ng2SearchPipeModule,
        NgxPaginationModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CustomerComponent,
        CustomerCardViewComponent,
        CustomerListViewComponent,
        CustomerRegisterComponent,
        CustomerInfoComponent,
        AboutComponent,
        AlertComponent,
        CustomerRolePipe
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
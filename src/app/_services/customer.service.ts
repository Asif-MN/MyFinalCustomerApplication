import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '@/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    API_URL: string = "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    getAllCustomers(userid): Observable<Customer[]>  {
        return this.http.get<Customer[]>(this.API_URL + "customer/?userid=" + userid);
    }

    getCustomer(customerid): Observable<Customer>  {
        return this.http.get<Customer>(this.API_URL + "customer/?id=" + customerid);
    }

    addCustomer(body: string): Observable<Customer[]>  {
        let headers = new HttpHeaders({"Content-Type":"application/json"});
        let options = {headers:headers};

        return this.http.post<Customer[]>(this.API_URL + "customer", body, options);  
    }

    updateCustomer(body: string, customerid: any): Observable<Customer[]>  {
        //let body = JSON.stringify(customer);
        let headers = new HttpHeaders({"Content-Type":"application/json"});
        let options = {headers:headers};

        return this.http.put<Customer[]>(this.API_URL + "customer/" + customerid, body,options);    
    }
}



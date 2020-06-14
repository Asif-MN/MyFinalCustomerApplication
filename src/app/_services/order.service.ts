import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Order } from '@/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
    API_URL: string = "http://localhost:3000/";
    orderresults: Order[];

    constructor(private http: HttpClient) { }

    getOrders(custid)  {
        let orderdetail = new Promise((resolve, reject) => {
            let apiURL = this.API_URL + "order/?custid=" + custid;
            this.http.get(apiURL)
              .toPromise()
              .then((res:any) => { 
                    // Success
                    this.orderresults = res.map((res: Order) => {
                        return new Order(
                          /*res.userid,
                          res.id,
                          res.title,
                          res.body*/
                        );
                     });
                    
                    //this.orderresults = res.valueOf    
                    //this.results = res.json().results;
                    //this.orderresults = result.results.map
                    
                    resolve();
                },
                msg => { // Error
                    reject(msg);
                }
              );
          });

        return orderdetail;
    }

    getAllOrders(): Observable<Order[]>  {
        return this.http.get<Order[]>(this.API_URL + "order");
    }
}



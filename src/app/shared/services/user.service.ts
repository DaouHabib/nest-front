import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class UserService {

    private connectedUser: any; // TODO Model

    constructor(private http: HttpClient) { }

    getConnectedUser(): string {
        return this.connectedUser;
    }

    setConnectedUser(connectedUser: any): void {
        this.connectedUser = connectedUser;
    }
    Adduser(user: any): Observable<any> {
        return this.http.post<any>( `${APIS.AUTH}/signup`,user);
    }
    sendEmail(email:any):any {
        return this.http.post<any>("http://localhost:3000/users/sendEmail",email);
    }
    
    getAll(): Observable<any> {
        return this.http.get<any[]>(`${APIS.USERS}`);
    }

    edit(user: any, id: any): Observable<any> {
        return this.http.put<any>(`${APIS.USERS}/${id}`, user);
    }

    getuserByid(id: string): Observable<any> {
        return this.http.get<any[]>(`${APIS.USERS}/${id}`);
    }

    

    delete(id: any): Observable<any> {
        return this.http.delete(`${APIS.USERS}/${id}`);
    }


}


import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class SondageService {

    private connectedUser: any; // TODO Model

    constructor(private http: HttpClient) { }

   

    AddSondage(sondage: any): Observable<any> {

        return this.http.post<any>(
            `${APIS.SONDAGE}`,
            sondage
        );
    }
   
    
    getAll(): Observable<any> {
        return this.http.get<any[]>(`${APIS.SONDAGE}`);
    }

    edit(user: any, id: any): Observable<any> {
        return this.http.put<any>(`${APIS.SONDAGE}/${id}`, user);
    }

    getsondageByid(id: string): Observable<any> {
        return this.http.get<any[]>(`${APIS.SONDAGE}/${id}`);
    }
    getTotalvotesByid(id: string): Observable<any> {
        return this.http.get<any[]>(`${APIS.SONDAGE}/total/${id}`);
    }

    updateQuestion(id:string, question: string): Observable<any> {
        return this.http.put<any>(`${APIS.SONDAGE}/${id}`, question);
    }

    updateVote(id:string, oui: number,non:number,iduser:string): Observable<any> {
        return this.http.put<any>(`${APIS.SONDAGE}/vote/${id}`, {"oui":oui,"non":non,"userid":iduser});
    }
    resetVote(id:string): Observable<any> {
        return this.http.put<any>(`${APIS.SONDAGE}/vote/${id}`,null);
    }
    delete(id: any): Observable<any> {
        return this.http.delete(`${APIS.SONDAGE}/${id}`);
    }

    getlastVotes(id: string): Observable<any> {
        return this.http.get<any[]>(`${APIS.SONDAGE}/last/${id}`);
    }
}


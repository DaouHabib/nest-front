import { environment } from '../environments/environment';

export const APIS: { [ prop: string ]: string } = {
    AUTH: `${environment.BaseURL}/auth`,
    USERS: `${environment.BaseURL}/users`,
    SONDAGE: `${environment.BaseURL}/sondage`,
    

    
};


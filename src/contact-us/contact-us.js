import { HttpClient, json } from 'aurelia-fetch-client';

export class ContactUs {

    freeText;
    phone;
    mailAddress;
    familyName;
    privetName;

    httpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }
    
    sendCustomerInformation() {
        let emailData = {
            privetName: `${this.privetName}`,
            familyName: `${this.familyName}`,
            phone: `${this.phone}`,
            mailAddress: `${this.mailAddress}`,
            freeText: `${this.freeText}`
        }

        this.httpClient.fetch('/api/top',
             {
                 method: "POST",
                 body: json(emailData)
             })
            .then(response => response.json())
            .then(response => console.log("json(emailData)", response));
    }
}
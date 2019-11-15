import { Injectable } from "@angular/core";
// import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class ChatService {


    users = [
        {
            username: '',
        }
    ]

    rooms = [
        {
            imageName: 'cinema',
            name: 'Cinema'
        },
        {
            imageName: 'sports',
            name: 'Esportes'
        },
        {
            imageName: 'diversos',
            name: 'Diversos'
        }
    ]
}
import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
        var config = {
            apiKey: 'AIzaSyAk5RC4y8piEo5qr1VcGgtcuPcOJEc5aqU',
            authDomain: 'bookshelves-d2e33.firebaseapp.com',
            databaseURL: 'https://bookshelves-d2e33.firebaseio.com',
            projectId: 'bookshelves-d2e33',
            storageBucket: 'bookshelves-d2e33.appspot.com',
            messagingSenderId: '474285511217'
        };
        firebase.initializeApp(config);
    }
}

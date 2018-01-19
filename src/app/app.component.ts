import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD4p-XuYFzb4zAZ4I9paqWre84JdxWHhpg",
      authDomain: "appcompras-9ee1e.firebaseapp.com",
      databaseURL: "https://appcompras-9ee1e.firebaseio.com",
      projectId: "appcompras-9ee1e",
      storageBucket: "appcompras-9ee1e.appspot.com",
      messagingSenderId: "238784296824"
    });
  }

}

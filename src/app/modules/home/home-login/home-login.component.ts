import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss']
})
export class HomeLoginComponent implements OnInit {

  constructor( public auth: AngularFireAuth ) {}

  ngOnInit(): void {
  }
  login() {
    this.auth.signInWithEmailAndPassword('carmanu09@gmail.com','12345678');
  }

}

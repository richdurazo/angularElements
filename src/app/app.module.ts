import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FrameworkPollComponent } from './framework-poll/framework-poll.component';

const config = {
  apiKey: environment.API_KEY,
  authDomain: 'framework-voter-436d7.firebaseapp.com',
  databaseURL: 'https://framework-voter-436d7.firebaseio.com',
  projectId: 'framework-voter-436d7',
  storageBucket: 'framework-voter-436d7.appspot.com',
  messagingSenderId: environment.SENDER_ID
};

@NgModule({
  declarations: [
    AppComponent,
    FrameworkPollComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  entryComponents: [
    FrameworkPollComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FrameworkPollComponent, {injector: this.injector});
    customElements.define('framework-poll', el);

  }
}

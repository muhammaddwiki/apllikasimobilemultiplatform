import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from '../providers/database/database';

@Component({

    templateUrl: 'app.html'
    })

    export class MyApp {
        rootPage:any = LoginPage;
        constructor(private platform: Platform, 
            private statusBar: StatusBar, 
            private splashScreen:SplashScreen,
            private databaseProvider: DatabaseProvider) {
                this.databaseProvider.createDatabase();
            platform.ready().then(() => {
// Okay, so the platform is ready and our plugins areavailable.
// Here you can do any higher level native things you mightneed.
        statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
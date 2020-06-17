import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { EnvProvider } from '../providers/env/env';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ProductProvider } from '../providers/product/product';
import { MyproductPage } from '../pages/myproduct/myproduct';
import { FormproductPage } from '../pages/formproduct/formproduct';
import { CovidinfoProvider } from '../providers/covidinfo/covidinfo';
import { CovidinfoPage } from '../pages/covidinfo/covidinfo';
import { MyprofilePage } from '../pages/myprofile/myprofile';
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegisterPage,
        LoginPage,
        TabsPage,
        MyproductPage,
        FormproductPage,
        CovidinfoPage,
        MyprofilePage

        ],

    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
        ],

bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegisterPage,
        LoginPage,
        TabsPage,
        MyproductPage,
        FormproductPage,
        CovidinfoPage,
        MyprofilePage
        ],

    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthProvider,
        AlertProvider,
        EnvProvider,
    ProductProvider,
    CovidinfoProvider
        ]
    })
export class AppModule {}
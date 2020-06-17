import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { ProductProvider } from '../../providers/product/product';
import { LoginPage } from '../login/login';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
    })

    export class HomePage {
    user = {
        'name':'',
        'email':''
        }
    response: any;
    slider = [
        { imageUrl: '../../assets/imgs/masakan1.png'},
        { imageUrl: '../../assets/imgs/masakan2.png'},
        { imageUrl: '../../assets/imgs/masakan3.png'},
    ];  

    category = [];
    products = [];
    page = 1;
    opacity:boolean = false;
    transition:boolean = false;
    iconColor:boolean = false;
 

    constructor(
        public navCtrl: NavController,
        private authProvider : AuthProvider,
        private alertProvider : AlertProvider,
        private productProvider : ProductProvider,
        private ref: ChangeDetectorRef
        )
        {
//mengambil data user dari local storage
        var user = JSON.parse(localStorage.getItem('user'));
        this.user.name = user.name;
        this.user.email = user.email;
        this.showCategory();
        this.showPublicProduct();
        }
//fungsi yang menangani permintaan logout
//ke auth provider sekaligus mendapatkan response
//dari server
logout(){
    this.authProvider.logout().subscribe(
        result =>{
            this.response = result;
            this.alertProvider.showToast(this.response.message)
            this.navCtrl.push(LoginPage);
            }
        );
    }

    showCategory() {
        this.productProvider.getCategoryProduct().subscribe(
            result => {
            this.response = result;
            var data = this.response.data;
            data.forEach(element => {
            this.category.push(element)
            });
            }
        )
    }

    showProductByCategory(id) {
        this.alertProvider.showToast("Detail product kategori: " +
        id);
        }

        showPublicProduct() {
            this.productProvider.getAllPublicProduct(this.page)
            .subscribe(
            response => {
            this.response = response;
            this.response.data.forEach(element => {
            if (element.active == "2")
            this.products.push(element);
            });
            });
            }

            loadMore(infiniteScroll) {
                this.page = this.page + 1;
                setTimeout(() => {
                this.productProvider.getAllPublicProduct(this.page)
                .subscribe(
                response => {
                this.response = response;
                this.response.data.forEach(element => {
                if (element.active == "2")
                this.products.push(element);
                });
                });
                infiniteScroll.complete();
                }, 500);
                }

                onPageScroll($event:any){
                    let scrollTop = $event.scrollTop;
                    this.opacity = scrollTop >= 50;
                    this.iconColor = scrollTop >= 50;
                    if(scrollTop < 0){
                    this.transition = false;
                    }else{
                    this.transition = true;
                    }
                    this.ref.detectChanges();
                    }
}
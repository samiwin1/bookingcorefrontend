import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, afterNextRender } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    localStr: any;
    userToken: any;
    isConnected: boolean = false;
    constructor(private router: Router
    ) {
        afterNextRender(() => {
            try {
              
          this.userToken = JSON.parse(JSON.stringify(localStorage.getItem('user') as any));
                console.log(this.userToken)
        if( this.userToken !== null){
            this.isConnected = true;
        }
        console.log(this.isConnected)
            }
            catch (err) {
                console.log('error')
            }
          
        });
    }
    ngOnInit(): void {
        
        
    }

    // You can now add methods to navigate using the Router service, e.g.
    navigateTo(route: string) {
        this.router.navigate([route]);
    }
    logOut(){
        console.log('logout')
        localStorage.clear()
        window.location.reload()
      }
    
}

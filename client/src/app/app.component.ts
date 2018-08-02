import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './components/core/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(private http: HttpClient, private authService: AuthService) { }

    ngOnInit() {
        //Generic API call to test if everything works. Move to service when developing.
        this.http.get('api/category/all').subscribe((data) => console.log(data));        
    }
}

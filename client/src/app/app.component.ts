import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './components/core/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(private http: HttpClient, private userService: UserService) { }

    ngOnInit() {
        //Generic API call to test if everything works. Move to service when developing.
        this.http.get('/category/all').subscribe((data) => console.log(data));        
    }
}

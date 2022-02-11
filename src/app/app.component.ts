import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course_Project';

  currf= 'recipe';

  onNavigate(event: any){
    this.currf=event;
  }
}

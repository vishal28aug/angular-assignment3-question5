import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent
{
  msg="Marvellous Infosystems";
  fun()
  {
    this.msg="button clicked";
    
    
  }
}


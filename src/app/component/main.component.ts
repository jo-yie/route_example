import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  private appService = inject(AppService); 

  agreed($event: any) {
    console.info(">>>Checked: ", $event.target.checked)
    this.appService.checked = !!$event.target.checked
  }

}

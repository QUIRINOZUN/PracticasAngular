import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private cd: ChangeDetectorRef){}

  ngAfterViewInit(){
    this.cd.detectChanges();
  }

}

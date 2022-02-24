import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'dat'
  public age = 20

  constructor() { }

  ngOnInit(): void {

  }

  public reset(){
    this.name=""
    this.age=0
    console.log('resetname')
  }
}

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'dat'
  public age = 20
  public traiCay =['tao','nho']

  public traiCay2=[
    {ten:'tao',gia:12},
    {ten:'nho',gia:3}
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('trai cay =',this.traiCay2)
  }

  public reset(){
    this.name=""
    this.age=0
    console.log('resetname')
  }
}

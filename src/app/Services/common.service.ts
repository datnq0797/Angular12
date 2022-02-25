import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 3

  constructor() { }

  public binhPhuong(n: number):number{
    return n*n
  }

  public getCounter(): number{
    return this.counter
  }


  public setCounter(n:number): void{
    this.counter = n
  }


  public submitData(data: object):void{
    console.log('gui data len server. Data= ',data)

  }
}

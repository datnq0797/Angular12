import { Component, OnInit } from '@angular/core'
import { CommonService } from '../Services/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'dat'
  public age = 20
  public traiCay = ['tao', 'nho']

  public traiCay2 = [
    { ten: 'tao', gia: 12 },
    { ten: 'nho', gia: 3 }
  ]
  public districts : string[] = [] 

  public vietnamData = [
    { city: 'Chọn thành phố', district: ['Quận Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ]
    },
  ];

  constructor(private common: CommonService) { }
public counter=0
public counterBinhPhuong = 0
  ngOnInit(): void {
    console.log('get counter',this.common.getCounter())
    
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter)
    this.common.counter++
  }

  public reset() {
    this.name = ""
    this.age = 0
    console.log('resetname')
  }

  public changeCity(event: any) {
    const city = event.target.value
    if(!city){
      return;
    }
    // const temp = this.vietnamData.filter(data => data.city === city)
    const temp = this.vietnamData.find(data => data.city === city)?.district || []
    if(temp && temp.length>0)
    {
        // this.districts = temp[0].district
        this.districts = temp
    }

    
  }
}

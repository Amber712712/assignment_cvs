import { Component, OnInit } from '@angular/core';
import { List } from './list';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list?:List[];

  constructor(private service:ListService) { }

  ngOnInit(): void {
    //console.log('11111');
    this.service.getList().subscribe(
      (val)=>{
        console.log(val);
        this.list=val;
      }
    )
  }

}

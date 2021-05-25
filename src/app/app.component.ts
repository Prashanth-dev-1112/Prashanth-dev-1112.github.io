import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'coffee-machine-app';
  data: any;
  cappuccino: any;
  coffee: any;
  latte: any;
  milk: any;
  beans: any;
  transferData: object;

  constructor(private data_service: DataService) {}

  ngOnInit() {
    this.data_service.getData().subscribe(data => this.data = data);
    
    setTimeout(() => {  
      this.cappuccino = this.data[0].cappuccino;
      this.coffee = this.data[0].coffee;
      this.latte = this.data[0].latte;
      this.milk = this.data[0].milk;
      this.beans = this.data[0].beans;
    }, 1000);
  }
  
  serveDrink = (event: MouseEvent) => {
    let obj = event.target as HTMLInputElement;
    if((this.milk as number && this.beans as number) != 0) {

      if(obj.id === 'cappuccino') {
        this.milk -= 2;
        this.beans -= 2; 
        this.cappuccino++;
      }
      if(obj.id === 'coffee') {
        this.milk -= 1;
        this.beans -= 1; 
        this.coffee++;
      }
      if(obj.id === 'latte') {
        this.milk -= 1;
        this.beans -= 2; 
        this.latte++;
      }
    }
    else {
      alert("Ingredients are out of stock!");
    }
    this.transferData = [{'milk': this.milk, 'beans': this.beans, 
                    'cappuccino': this.cappuccino, 'coffee': this.coffee, 'latte': this.latte}];
    this.data_service.putData(this.transferData);
  }
  
  resetIngredients = () => {
    this.milk = 50;
    this.beans = 50;
    this.cappuccino = 0;
    this.coffee = 0;
    this.latte = 0;
    this.transferData = [{'milk': this.milk, 'beans': this.beans, 
                    'cappuccino': this.cappuccino, 'coffee': this.coffee, 'latte': this.latte}];
    this.data_service.putData(this.transferData);
  }

}

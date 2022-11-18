import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { StarRatingComponent } from 'ng-starrating/components/star-rating/star-rating.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Foods[] = [];
  
  constructor(private _foodService: FoodService, private _router: ActivatedRoute) { }

  ngOnInit(): void {

    this._router.params.subscribe(params => {
      if (params['searchItem']) {
        this.foods = this._foodService.getAllFoods().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))

      }
      else {
        this.foods = this._foodService.getAllFoods();
      }
    })




    // this.foods = this._foodService.getAllFoods().filter(e=> e.name.toLowerCase() == this.searchedItem.toLowerCase)
    // console.log("else")
    // console.log(this.foods)






  }

}

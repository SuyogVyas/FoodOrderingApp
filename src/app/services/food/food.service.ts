import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  

  getAllFoods():Foods[]{
    return [
     {
      id:1,
      name:'Burger & Fries',
      favorite:true,
      star:4,
      cookTime:'10-20 min',
      origins:['Italy'],
      imageUrl:'/assets/food1.jpeg',
      tags:['FastFood','Lunch'],
      price: 400 
     },
     {
      id:2,
      name:'Masala Dosa',
      favorite:false,
      star:4.5,
      cookTime:'10-20 min',
      origins:['South'],
      imageUrl:'/assets/food2.jpeg',
      tags:['FastFood','Lunch','South Indian'],
      price: 80 
     },
     {
      id:3,
      name:'Noodles',
      favorite:false,
      star:3,
      cookTime:'10-20 min',
      origins:['China'],
      imageUrl:'/assets/food3.jpeg',
      tags:['FastFood','Lunch','Chinese'],
      price: 120
     },

     {
      id:4,
      name:'French Fries',
      favorite:false,
      star:2.5,
      cookTime:'10-20 min',
      origins:['Italy'],
      imageUrl:'/assets/food4.jpeg',
      tags:['FastFood','Lunch'],
      price: 80
     },

     {
      id:5,
      name:'Farmhouse Pizza',
      favorite:false,
      star:3.5,
      cookTime:'10-20 min',
      origins:['Italy'],
      imageUrl:'/assets/food5.jpeg',
      tags:['FastFood','Lunch'],
      price: 400 
     },

     {
      id:6,
      name:'Potato Sandwich',
      favorite:true,
      star:4,
      cookTime:'10-20 min',
      origins:['Italy','Mexican'],
      imageUrl:'/assets/food6.jpeg',
      tags:['FastFood','Lunch'],
      price: 150 
     },

     {
      id:7,
      name:'Shahi Maggi',
      favorite:false,
      star:4.5,
      cookTime:'10-20 min',
      origins:['Italy'],
      imageUrl:'/assets/food7.jpeg',
      tags:['FastFood','Lunch'],
      price: 90
     },

     {
      id:8,
      name:'Manchurian',
      favorite:true,
      star:4.5,
      cookTime:'10-20 min',
      origins:['Italy'],
      imageUrl:'/assets/food8.jpeg',
      tags:['FastFood','Lunch'],
      price: 70
     },
    ]
  }
}

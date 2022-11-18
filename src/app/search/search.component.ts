import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItem:string|null = ""
  constructor(private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {

    this._route.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem = params['searchItem']
    })

   
  }

  search():void{
      
      //This also works
      // if(this.searchItem){
      //    this._router.navigateByUrl('/search/'+this.searchItem)
        
      // }
      this._router.navigate(['/search',this.searchItem]);
  }

}

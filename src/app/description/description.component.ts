import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  itemDetails: any = {};  // To hold the details of the item

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('data')) {
        this.itemDetails = JSON.parse(params.get('data')!);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']); 
  }
  addToCart(item: any) {
    console.log('Adding to cart:', item);
  }
}

import { Component, OnInit } from '@angular/core';
import { Shop, Item } from '../item.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  shopType: Shop = null;

  shop: Shop[]=[
    new Shop("Clanker's","Shop selling equipment", "equipment"),
    new Shop("Bits an' Bobs","Shop selling ingredients and components", "ingredient")
  ];

  items: Item [] =[
    new Item("Aging Pot","Mysterious device for aging components.", "equipment"),
    new Item("Drying Rack","Basic equipment for drying.", "equipment"),
    new Item("Glass Bottle","Commonly-used and aesthetically-pleasing vessel.", "equipment"),
    new Item("Iron Nails","Some iron nails.  Repulses some beings.", "equipment"),
    new Item("Lavandula","A widely-cultivated plant often used in cooking and oil production.", "ingredient"),
    new Item("Lavandula Oil","Known for its antiseptic, bug-repelling, and anti-inflammatory properties.", "ingredient"),
    new Item("Mortar & Pestle","Basic equipment for grinding and crushing.", "equipment"),
    new Item("Moss","Moss.", "ingredient"),
    new Item("Phosphophyllite","A very delicate and rare mineral.", "ingredient"),
    new Item("Swamp Water","It smells... swampy.", "ingredient"),
    new Item("Vodka","Liquid potato.", "ingredient"),
    new Item("War Water","Filters disruptions and restores peace.", "ingredient")
  ];
  // Aging Pot + Swamp Water + Iron Nails = War Water

  constructor(
  ) { }

  ngOnInit() {
  }

}

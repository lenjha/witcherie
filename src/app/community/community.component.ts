import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  items: Item [] =[
    new Item("Aging Pot","Mysterious device for aging components."),
    new Item("Drying Rack","Basic equipment for drying."),
    new Item("Glass Bottle","Commonly-used and aesthetically-pleasing vessel."),
    new Item("Iron Nails","Some iron nails.  Repulses some beings."),
    new Item("Lavandula","A widely-cultivated plant often used in cooking and oil production."),
    new Item("Lavandula Oil","Known for its antiseptic, bug-repelling, and anti-inflammatory properties."),
    new Item("Mortar & Pestle","Basic equipment for grinding and crushing."),
    new Item("Moss","Moss."),
    new Item("Phosphophyllite","A very delicate and rare mineral."),
    new Item("Swamp Water","It smells... swampy."),
    new Item("Vodka","Liquid potato."),
    new Item("War Water","Filters disruptions and restores peace.")
  ];
  // Aging Pot + Swamp Water + Iron Nails = War Water

  constructor() { }

  ngOnInit() {
  }

}

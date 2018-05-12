import { Component, OnInit } from '@angular/core';
const mongoose = require('mongoose');
const config = require('../../../config/config.js');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
            
})
export class HomeComponent implements OnInit {
  values= '';
  constructor() { }
  ngOnInit() {
  }
  onKey(walk:string){
    this.values = walk;
    let dbURI = config.dev.URI;
    
  }
}

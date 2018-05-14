import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  walkValues= '';
  runValues= '';
  swimValues= '';
  sleepValues= '';
  constructor() { }

  ngOnInit() {
  }
  onKeyWalk(walk:string){
    this.walkValues = walk;
  }
  onKeyRun(run:string){
    this.runValues = run;
  }
  onKeySwim(swim:string){
    this.swimValues = swim;
  }
  onKeySleep(sleep:string){
    this.sleepValues = sleep;
  }
}

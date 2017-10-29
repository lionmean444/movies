import { Component, OnInit } from '@angular/core';
import { DragulaService } from '../../../node_modules/ng2-dragula/ng2-dragula';  // dragula
import { Player, IPlayer } from '../shared/playerVo'; 

@Component({
  selector: 'app-player-stack',
  templateUrl: './player-stack.component.html',
  styleUrls: ['./player-stack.component.css']
})
export class PlayerStackComponent implements OnInit {

  public coltsTeam: Player[] = [new Player(1,'Colts', 1,'Andrew', 'Luck', 'QB',1,'http://prod.static.colts.clubs.nfl.com//assets/images/imported/IND/photos/person-cards/players/2017/Basham_Tarell_65x90--nfl_thumb3_65_90.jpg'),
  new Player(1,'Colts', 2,'Tarell', 'Basham', 'DE',1,'http://prod.static.colts.clubs.nfl.com//assets/images/imported/IND/photos/person-cards/players/2017/PlayerBio_Bostic-hs--nfl_thumb3_65_90.jpg')];
  public qb: Player[]
  public rb: Player[]
  public rg: Player[]
  public c: Player[]
  public lg: Player[]
  

  constructor(private dragulaService: DragulaService) {
    
    //  dragulaService.drop.subscribe((value: any) => {
    //   // console.log(`drop: ${value[0]}`);
    //   this.onDrop(value.slice(1));
    // });

    // dragulaService.dropModel.subscribe((value) => {
    //   this.onDropModel(value.slice(1));
    // });
    // dragulaService.removeModel.subscribe((value) => {
    //   this.onRemoveModel(value.slice(1));
    // });
   }

    ngOnInit(): void {
    // this._teamrosterService.getTeamRosters()
    //   .subscribe(teamRosters => this.teamRosters = teamRosters,
    //   error => this.errorMessage = <any>error);
  }

  // private onDrop(args: any): void {
  //   let [e] = args;
  //   console.log(args);
  //   console.log(e);
  //   console.log(e.innerText);
  //   console.log(this.teamRosters2);
  //   let s: any = [];
  //   s = e.innerText.split(",");
  //   console.log(s[1]);
  //   // console.log([e].childer);
  //   this.addClass(e, 'ex-moved');
  // }

  // // dragula methods
  // private hasClass(el: any, name: string): any {
  //   return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  // }

  // private addClass(el: any, name: string): void {
  //   if (!this.hasClass(el, name)) {
  //     el.className = el.className ? [el.className, name].join(' ') : name;
  //     console.log(el.className);
  //   }
  // }

  // private onDropModel(args) {
  //   let [el, target, source] = args;
  //   console.log(args);
  //   // do something else
  // }

  // private onRemoveModel(args) {
  //   let [el, source] = args;
  //   console.log(args);
  //   // do something else
  // }

}

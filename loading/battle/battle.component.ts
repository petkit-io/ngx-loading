import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'ngx-battle-loading',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  @Input() width = '64px';
  @Input() color = 'black';
  @Input() borderWidth = '3px';

  constructor() { }

  ngOnInit() {
  }

}

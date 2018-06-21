import { Component, OnInit } from '@angular/core';
import {Block} from '../block';
import {BlocksService} from '../blocks.service';

@Component({
  selector: 'app-recentblocks',
  templateUrl: './recentblocks.component.html',
  styleUrls: ['./recentblocks.component.css']
})
export class RecentblocksComponent implements OnInit {

  recent_blocks: Block[];

  constructor(private blocksService: BlocksService) { }

  ngOnInit() {
    this.getRecentBlocks();
  }

  getRecentBlocks(): void {
    this.blocksService.getRecentBlocks().subscribe(recent_blocks => this.recent_blocks = recent_blocks.blocks);
  }

}

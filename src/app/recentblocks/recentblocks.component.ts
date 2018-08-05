import { Component, OnInit } from '@angular/core';
import {Block} from '../block';
import {BlocksService} from '../blocks.service';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-recentblocks',
  templateUrl: './recentblocks.component.html',
  styleUrls: ['./recentblocks.component.css']
})
export class RecentblocksComponent implements OnInit {

  private max_blocks = 20;
  recent_blocks: Block[];

  constructor(private blocksService: BlocksService, private eventsService: EventsService) { }

  ngOnInit() {
    this.getRecentBlocks();
  }

  startListeningForEvents() {
    this.eventsService.openEvents().subscribe(data => {
      console.log(data);

      // we only add this block to the most recent blocks if it has a more recent timestamp
      const block = data['event'] as Block;
      if (block.timestamp >= this.recent_blocks[0].timestamp) {
        this.recent_blocks.unshift(data['event']);
        if (this.recent_blocks.length > 20) {
          this.recent_blocks.pop();
        }
      }
    });
  }

  getRecentBlocks(): void {
    this.blocksService.getRecentBlocks(this.max_blocks, 0).subscribe(
      recent_blocks => this.recent_blocks = recent_blocks.blocks,
      error => console.log(error),
      () => this.startListeningForEvents());
  }

}

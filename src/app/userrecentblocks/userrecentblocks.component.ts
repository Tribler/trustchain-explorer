import { Component, OnInit } from '@angular/core';
import {Block} from '../block';
import {BlocksService} from '../blocks.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userrecentblocks',
  templateUrl: './userrecentblocks.component.html',
  styleUrls: ['./userrecentblocks.component.css']
})
export class UserrecentblocksComponent implements OnInit {

  recent_blocks: Block[];
  pubkey: string;

  constructor(private route: ActivatedRoute, private blocksService: BlocksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pubkey = params['pubkey'];
      this.getLatestBlocks(this.pubkey);
    });
  }

  getLatestBlocks(pubkey: string): void {
    this.blocksService.getLatestBlocks(pubkey).subscribe(recent_blocks => this.recent_blocks = recent_blocks.blocks);
  }

}

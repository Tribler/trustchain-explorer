import { Component, OnInit } from '@angular/core';
import {BlocksService} from '../blocks.service';
import {ActivatedRoute} from '@angular/router';
import {Block} from '../block';

@Component({
  selector: 'app-blockdetails',
  templateUrl: './blockdetails.component.html',
  styleUrls: ['./blockdetails.component.css']
})
export class BlockdetailsComponent implements OnInit {

  block: Block;

  constructor(private route: ActivatedRoute, private blocksService: BlocksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const hash = params['hash'];
      this.getBlock(hash);
    });
  }

  getBlock(hash: string): void {
    this.blocksService.getBlock(hash).subscribe(block => this.block = block.block);
  }

}

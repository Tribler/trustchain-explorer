import { Component, OnInit } from '@angular/core';
import { DataSet, Network, network } from 'vis';
import {BlocksService} from '../blocks.service';
import {Block} from '../block';


async function delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), 1000)).then(() => console.log("fired"));
}


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  nodes: DataSet;
  edges: DataSet;
  network_graph: Network;
  offset: number;

  constructor(private blocksService: BlocksService) {
    this.offset = 0;
  }

  addBlocksToGraph(blocks) {
    for (const block of blocks) {
      this.addBlockToGraph(block);
    }
  }

  addBlockToGraph(block) {
    const block_id = block.public_key + '.' + block.sequence_number;
    this.nodes.add({'id': block_id, 'title': 'type: ' + block.type});
    if (block.sequence_number > 0) {
      const prev_id = block.public_key + '.' + (block.sequence_number - 1);
      this.edges.add({'from': block_id, 'to': prev_id, 'color': {'color': 'red', 'highlight': 'red'}, 'arrows': {'to': true}});
    }
    if (block.link_sequence_number > 0) {
      const other_id = block.link_public_key + '.' + block.link_sequence_number;
      this.edges.add({'from': block_id, 'to': other_id, 'color': {'color': 'blue', 'highlight': 'blue'}});
    }
  }

  ngOnInit() {
    this.nodes = new DataSet([]);
    this.edges = new DataSet([]);

    const data = {
      nodes: this.nodes,
      edges: this.edges
    };

    const options = {
      'nodes': {
        color: 'red',
        size: 400,
      },
      height: '100%',
      autoResize: true,
    };
    const container = document.getElementById('visualization');
    this.network_graph = new Network(container, data, options);

    this.getRecentBlocks(100, this.offset);
  }

  getRecentBlocks(limit: number, offset: number): void {
    this.blocksService.getRecentBlocks(limit, offset).subscribe(recent_blocks => {
      this.offset += recent_blocks.blocks.length;
      console.log(recent_blocks.blocks);
      this.addBlocksToGraph(recent_blocks.blocks);
    });
  }

}

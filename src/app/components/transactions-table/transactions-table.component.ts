import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {


  @Input() public transactions:any = [];
  @Input() public timestamp:any;

  constructor(public blockchainService: BlockchainService) { }

  ngOnInit(): void {
  }

}

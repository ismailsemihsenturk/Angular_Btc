import { Component, OnInit } from '@angular/core';
import { TransactionsTableComponent } from 'src/app/components/transactions-table/transactions-table.component';
import { BlockchainService } from 'src/app/services/blockchain.service';
import {Transactions} from "blockchain_clone_iss/src/blockchain";
import { IWalletKey } from 'src/app/services/blockchain.service';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {


  public newTx:any;
  public walletKeys: Array<IWalletKey> = [];


  constructor(private blockchainService:BlockchainService) {
    this.walletKeys[0] = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTx = new Transactions();
  }

  createTransaction(){
    this.newTx.fromAddress = this.walletKeys[0].publicKey;
    this.newTx.signTransaction(this.walletKeys[0].keyObj);

    this.blockchainService.addTransaction(this.newTx);

    this.newTx = new Transactions();
  }

}

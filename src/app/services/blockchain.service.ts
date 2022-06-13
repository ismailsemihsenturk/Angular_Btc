import { Injectable } from '@angular/core';
import { Blockchain } from "blockchain_clone_iss/src/blockchain";
import EC from "elliptic/lib/elliptic/ec/index";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions("cüzdan adresi")
    this.generateWalletKeys();
  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  addTransaction(tx:any) {
    this.blockchainInstance.addTransaction(tx);
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  addressIsFromCurrentUser(address:any) {
    return address === this.walletKeys[0].publicKey;
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  generateWalletKeys() {
    const ec = new EC("secp256k1");
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic("hex"),
      privateKey: key.getPrivate("hex"),
    });

    console.log(this.walletKeys);
  }

}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}




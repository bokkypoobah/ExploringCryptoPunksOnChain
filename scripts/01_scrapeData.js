var fs = require('fs');
const util = require('util');
const { ethers } = require("ethers");

const CRYPTOPUNKSDATAADDRESS="0x16F5A35647D6F03D5D3da7b35409D65ba03aF3B2";
const CRYPTOPUNKSDATAABI=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"bytes","name":"encoding","type":"bytes"},{"internalType":"string","name":"name","type":"string"}],"name":"addAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"key1","type":"uint64"},{"internalType":"uint32","name":"value1","type":"uint32"},{"internalType":"uint64","name":"key2","type":"uint64"},{"internalType":"uint32","name":"value2","type":"uint32"},{"internalType":"uint64","name":"key3","type":"uint64"},{"internalType":"uint32","name":"value3","type":"uint32"},{"internalType":"uint64","name":"key4","type":"uint64"},{"internalType":"uint32","name":"value4","type":"uint32"}],"name":"addComposites","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"bytes","name":"_punks","type":"bytes"}],"name":"addPunks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"index","type":"uint16"}],"name":"punkAttributes","outputs":[{"internalType":"string","name":"text","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"index","type":"uint16"}],"name":"punkImage","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"index","type":"uint16"}],"name":"punkImageSvg","outputs":[{"internalType":"string","name":"svg","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sealContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_palette","type":"bytes"}],"name":"setPalette","outputs":[],"stateMutability":"nonpayable","type":"function"}];


let STARTBLOCKNUMBER=13045935;
let ENDBLOCKNUMBER=13047090;

async function doIt() {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner()
  const blockNumber = await provider.getBlockNumber();
  console.log("blockNumber: " + blockNumber.toString());

  const cryptoPunksData = new ethers.Contract(CRYPTOPUNKSDATAADDRESS, CRYPTOPUNKSDATAABI, provider);

  // STARTBLOCKNUMBER=13045935;
  // ENDBLOCKNUMBER=STARTBLOCKNUMBER+20;
  for (let blockNumber = STARTBLOCKNUMBER; blockNumber <= ENDBLOCKNUMBER; blockNumber++) {
    const block = await provider.getBlockWithTransactions(blockNumber);
    for (const tx of block.transactions) {
      if (tx.from == "0xC352B534e8b987e036A93539Fd6897F53488e56a") {
        if (tx.data.startsWith("0x844e2cd5")) {
          const info = cryptoPunksData.interface.decodeFunctionData("setPalette", tx.data);
          console.log(tx.hash + " setPalette: " + info);
        } else if (tx.data.startsWith("0x6f2a6568")) {
          const info = cryptoPunksData.interface.decodeFunctionData("addComposites", tx.data);
          console.log(tx.hash + " addComposites: " + info);
        } else if (tx.data.startsWith("0xdae2ae20")) {
          const info = cryptoPunksData.interface.decodeFunctionData("addAsset", tx.data);
          console.log(tx.hash + " addAsset     : " + info);
        } else if (tx.data.startsWith("0x26b97364")) {
          const info = cryptoPunksData.interface.decodeFunctionData("addPunks", tx.data);
          console.log(tx.hash + " addPunks     : " + info);
        } else if (tx.data.startsWith("0x68bd580e")) {
          const info = cryptoPunksData.interface.decodeFunctionData("sealContract", tx.data);
          console.log(tx.hash + " sealContract : " + info);
        }
      }
    }
  }
}

doIt();

console.log(process.cwd());

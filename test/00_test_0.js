const { ZERO_ADDRESS, Data, generateRange } = require('./helpers/common');
const { singletons, expectRevert } = require("@openzeppelin/test-helpers");
const { expect, assert } = require("chai");
const { BigNumber } = require("ethers");
const util = require('util');
const setupData = require('./setupData.json');
var fs = require('fs');

let data;

describe("ExploringCryptoPunksOnChain", function () {
  const DETAILS = 1;

  beforeEach(async function () {
    console.log();
    console.log("      beforeEach");

    data = new Data();
    await data.init();

    const CryptopunksData = await ethers.getContractFactory("CryptopunksData");

    const cryptopunksData = await CryptopunksData.deploy();
    await cryptopunksData.deployed();
    await data.setCryptopunksData(cryptopunksData);
    const cryptopunksDataReceipt = await data.cryptopunksData.deployTransaction.wait();
    if (DETAILS > 0) {
      await data.printEvents("Deployed CryptopunksData", cryptopunksDataReceipt);
    }


    const setup1 = [];
    for (const item of setupData) {
      if (item.functionName == "setPalette") {
        setup1.push(data.cryptopunksData.setPalette(item.data[0]));
      } else if (item.functionName == "addComposites") {
        setup1.push(data.cryptopunksData.addComposites(item.data[0], item.data[1], item.data[2], item.data[3], item.data[4], item.data[5], item.data[6], item.data[7]));
      } else if (item.functionName == "addAsset") {
        setup1.push(data.cryptopunksData.addAsset(item.data[0], item.data[1], item.data[2]));
      } else if (item.functionName == "addPunks") {
        setup1.push(data.cryptopunksData.addPunks(item.data[0], item.data[1]));
      } else if (item.functionName == "sealContract") {
        setup1.push(data.cryptopunksData.sealContract());
      }
    }
    const setup1Txs = await Promise.all(setup1);
    if (DETAILS > 0) {
      setup1Txs.forEach( async function (a) {
        await data.printEvents("cryptopunksData setup", await a.wait());
      });
    }
    // await data.printState("Setup Completed");

    console.log("      beforeEach - end");
    console.log();
  });


  it("00. Test 00", async function () {
    console.log("      00. Test 00 - Generate Metadata & Image");

    const tokenIds = [3636];
    for (const tokenId of tokenIds) {
      const punkImageSvg = await data.cryptopunksData.punkImageSvg(tokenId, { gasLimit: 30000000 });
      const punkAttributes = await data.cryptopunksData.punkAttributes(tokenId, { gasLimit: 30000000 });
      console.log(tokenId + " " + JSON.stringify(punkAttributes));
      const svg = punkImageSvg.replace("data:image/svg+xml;utf8,", "");
      const filename = "test/generatedimage_" + tokenId + ".svg";
      fs.writeFile(filename, svg, (err) => {
        if (err) return console.error(err);
        console.log("Saved image to " + filename);
      });
    }
  });

});

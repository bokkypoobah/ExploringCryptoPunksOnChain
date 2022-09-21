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

    // data = new Data();
    // await data.init();

    const CryptopunksData = await ethers.getContractFactory("CryptopunksData");
    // const PixelRenderer = await ethers.getContractFactory("PixelRenderer");
    // const SVGWrapper = await ethers.getContractFactory("SVGWrapper");
    // const TokenURIBuilder = await ethers.getContractFactory("TokenURIBuilder");
    // const CryptoDickbuttsMetadata = await ethers.getContractFactory("CryptoDickbuttsMetadata");
    // const CryptoDickbuttsBuilder = await ethers.getContractFactory("CryptoDickbuttsBuilder");
    // const CryptoDickbuttsStrings = await ethers.getContractFactory("CryptoDickbuttsStrings");
    // const CryptoDickbuttsRandom = await ethers.getContractFactory("CryptoDickbuttsRandom");
    // const CryptoDickbuttsChained = await ethers.getContractFactory("CryptoDickbuttsChained");
    //
    // const gifEncoder = await GIFEncoder.deploy();
    // await gifEncoder.deployed();
    // await data.setGIFEncoder(gifEncoder);
    // const gifEncoderReceipt = await data.gifEncoder.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed GIFEncoder", gifEncoderReceipt);
    // }
    //
    // const pixelRenderer = await PixelRenderer.deploy();
    // await pixelRenderer.deployed();
    // await data.setPixelRenderer(pixelRenderer);
    // const pixelRendererReceipt = await data.pixelRenderer.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed PixelRenderer", pixelRendererReceipt);
    // }
    //
    // const svgWrapper = await SVGWrapper.deploy();
    // await svgWrapper.deployed();
    // await data.setSVGWrapper(svgWrapper);
    // const svgWrapperReceipt = await data.svgWrapper.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed SVGWrapper", svgWrapperReceipt);
    // }
    //
    // const tokenURIBuilder = await TokenURIBuilder.deploy();
    // await tokenURIBuilder.deployed();
    // await data.setTokenURIBuilder(tokenURIBuilder);
    // const tokenURIBuilderReceipt = await data.tokenURIBuilder.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed TokenURIBuilder", tokenURIBuilderReceipt);
    // }
    //
    // const cryptoDickbuttsMetadata = await CryptoDickbuttsMetadata.deploy();
    // await cryptoDickbuttsMetadata.deployed();
    // await data.setCryptoDickbuttsMetadata(cryptoDickbuttsMetadata);
    // const cryptoDickbuttsMetadataReceipt = await data.cryptoDickbuttsMetadata.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed CryptoDickbuttsMetadata", cryptoDickbuttsMetadataReceipt);
    // }
    //
    // const cryptoDickbuttsBuilder = await CryptoDickbuttsBuilder.deploy();
    // await cryptoDickbuttsBuilder.deployed();
    // await data.setCryptoDickbuttsBuilder(cryptoDickbuttsBuilder);
    // const cryptoDickbuttsBuilderReceipt = await data.cryptoDickbuttsBuilder.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed CryptoDickbuttsBuilder", cryptoDickbuttsBuilderReceipt);
    // }
    //
    // const cryptoDickbuttsStrings = await CryptoDickbuttsStrings.deploy();
    // await cryptoDickbuttsStrings.deployed();
    // await data.setCryptoDickbuttsStrings(cryptoDickbuttsStrings);
    // const cryptoDickbuttsStringsReceipt = await data.cryptoDickbuttsStrings.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed CryptoDickbuttsStrings", cryptoDickbuttsStringsReceipt);
    // }
    //
    // const cryptoDickbuttsRandom = await CryptoDickbuttsRandom.deploy();
    // await cryptoDickbuttsRandom.deployed();
    // await data.setCryptoDickbuttsRandom(cryptoDickbuttsRandom);
    // const cryptoDickbuttsRandomReceipt = await data.cryptoDickbuttsRandom.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed CryptoDickbuttsRandom", cryptoDickbuttsRandomReceipt);
    // }
    //
    // const cryptoDickbuttsChained = await CryptoDickbuttsChained.deploy();
    // await cryptoDickbuttsChained.deployed();
    // await data.setCryptoDickbuttsChained(cryptoDickbuttsChained);
    // const cryptoDickbuttsChainedReceipt = await data.cryptoDickbuttsChained.deployTransaction.wait();
    // if (DETAILS > 0) {
    //   await data.printEvents("Deployed CryptoDickbuttsChained", cryptoDickbuttsChainedReceipt);
    // }
    //
    // const setup1 = [];
    // for (const item of setupData) {
    //   setup1.push(data.cryptoDickbuttsBuilder.setData(item.key, item.imageData));
    // }
    // const setup1Txs = await Promise.all(setup1);
    // if (DETAILS > 0) {
    //   setup1Txs.forEach( async function (a) {
    //     await data.printEvents("cryptoDickbuttsBuilder.setData(key, imageData)", await a.wait());
    //   });
    // }
    //
    // const setup2 = [];
    // setup2.push(data.cryptoDickbuttsChained.setEncoder(data.gifEncoder.address));
    // setup2.push(data.cryptoDickbuttsChained.setRenderer(data.pixelRenderer.address));
    // setup2.push(data.cryptoDickbuttsChained.setSVGWrapper(data.svgWrapper.address));
    // setup2.push(data.cryptoDickbuttsChained.setTokenURIBuilder(data.tokenURIBuilder.address));
    // setup2.push(data.cryptoDickbuttsChained.setMetadata(data.cryptoDickbuttsMetadata.address));
    // setup2.push(data.cryptoDickbuttsChained.setBuilder(data.cryptoDickbuttsBuilder.address));
    // setup2.push(data.cryptoDickbuttsChained.setStrings(data.cryptoDickbuttsStrings.address));
    // setup2.push(data.cryptoDickbuttsChained.setRandom(data.cryptoDickbuttsRandom.address));
    // const mintATxs = await Promise.all(setup2);
    // if (DETAILS > 0) {
    //   mintATxs.forEach( async function (a) {
    //     await data.printEvents("cryptoDickbuttsChained.setX(x)", await a.wait());
    //   });
    // }
    // await data.printState("Setup Completed");

    console.log("      beforeEach - end");
    console.log();
  });


  it("00. Test 00", async function () {
    console.log("      00. Test 00 - Generate Metadata & Image");

    // const tokenIds = [1940];
    // for (const tokenId of tokenIds) {
    //   const tokenURI = await data.cryptoDickbuttsChained.tokenURI(tokenId, { gasLimit: 75000000 });
    //   const data1 = tokenURI.replace("data:application/json;base64,", "");
    //   const data2 = Buffer.from(data1, "base64");
    //   const metadata = JSON.parse(data2.toString());
    //   console.log(JSON.stringify(metadata, null, 2));
    //
    //   const imageDataBase64 = metadata.image.replace("data:image/gif;base64,", "");
    //   const imageData = Buffer.from(imageDataBase64, "base64");
    //   const filename = "test/generatedimage_" + tokenId + ".gif";
    //   fs.writeFile(filename, imageData, (err) => {
    //     if (err) return console.error(err);
    //     console.log("Saved image to " + filename);
    //   });
    // }
  });

});

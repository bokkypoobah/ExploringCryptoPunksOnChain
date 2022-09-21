const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const { BigNumber } = require("ethers");
const util = require('util');
const { expect, assert } = require("chai");

class Data {

  constructor() {
    this.accounts = [];
    this.accountNames = {};
    this.contracts = [];

    this.gifEncoder = null;
    this.pixelRenderer = null;
    this.svgWrapper = null;
    this.tokenURIBuilder = null;
    this.cryptoDickbuttsMetadata = null;
    this.cryptoDickbuttsBuilder = null;
    this.cryptoDickbuttsStrings = null;
    this.cryptoDickbuttsRandom = null;
    this.cryptoDickbuttsChained = null;

    this.gasPrice = ethers.utils.parseUnits("10", "gwei");
    this.ethUsd = ethers.utils.parseUnits("1500.00", 18);

    this.verbose = false;
  }

  async init() {
    [this.deployerSigner, this.user0Signer, this.user1Signer, this.user2Signer, this.integratorSigner] = await ethers.getSigners();
    [this.deployer, this.user0, this.user1, this.user2, this.integrator] = await Promise.all([this.deployerSigner.getAddress(), this.user0Signer.getAddress(), this.user1Signer.getAddress(), this.user2Signer.getAddress(), this.integratorSigner.getAddress()]);

    this.addAccount("0x0000000000000000000000000000000000000000", "null");
    this.addAccount(this.deployer, "deployer");
    this.addAccount(this.user0, "user0");
    this.addAccount(this.user1, "user1");
    this.addAccount(this.user2, "user2");
    this.addAccount(this.integrator, "integrator");
    this.baseBlock = await ethers.provider.getBlockNumber();
  }

  addAccount(account, accountName) {
    this.accounts.push(account);
    this.accountNames[account.toLowerCase()] = accountName;
    if (this.verbose) {
      console.log("      Mapping account " + account + " => " + this.getShortAccountName(account));
    }
  }
  getShortAccountName(address) {
    if (address != null) {
      var a = address.toLowerCase();
      var n = this.accountNames[a];
      if (n !== undefined) {
        return n + ":" + address.substring(0, 6);
      }
    }
    return address.substring(0, 20);
  }
  addContract(contract, contractName) {
    const address = contract.address;
    this.accounts.push(address);
    this.accountNames[address.toLowerCase()] = contractName;
    this.contracts.push(contract);
    if (this.verbose) {
      console.log("      Mapping contract " + address + " => " + this.getShortAccountName(address));
    }
  }


  printEvents(prefix, receipt) {
    var fee = receipt.gasUsed.mul(this.gasPrice);
    var feeUsd = fee.mul(this.ethUsd).div(ethers.utils.parseUnits("1", 18)).div(ethers.utils.parseUnits("1", 18));
    console.log("        > " + prefix + " - gasUsed: " + receipt.gasUsed + " ~ ETH " + ethers.utils.formatEther(fee) + " ~ USD " + feeUsd);
    receipt.logs.forEach((log) => {
      let found = false;
      for (let i = 0; i < this.contracts.length && !found; i++) {
        try {
          var data = this.contracts[i].interface.parseLog(log);
          var result = data.name + "(";
          let separator = "";
          data.eventFragment.inputs.forEach((a) => {
            result = result + separator + a.name + ": ";
            if (a.type == 'address') {
              result = result + this.getShortAccountName(data.args[a.name].toString());
            } else if (a.type == 'uint256' || a.type == 'uint128') {
              if (a.name == 'tokens' || a.name == 'amount' || a.name == 'balance' || a.name == 'value' || a.name == 'integratorTip' || a.name == 'remainingTip') {
                result = result + ethers.utils.formatUnits(data.args[a.name], 18);
              } else {
                result = result + data.args[a.name].toString();
              }
            } else {
              result = result + data.args[a.name].toString();
            }
            separator = ", ";
          });
          result = result + ")";
          console.log("          + " + this.getShortAccountName(log.address) + " " + log.blockNumber + "." + log.logIndex + " " + result);
          found = true;
        } catch (e) {
        }
      }
      if (!found) {
        console.log("        + " + this.getShortAccountName(log.address) + " " + JSON.stringify(log.topics));
      }
    });
  }

  padLeft(s, n) {
    var o = s.toString();
    while (o.length < n) {
      o = " " + o;
    }
    return o;
  }
  padLeft0(s, n) {
    var result = s.toString();
    while (result.length < n) {
      result = "0" + result;
    }
    return result;
  }
  padRight(s, n) {
    var o = s;
    while (o.length < n) {
      o = o + " ";
    }
    return o;
  }

  async setGIFEncoder(gifEncoder) {
    this.gifEncoder = gifEncoder;
    this.addContract(gifEncoder, "GIFEncoder");
  }
  async setPixelRenderer(pixelRenderer) {
    this.pixelRenderer = pixelRenderer;
    this.addContract(pixelRenderer, "PixelRenderer");
  }
  async setSVGWrapper(svgWrapper) {
    this.svgWrapper = svgWrapper;
    this.addContract(svgWrapper, "SVGWrapper");
  }
  async setTokenURIBuilder(tokenURIBuilder) {
    this.tokenURIBuilder = tokenURIBuilder;
    this.addContract(tokenURIBuilder, "TokenURIBuilder");
  }
  async setCryptoDickbuttsMetadata(cryptoDickbuttsMetadata) {
    this.cryptoDickbuttsMetadata = cryptoDickbuttsMetadata;
    this.addContract(cryptoDickbuttsMetadata, "CryptoDickbuttsMetadata");
  }
  async setCryptoDickbuttsBuilder(cryptoDickbuttsBuilder) {
    this.cryptoDickbuttsBuilder = cryptoDickbuttsBuilder;
    this.addContract(cryptoDickbuttsBuilder, "CryptoDickbuttsBuilder");
  }
  async setCryptoDickbuttsStrings(cryptoDickbuttsStrings) {
    this.cryptoDickbuttsStrings = cryptoDickbuttsStrings;
    this.addContract(cryptoDickbuttsStrings, "CryptoDickbuttsStrings");
  }
  async setCryptoDickbuttsRandom(cryptoDickbuttsRandom) {
    this.cryptoDickbuttsRandom = cryptoDickbuttsRandom;
    this.addContract(cryptoDickbuttsRandom, "CryptoDickbuttsRandom");
  }
  async setCryptoDickbuttsChained(cryptoDickbuttsChained) {
    this.cryptoDickbuttsChained = cryptoDickbuttsChained;
    this.addContract(cryptoDickbuttsChained, "CryptoDickbuttsChained");
  }

  async printState(prefix) {
    console.log("\n        --- " + prefix + " ---");

    console.log();
    console.log("        CryptoDickbuttsChained: " + this.getShortAccountName(this.cryptoDickbuttsChained.address));
    const gifEncoder = await this.cryptoDickbuttsChained.encoder();
    console.log("        CryptoDickbuttsChained.encoder: " + this.getShortAccountName(gifEncoder) + " vs " + this.getShortAccountName(this.gifEncoder.address));
    const renderer = await this.cryptoDickbuttsChained.renderer();
    console.log("        CryptoDickbuttsChained.renderer: " + this.getShortAccountName(renderer) + " vs " + this.getShortAccountName(this.pixelRenderer.address));
    const svgWrapper = await this.cryptoDickbuttsChained.svgWrapper();
    console.log("        CryptoDickbuttsChained.svgWrapper: " + this.getShortAccountName(svgWrapper) + " vs " + this.getShortAccountName(this.svgWrapper.address));
    const uriBuilder = await this.cryptoDickbuttsChained.uriBuilder();
    console.log("        CryptoDickbuttsChained.uriBuilder: " + this.getShortAccountName(uriBuilder) + " vs " + this.getShortAccountName(this.tokenURIBuilder.address));
    const metadata = await this.cryptoDickbuttsChained.metadata();
    console.log("        CryptoDickbuttsChained.metadata: " + this.getShortAccountName(metadata) + " vs " + this.getShortAccountName(this.cryptoDickbuttsMetadata.address));
    const builder = await this.cryptoDickbuttsChained.builder();
    console.log("        CryptoDickbuttsChained.builder: " + this.getShortAccountName(builder) + " vs " + this.getShortAccountName(this.cryptoDickbuttsBuilder.address));
    const strings = await this.cryptoDickbuttsChained.strings();
    console.log("        CryptoDickbuttsChained.strings: " + this.getShortAccountName(strings) + " vs " + this.getShortAccountName(this.cryptoDickbuttsStrings.address));
    const random = await this.cryptoDickbuttsChained.random();
    console.log("        CryptoDickbuttsChained.random: " + this.getShortAccountName(random) + " vs " + this.getShortAccountName(this.cryptoDickbuttsRandom.address));
  }
}

const generateRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

/* Exporting the module */
module.exports = {
    ZERO_ADDRESS,
    Data,
    generateRange
}

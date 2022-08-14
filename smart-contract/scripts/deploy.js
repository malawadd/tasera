const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Tasera = await hre.ethers.getContractFactory("Tasera");
  const tasera = await Tasera.deploy("0x1F98431c8aD98523631AE4a59f267346ea31F984");

  await tasera.deployed();

  console.log("tasera deployed to:", tasera.address);

  fs.writeFileSync(
    "././tasera.js", `
    export const tasera = "${tasera.address}"`
  )

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//npx hardhat verify CONTRACT_ADDR --network mumbai
//npx hardhat verify 0x8991f160A6e0D10803201A8dDA333CB60C350A0c "0x4b48841d4b32C4650E4ABc117A03FE8B51f38F68" --network mumbai

//npx hardhat run --network mumbai scripts/deploy.js

//polygon scan : 0x4b48841d4b32C4650E4ABc117A03FE8B51f38F68

//0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

const hre = require("hardhat");

async function main() {

  // await hre.run('compile');

  // We get the contract to deploy
  const ObiToken = await hre.ethers.getContractFactory("ObiToken");
  const obitoken = await ObiToken.deploy('Peter Obi','ObiCoin');

  await obitoken.deployed();

  console.log("ObiToken deployed to:", obitoken.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

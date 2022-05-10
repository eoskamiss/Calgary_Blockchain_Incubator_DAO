const hre = require("hardhat");

async function main() {

    const OilToken = await hre.ethers.getContractFactory("OilToken");
    const oilToken = await OilToken.deploy();

    await oilToken.deployed();

    console.log("Oil Token deployed to:", oilToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const networkNmae = hre.network.name;
  const networkURL = hre.network.config.url;
  console.log('deploying to network ' +  networkNmae , networkURL);

  const OnChainNFT = await hre.ethers.getContractFactory("OnChainNFT");
  const onChainNFT = await OnChainNFT.deploy();
  await onChainNFT.deployed();
  console.log("OnChainNFT deployed to:", onChainNFT.address);

  //SVG image that you want to mint
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'>
      <defs><clipPath id='a'><path d='M0 0h1024v1024H0z'/></clipPath></defs>
      <g clip-path='url(#a)'>
        <path d='M0 0h1024v1024H0z'/>
        <path fill='pink' d='M0 241h1024v20H0zM0 502h1024v20H0zM0 763h1024v20H0z'/>
        <path fill='pink' d='M241 0h20v1024h-20z'/>
      </g>
    </svg>`;

  const txn = await onChainNFT.mint(svg);
  const txnReceipt = await txn.wait();

  const event = txnReceipt.events.find( (event)=> event.event === 'Minted');
  const tokenId = event.args['tokenId'];
  console.log("tokenId is " + tokenId);


  if (networkNmae == "polygon_mumbai") {
    console.log('Your minted NFT on polygon_mumbai is : ',
              `https://testnets.opensea.io/assets/mumbai/${onChainNFT.address}/${tokenId}`

    );
  } else {
    console.log('Your minted NFT : ',
                `https://testnets.opensea.io/assets/${onChainNFT.address}/${tokenId}`
     );

  };


};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

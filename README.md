# On chain NFT hardhat projet
This repo shows a simple example of an on chain NFT smart contract developed using the hardhat framework
<br><br>

## Motivation ##
This is part of a series of NFT smart contracts using solidity. This NFT series covers the basic codes in varioius areas of NFT projects such as :
- basic NFT
- *on-chain NFT*
- off-chain NFT using IPFS
- nft-collection
- nft-whitelist
- nft-royalty
- etc

<br>

## Functional Description ##
Some of the functions provided are :
- convert svg image into a base64 string
- convert tokenURI into a base64 string
- mint NFT 
 

### Owner only functions ###
- mint NFT 

### User functions ###
- none

### Contract (internal) functions ###
- convert svg image into a base64 string
- convert tokenURI into a base64 string
<br>

## Technical Description ###

### Technical background ###
- As this smart contract project is built using the hardhat framework, please refer to this project/repo [basic smart contract using hardhat](https://github.com/dtan1/contractviahardhat) regarding building a basic smart contract using the hardhat framwork. 
- The README section contains a quick overview and usage of various hardhat commands etc. It serves as a good, quick refresher.

### Technical usage ###
Below is a brief summary of the technical libraries or tools that is used in this project :
- development fraemwork : hardhat
- coding libraries : openzeppelin - ERC721URIStorage.sol, Ownable.sol, Counters.sol
- unit test libraries : chai assertion, ether.js 

### Technical consideration ###

#### States ####
- none


#### Functions ####
- Mint function
  - internally, convert svg image into base64 string first
  - then, convert tokenURI json data into base64 string, using the base54 image string above.
  - using Counters function to increment the token id.
  - using safeMint with the new token id generated.
  - using setTokenURI to associate new token minted with the new base64 token URI.

<br>

## Testing ##

### Unit Test ###
- Positive tests :
  - mint

### Network Testing - public testnet ###
- refer to the ***Testing Setup*** in this project/repo [basic smart contract using hardhat](https://github.com/dtan1/contractviahardhat) for more details
- rinkeby testnet is used here as opensea supports test integration with rinkeby, i.e. one can view the newly minted NFT on opensea


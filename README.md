📧 #Web3 #Blockchain #Ethereum

🔥
Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto

Used: vite@latest, web 3.0, tailwindcss3, landing for online transfering crypto currency, check transaction, transfer  Ethereum on real market, usefull links.

Original source from @JavaScript Mastery, 12-28-21 

To create a new project, you need:
1 - create a new folder and give it a name;
2 - in this folder we create 2 more folders with the names: a) client and b) smart_contract;
3 - in the terminal we typing cd client. Here we initialize the react framework: npm init vite@latest ./ krypt react react. 
4 - npm install
5 - npm run dev.

***🔥 To run or continue in the code editor always type: npm run dev

6 - npm install -D tailwindcss postcss autoprefixer
7 - npx tailwindcss init -p (for creating tailwind.config.js)
8 - in index.css we need to clear everything and enter:
@tailwindbase;
@tailwind components;
@tailwind utilities;
9 - In the App.js file, we clear everything and enter: const App = () => {
	return (
		<div className='App'>
			H1 className='text-3xl font-bold underline'>Hello world!</H1></div>)}
      export default App
10 - in terminal -> npm run dev -> ^C -> cd..-> cd->smart_contract 
11 -> npm init -y (for initialize package.json)
12 - back to client folder
13 - in src folder create components folder, inside Navbar.jsx, Loader.jsx,Services.jsx, Transactions.jsx, Welcome.jsx, Footer.jsx and index.js with:
export {default as Loader} from './Loader';
export {default as Navbar} from './Navbar';
export {default as Footer} from './Footer';
export {default as Welcome} from './Welcome';
export {default as Transactions} from './Loader';
export {default as Services} from './Services';
14 - in smart_contract: 
npm install --save-dev hardhat @nomiclubs/hardhat-ethers ethers
15 - npx hardhat (for add a .gitignore)
16 - npx hardhat test 
17 - we need to have in IDE solidity extension
18 - in folders contracts we delete Greeter.sol and create new folder Transactions.sol with code:
- comment // SPDX_License-Identifier: UNLICENSED
- pragma solidity ^0.8.0;
- contract Transactions {
   -uint256 transactionCounter;
   -event Transfer(address from, address   receiver, uint amount, string message, uint256 timestamp, string keyword);
   -struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message; 
    uint256 timestamp; 
    string keyword;
   }
   -TransferStruct[] transactions;

   -function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
  -function addToBlockchain() public view returns (TransferStruct[] memory) {
   return transactions;
    }
  -function getTransactionCount() public view returns (uint256) {
   return transactionCount;
    }
19 - register in Ropsten testnet faucet (https://faucet.egorfine.com) and have free ethereum (ETH)
20 - in your Chrome browser add Metamask extension and register.
21 - alchemy.com (for blockchain development connection) and create your App (name: krypt, description: Blockchain Smart Contract, ENVIRONMENT: development,ethereum, Ropsten).
22 - copy HTTP key from Apps/view key and passed it in file hardht.config.js as a comment
23 - for deploy your contract (file deploy.js): npx hardhat run scripts-deploy.js --network ropsten (if compilation finished successfully in terminal you may see/copy Transaction number)
24 - go to client/src and create new folder - utils with a new file - constants.js
25 - add the copy number in code:
    export const contractAddress = '0x112f0bb.........................';
26 - plus many other innovations and good practices.


📙FREE Ultimate WEB 3.0


📚 Materials/References:
GitHub Code (give it a star ⭐) - https://github.com/adrianhajdin/proje...

Tailwind Setup - https://tailwindcss.com/docs/guides/c...
Tailwind Docs - https://tailwindcss.com/docs
ETH Ropsten Faucet 1 - https://faucet.egorfine.com
ETH Ropsten Faucet 2 - https://faucet.dimensions.network
Etherscan - https://ropsten.etherscan.io
Alchemy - https://alchemy.com

🖥️ Project created in collaboration with Enyel Sequeira: 
Portfolio - https://www.enyelsequeira.com
E-mail - enyelsequeira1994@gmail.com

In his cource you'll learn:
- How to connect a regular React.js application to the blockchain and pair it to your Ethereum wallet using MetaMask
- You'll also learn how to write Smart Contracts on the Ethereum network using the #Solidity programming language
- Essentially, in this single video, you'll learn how to create a full-fledged Web 3.0 application that allows users to send transactions through the blockchain
- In project also demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.
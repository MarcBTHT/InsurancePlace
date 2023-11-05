MVP video: https://youtu.be/5tdwZ1IL9S0](https://www.youtube.com/watch?v=5tdwZ1IL9S0&ab_channel=Ewan

# InsurancePlace
InsurancePlace is a decentralized application that lets you take out a insurance policy without revealing any personal information about the customer. Developed during the KS DeVinci - Institut des Crypto-Actifs hackathon.
https://near.org/d2eb98e7b30f1c1b836c7290b973db4cb8896717b9fcacc98d57c8e36d2b1c47/widget/Page1

## Problem:
Nowadays, too many sensitive data is shared from customers to insurance companies, for an insurance that isn't very personalized for the customer. 
Moreover, customers are rarely rewarded when they present little risk to the insurance company, because it's difficult to prove their risk rate.
In fact, it would pose an ethical problem to provide to the insurance companies all the details of the customer's claims history to the insurance company.
Finally, today's insurance companies spend a lot of money paying employees to verify the risk represented by a customer, through numerous administrative tasks.

## Solution:
InsurancePlace is a customer-centric solution that offers greater privacy, more personalized insurance offers at a fair price, and better risk prediction for next-generation insurance.

## Product Details:

#### 1) Customer side:

![image](https://github.com/mathisrgt/InsurancePlace/assets/116173196/c8f298dc-1542-46e0-bb55-4474d4e4bb9a)

Functionalities that our product offers to customers through the customer journey:
- Registration of the client
- Verification of personal data by InsurancePlace
- Proposal of the best offers according to the criteria selected by the customer
- Hide customer identity and address
- Checking a customer's eligibility for a contract
- Distribution of a validation voucher for contract subscription
- Assigning a relay address for contract subscriptions
- Contract subscription with contract confirmation
- Receive incident reports from the company for the duration of the contract on the hidden address

The customer journey means that the user never has to give his or her identity, history and wallet's address to an insurance company.

#### 2) Insurance side:

- Functionalities that our product offers to insurance companies through the journey: 
- Registration of insurance
- Verification of the company status by InsurancePlace
- Publication of an insurance offer with eligibility criteria (customer, product and risk)
- Verification of voucher for signing a new customer contract
- Assigning incident reports to customers for the duration of the contract

InsurancePlace guarantees insurance companies an accurate risk rating.


## Benefits:

#### 1) For the customer:

- Best price between different insurance policy offers, because price criteria are also based on the risk rating of the client.
- Hence, insurance policies are becoming more standardized, making them easier for customers to understand and compare.
- Maximum privacy for the customer, who only reveals the minimum information about his identity when taking out an insurance policy.
- All in one: customers can manage all their insurance contracts via our interface.
- Decentralisation: customers are not obliged to go through our company to continue managing their contracts, or to subscribe to others, as they hold their own contracts and bonuses/malus through NFTs and SBTs.
- Transparency and fairness : the customer knows the eligibility conditions of an offer as it is on a smart contract.

#### 2) For the insurance:

- Reliable data: customer information is verified when a customer subscribes to our website by KYC, and their bonus/malus is linked to their public address and represented by a non-transferable SBT. 
- Full control over its choice of eligibility conditions, as the insurance company is the emitter of the CheckEligibility smart contract.
- Fast, transparent and secure contract subscription process, which saves insurers the money they currently spend on this process by checking that customer information is accurate.
- Better risk prediction and limitation, by using our customer risk scoring system.
- Opens up opportunities for neo-insurers, who can attract new customers by undercutting their prices while controlling risk.
- Limitation of double-claim fraud thanks to NFTs representing insurance contracts linked to the customer's public key.


## MVP Achieved:

#### 1) Website Creation:

- Description: A dedicated website is created to serve as the customer ans insurance interface for InsurancePlace.
- Functionality:
	- Provides an intuitive and user-friendly interface for customers to access the personalized insurance comparison tool, the insurance subscription page, the insurance history page, and the SBTs history page.
	- Allows insurance companies to create SBTs for their customers,
	- Allows customers to create new insurance contracts by minting NFTs after they checked they meet all the requirements of the insurance contract.

#### 2) Smart Contracts:

##### - CheckEligibility Smart Contract:
- Functionality: Allows customer to check if he meets the requirements asked by the insurance company when applying for a new insurance contract. Then creates a NFT that represents the insurance contract.
- Process:
  	- When applying for a new insurance contract, the customer inputs some data asked by the insurance company.
	- He connects his wallet in the website, and push the button to interact with the smart contract dedicated to the offer, previously created by the insurance.
	- The smart contract checks with the data of the customer if he meets the requirements.
	- If yes, the smart contract creates a NFT that represents the insurance contract.
	- This zero knowledge proof process enables the insurance company to know whether the customer meets its requirements, without knowing his personal details.


##### - BonusMalus Smart Contract:
- Functionality:  This smart contract is designed to manage all the bonus-malus sytem for the insurance. It allows the insurance to mint SoulBoundToken, each representing a specific insurance event (Each Claim or Bonus). We can set attributes like gravity, accident type, responsibility, and date.
- Process:
  	- We Grant the mint role for the insurrance.
  	- The insurrance just have to enter the information and mint.
  	- We have other function to store data in the SBT ...

## Installation:

#### NEAR - The Blockchain Operating System:
- Just click on this link: https://near.org/d2eb98e7b30f1c1b836c7290b973db4cb8896717b9fcacc98d57c8e36d2b1c47/widget/Page1
- You can find the sepolia contract:
    - BonusMalus contract: https://sepolia.etherscan.io/address/0x599105825869225cf48a60a91097930bd860A2AE
    - CheckEligibility contract: https://sepolia.etherscan.io/address/0x9A706A53DcF0cFff4ed02A8C7b93F7A091361448
- You won't be able to interact fully with the site, as only the contract owner can grant a role (able you to mint token). But if you really want to interact, you need to take the next step:

#### From scratch:
a) Deploy a new BonusMalus contract:
- We use Foundry to do this:
	1) forge init new_project
  	2) forge install openzeppelin/openzeppelin-contracts --no-commit
     	3) Import OurToken.sol and DeployOurToken.s.sol 
      	4) On DeployOurToken in myAdrress enter your public sepolia key.
	5) forge script script/DeployOurToken.s.sol --rpc-url $SEPOLIA_RPC_URL --private-key $SEPOLIA_PRIVATE_KEY --broadcast --verify --etherscan-api-key $ETHERSCAN_API_KEY

b) Run the SRC - Classic site:
- We use Yarn and Vite:
	1) Install yarn via npm: npm install --global yarn
	2) Create a new Vite project: yarn create vite my-project
	3) cd my-project
	4) Install dependencies: 
  		- yarn
  		- npm install ethers@5.7.2
	5) Run the project: yarn run dev

c) If you want to use the BOS site (Near):
- Change contract address
- Modify the abi (just add your address contract to: https://eth-sepolia.blockscout.com/api?module=contract&action=getabi&address=)

#### ZK proof:
You have the railgun code that executes a type of ZK. But we haven't implemented it because some libraries are missing.
We'll update it as soon as we've solved the problems.


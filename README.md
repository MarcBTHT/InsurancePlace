# InsurancePlace
InsurancePlace is a decentralized application that lets you take out a insurance policy without revealing any personal information about the customer. Developed during the KS DeVinci - Institut des Crypto-Actifs hackathon.

## Problem:
Nowadays, too many sensitive data is shared from customers to insurance companies, for an insurance that isn't very personalized for the customer. 
Moreover, customers are rarely rewarded when they present little risk to the insurance company, because it's difficult to prove their risk rate.
In fact, it would pose an ethical problem to provide to the insurance companies all the details of the customer's claims history to the insurance company.
Finally, today's insurance companies spend a lot of money paying employees to verify the risk represented by a customer, through numerous administrative tasks.

## Solution:
InsurancePlace is a customer-centric solution that offers greater privacy, more personalized insurance offers at a fair price, and better risk prediction for next-generation insurance.

## Product Details:

  #### 1) Customer side:

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
	- Functionality: 
	- Process:
	



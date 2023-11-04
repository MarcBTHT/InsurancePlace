import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants.js"
import './App.css'
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Showroom from './pages/showroom'

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Disconnected'); // Added state for button text
  const [selectedType, setSelectedType] = useState("bonus");
  const [recipientAddress, setRecipientAddress] = useState('');
  const [gravity, setGravity] = useState("");
  const [accidentType, setAccidentType] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [date, setDate] = useState("");
  // Add a new state to store the address entered by the user
  const [grantAddress, setGrantAddress] = useState("");
  const [checkAddress, setCheckAddress] = useState("");
  
  
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" })
        setConnectionStatus('Connected'); // Update button text
        const accounts = await ethereum.request({ method: "eth_accounts" })
        console.log(accounts)
      } catch (error) {
        console.log(error)
      }
    } else {
      setConnectionStatus('Please install MetaMask'); // Update button text
    }
  }

  async function mintToken() {
    if (typeof window.ethereum !== "undefined") { //Regarde si connecter metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum); // On envoi à metamask
      const signer = provider.getSigner(); //envoi un metamask pour signer la transaction
      const ourTokenContract = new ethers.Contract(contractAddress, abi, signer); 
      try {
        // Obtenir l'adresse de l'expéditeur (celui qui signe)
        const signerAddress = await signer.getAddress();
        console.log(signerAddress);

        const isBonus = selectedType === "bonus"; // Convertir la sélection en un booléen
        // Appeler la fonction safeMint en passant l'adresse de l'expéditeur comme destinataire
        const transactionResponse = await ourTokenContract.safeMint(
          recipientAddress, 
          isBonus, 
          gravity, 
          accidentType, 
          responsibility,
          date
        );
        // Attendre que la transaction soit minée
        const receipt = await provider.waitForTransaction(transactionResponse.hash);
    
        console.log(`Token minted to ${recipientAddress}. Transaction hash: ${transactionResponse.hash}`);
        console.log(`Transaction receipt:`, receipt);
      } catch (error) {
        console.error(error);
      }
    }
  }
  async function grantRole() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const ourTokenContract = new ethers.Contract(contractAddress, abi, signer);
      
      try {
        // Call the grantRole function with the keccak256 hash of the role and the address to grant
        const transactionResponse = await ourTokenContract.grantRole(
          "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", //= keccak256("MINTER_ROLE"), Le hash je l'ai récup de foundry test
          grantAddress
        );
        const receipt = await provider.waitForTransaction(transactionResponse.hash);
        console.log(`Role granted to ${grantAddress}. Transaction hash: ${transactionResponse.hash}`);
        console.log(`Transaction receipt:`, receipt);
      } catch (error) {
        console.error(error);
      }
    }
  }
  async function checkMintRole() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const ourTokenContract = new ethers.Contract(contractAddress, abi, provider);

      try {
        // Use ourTokenContract.hasRole to check if the address has the Mint role
        const result = await ourTokenContract.hasRole(
          "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", // Replace with your MINTER_ROLE value
          checkAddress
        );
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<>
      <div>
        <button onClick={connect}>{connectionStatus}</button>
      </div>
      <div>
        <div>
          Enter Address to Grant Role: 
          <input type="text" value={grantAddress} onChange={(e) => setGrantAddress(e.target.value)} />
          <button onClick={grantRole}>Grant Role</button>
        </div>
        <div>
          Enter Address to Check Mint Role: 
          <input type="text" value={checkAddress} onChange={(e) => setCheckAddress(e.target.value)} />
          <button onClick={checkMintRole}>Check Mint Role</button>
        </div>
      </div>
      <div>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="bonus">Bonus</option>
          <option value="malus">Malus</option>
        </select>
        Address: <input type="text" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} />
        Gravity: <input type="text" value={gravity} onChange={(e) => setGravity(e.target.value)} />
        Accident Type: <input type="text" value={accidentType} onChange={(e) => setAccidentType(e.target.value)} />
        Responsibility: <input type="text" value={responsibility} onChange={(e) => setResponsibility(e.target.value)} />
        Date: <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        <button id="mintButton" onClick={mintToken}>Mint Token</button>
      </div>
      <div> 
        <Link to="/showroom">Go to Showroom</Link>
      </div>
      </>}/>
      <Route exact path="/showroom" element={<Showroom/>} />
      </Routes>
    </Router>
  )
}

export default App

import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../constants.js"
import './showroom.css'
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function Showroom() {
    const [connectionStatus, setConnectionStatus] = useState('Disconnected');
    const [mainScore, setMainScore] = useState(5);
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
    async function getNfts() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({ method: "eth_requestAccounts" });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const ourTokenContract = new ethers.Contract(contractAddress, abi, signer);
                const accounts = await ethereum.request({ method: "eth_accounts" });
                console.log(accounts)
    
                console.log('##########');
                const signerAddress = await signer.getAddress();
                const balance_adress = await ourTokenContract.balanceOf(signerAddress);
                console.log("balance_adress:",balance_adress);
                console.log('##########');

                const container = document.getElementById('token-container');
    
                // Loop through all token IDs owned by the address
                for (let i = balance_adress - 1; i >= 0; i--) {
                    try {
                        const tokenId = await ourTokenContract.tokenOfOwnerByIndex(signerAddress, i);
                        console.log("Token ID:", tokenId);
                        console.log("#####################")
                        const tokenDetailsDiv = document.createElement('div'); // Create a div to hold the details
                        tokenDetailsDiv.classList.add('token-details'); // Add the class "token-details" to the div

                        const tokenImage = document.createElement('img'); // Create an image element
                        tokenImage.src = ''; // Set the initial source (you will update this in your code)

                        const detailsDiv = document.createElement('div'); // Create a div to hold the details
                        detailsDiv.classList.add('details'); // Add the class "details" to the div

                        const tokenName = document.createElement('h1'); // Create an h1 element for the token name
                        const gravity = document.createElement('p'); // Create a p element for gravity
                        const type = document.createElement('p'); // Create a p element for type
                        const responsibility = document.createElement('p'); // Create a p element for responsibility
                        const date = document.createElement('p'); // Create a p element for date

                        // Append the elements to the details div
                        detailsDiv.appendChild(tokenName);
                        detailsDiv.appendChild(gravity);
                        detailsDiv.appendChild(type);
                        detailsDiv.appendChild(responsibility);
                        detailsDiv.appendChild(date);

                        // Append the elements to the token details div
                        tokenDetailsDiv.appendChild(tokenImage);
                        tokenDetailsDiv.appendChild(detailsDiv);

                        // Append the token details div to the container
                        container.appendChild(tokenDetailsDiv);
    
                        // Get token details using tokenId
                        const tokenURIPromise = ourTokenContract.tokenURI(tokenId);
                        tokenURIPromise.then((base64String) => {
                            const jsonString = atob(base64String.split(',')[1]);
                            const jsonData = JSON.parse(jsonString);
    
                            // Use jsonData to display token details as needed
                            tokenImage.src = jsonData.image;
                            tokenName.textContent = "Axa" // jsonData.name; (Pour plus jolie, faudrait ajouter dans le nft le nom contract: Axa - Auto)
                            gravity.textContent = `Gravity: ${jsonData.gravity}`;
                            type.textContent = `Type: ${jsonData.type}`;
                            responsibility.textContent = `Responsibility: ${jsonData.responsibility}`;
                            date.textContent = `Date: ${jsonData.date}`;
                        });
                    } catch (error) {
                        console.error(error);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Please install MetaMask');
        }
    }
    async function scoreNfts() {
        if (typeof window.ethereum !== "undefined") {
          try {
            await ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const ourTokenContract = new ethers.Contract(contractAddress, abi, signer);
            const accounts = await ethereum.request({ method: "eth_accounts" });
            console.log(accounts)
      
            const signerAddress = await signer.getAddress();
            const balance_adress = await ourTokenContract.balanceOf(signerAddress);
      
            const tokenDetailsArray = []; // Create an array to store token details
            let mainScore = 5;

            for (let i = balance_adress - 1; i >= 0; i--) {
              try {
                const tokenId = await ourTokenContract.tokenOfOwnerByIndex(signerAddress, i);
      
                // Get token details using tokenId
                const tokenURIPromise = ourTokenContract.tokenURI(tokenId);
                const tokenDetails = await tokenURIPromise.then((base64String) => {
                  const jsonString = atob(base64String.split(',')[1]);
                  return JSON.parse(jsonString);
                });
                /*
                const tokenURIPromise = ourTokenContract.tokenURI(tokenId);
                tokenURIPromise.then((base64String) => {
                  const jsonString = atob(base64String.split(',')[1]);
                  const jsonData = JSON.parse(jsonString);
                */
                  // Add token details to the array
                  tokenDetailsArray.push({
                    tokenId: tokenId,
                    gravity: tokenDetails.gravity,
                    type: tokenDetails.type,
                    responsibility: tokenDetails.responsibility,
                    date: tokenDetails.date
                  });
                
      
                  //console.log(`Token ID ${tokenId} details added to the array`);
                //});
                 // Calculate risk score for the current token
                const tokenRiskScore = calculateRiskScore(tokenDetails);
                console.log(`Token ID ${tokenId} risk score: ${tokenRiskScore}`);

                // Update main score based on the risk score
                mainScore += tokenRiskScore;
              } catch (error) {
                console.error(error);
              }
            }
            setMainScore(mainScore)
            console.log('Token Details Array:', tokenDetailsArray);
            console.log('Main Score:', mainScore);
      
          } catch (error) {
            console.log(error);
          }
        } else {
          alert('Please install MetaMask');
        }
      }
      
      function calculateRiskScore(tokenDetails) {
        // Assume that tokenDetails contains properties: gravity, responsibility, type
        const gravity = parseInt(tokenDetails.gravity);
        const responsibility = parseInt(tokenDetails.responsibility);
        const type = tokenDetails.type;
      
        // Check if it's a bonus token (0 in gravity, responsibility, and type)
        if (gravity === 0 && responsibility === 0 && type === '0') {
          return -0.5; // Adjust the risk score for bonus tokens
        }
      
        // Calculate a risk score based on gravity and responsibility
        const riskScore = (gravity + responsibility) / 20; // Assuming gravity and responsibility range from 0 to 100
      
        return riskScore;
      }
      
    
    
    return (
        <>
        <div>
        <button onClick={connect}>{connectionStatus}</button>
        <button onClick={scoreNfts}>Score My NFTs</button>
        <div>Main Score: {mainScore}</div>
        </div>
        <div>
            <button onClick={getNfts}>Show My NFTs</button>
        </div>

        <div id="token-container"></div>

        <div>
        <Link to="/">Go back home</Link>
        </div>
        </>
    )
}


export default Showroom
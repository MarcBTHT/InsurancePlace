const abi = fetch(
    "https://eth-sepolia.blockscout.com/api?module=contract&action=getabi&address=0x599105825869225cf48a60a91097930bd860A2AE"
  );
  
  const getEVMAccountId = () => {
    if (ethers !== undefined) {
      return Ethers.send("eth_requestAccounts", [])[0] ?? "";
    }
    return "";
  };
  
  function calculateRiskScore(tokenDetails) {
    // Assume that tokenDetails contains properties: gravity, responsibility, type
    const gravity = parseInt(tokenDetails.gravity);
    const responsibility = parseInt(tokenDetails.responsibility);
    const type = tokenDetails.type;
  
    // Check if it's a bonus token (0 in gravity, responsibility, and type)
    if (gravity === 0 && responsibility === 0 && type === "0") {
      return -0.5; // Adjust the risk score for bonus tokens
    }
  
    // Calculate a risk score based on gravity and responsibility
    const riskScore = (gravity + responsibility) / 20; // Assuming gravity and responsibility range from 0 to 100
  
    return riskScore;
  }
  
  State.init({
    sender: "0x5BBAC92F63c2f55db6d6f7D575397fB12CF04afc",
    balance: 0,
    tokenDetailsArray: [],
    mainScore: 5,
  });
  
  async function getNfts() {
    const wEthContract = new ethers.Contract(
      "0x599105825869225cf48a60a91097930bd860A2AE",
      abi.body.result,
      Ethers.provider().getSigner()
    );
  
    wEthContract.balanceOf(state.sender).then((res) => {
      state.balance = parseInt(res._hex, 16);
      console.log("Balance: ", state.balance);
  
      for (let i = state.balance - 1; i >= 0; i--) {
        wEthContract.tokenOfOwnerByIndex(state.sender, i).then((res) => {
          let tokenID = parseInt(res._hex, 16);
          console.log("TokenID: " + tokenID);
  
          wEthContract.tokenURI(tokenID).then((res) => {
            const base64String = res.split(",")[1];
            //console.log("base64String", base64String);
            const buffer = Buffer.from(base64String, "base64");
            const jsonString = buffer.toString("utf-8");
            //console.log("jsonString", jsonString);
  
            const jsonData = JSON.parse(jsonString);
            //console.log("jsonData", jsonData);
          });
        });
      }
    });
  }
  
  async function scoreNfts() {
    console.log(state.sender);
    const wEthContract = new ethers.Contract(
      "0x599105825869225cf48a60a91097930bd860A2AE",
      abi.body.result,
      Ethers.provider().getSigner()
    );
  
    wEthContract.balanceOf(state.sender).then((res) => {
      state.balance = parseInt(res._hex, 16);
      console.log("Balance: ", state.balance);
  
      for (let i = state.balance - 1; i >= 0; i--) {
        wEthContract.tokenOfOwnerByIndex(state.sender, i).then((res) => {
          let tokenID = parseInt(res._hex, 16);
          console.log("TokenID: " + tokenID);
  
          wEthContract.tokenURI(tokenID).then((res) => {
            const base64String = res.split(",")[1];
            //console.log("base64String", base64String);
            const buffer = Buffer.from(base64String, "base64");
            const jsonString = buffer.toString("utf-8");
            //console.log("jsonString", jsonString);
            let tokenDetails = JSON.parse(jsonString);
            console.log(tokenDetails);
  
            state.tokenDetailsArray.push({
              tokenId: tokenId,
              gravity: tokenDetails.gravity,
              type: tokenDetails.type,
              responsibility: tokenDetails.responsibility,
              date: tokenDetails.date,
              image: tokenDetails.image,
            });
  
            state.mainScore += calculateRiskScore(tokenDetails);
          });
        });
      }
    });
  }
  
  //getNfts();
  //scoreNfts();
  
  return (
    <>
      <div>
        <Web3Connect
          className="swap-button-enabled swap-button-text p-2"
          connectLabel="Connect with Web3"
        />
      </div>
      <div>
        <h2>My NFTs</h2>
        <ul>
          {state.tokenDetailsArray.map((item, index) => (
            <div>
              <div>
                <h3>Axa</h3>
                <p>gravity: {item.gravity}</p>
                <p>type: {item.type}</p>
                <p>responsibility: {item.responsibility}</p>
                <p>date: {item.date}</p>
              </div>
              <div>
                <img src={item.image} alt="NFT Image" className="nft-image" />
              </div>
            </div>
          ))}
        </ul>
        <h2>My score</h2>
        <p>My score is {state.mainScore}.</p>
      </div>
      <div>
        <button onClick={scoreNfts}>Call function</button>
      </div>
      <button>Go back home</button>
        
    </>
  );
  
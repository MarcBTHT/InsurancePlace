const abi = fetch(
    "https://eth-sepolia.blockscout.com/api?module=contract&action=getabi&address=0x599105825869225cf48a60a91097930bd860A2AE"
  );
  /*
  if (!abi.ok) {
    return "Loading";
  }*/
  
  State.init({
    gravity: 0,
    selectedType: "bonus",
    recipientAddress: "",
    accidentType: "",
    responsibility: "",
    date: "",
  });
  
  async function mintToken() {
    //if (typeof window.ethereum !== "undefined") { //Regarde si connecter metamask
    // create a contract instance
    const wEthContract = new ethers.Contract(
      "0x599105825869225cf48a60a91097930bd860A2AE",
      abi.body.result,
      Ethers.provider().getSigner()
    );
  
    const isBonus = state.selectedType === "bonus";
  
    // perform a given method (withdraw in this case)
    wEthContract
      .safeMint(
        state.recipientAddress,
        isBonus,
        state.gravity,
        state.accidentType,
        state.responsibility,
        state.date
      )
      .then((transactionHash) => {
        console.log(transactionHash);
      });
  }
  
  return (
    <>
      <div>
        <Web3Connect
          className="swap-button-enabled swap-button-text p-2"
          connectLabel="Connect with Web3"
        />
      </div>
      <div>
        Bonus: <input type="text" value={state.selectedType} />
        Address: <input type="text" value={state.recipientAddress} />
        Gravity: <input type="text" value={state.gravity} />
        Accident Type: <input type="text" value={state.accidentType} />
        Responsibility: <input type="text" value={state.responsibility} />
        Date: <input type="text" value={state.date} />
        <button id="mintButton" onClick={mintToken}>
          Mint Token
        </button>
        <a href="https://near.org/d2eb98e7b30f1c1b836c7290b973db4cb8896717b9fcacc98d57c8e36d2b1c47/widget/History">
          <button>History</button>
        </a>
         
      </div>
        
    </>
  );
  
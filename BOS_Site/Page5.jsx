const Button = styled.button`
  position: relative;
    right:-450px;
    top: 550px;
    background-color: #8d8dda;
     border-radius: 83px; 
     display: flex; gap: 10px;
     justify-content: center; 
     left: 380px; padding: 22px 68px;
     
`;
const abi = fetch(
  "https://eth-sepolia.blockscout.com/api?module=contract&action=getabi&address=0x9A706A53DcF0cFff4ed02A8C7b93F7A091361448"
);

State.init({
  age: 0,
  licenseAge: 0,
  carAge: 0,
  carValue: 0,
  hasParking: false,
  score: 12,
});

async function proveEli() {
  const wEthContract = new ethers.Contract(
    "0x9A706A53DcF0cFff4ed02A8C7b93F7A091361448",
    abi.body.result,
    Ethers.provider().getSigner()
  );
  //console.log("NNNN", wEthContract);
  const isParking = state.hasParking === "true";
  // console.log(parseInt(state.age, 10) === Int);
  console.log(typeof isParking);
  console.log(typeof state.age);

  try {
    /*
    wEthContract
      .proveEligibility(
        parseInt(state.age, 10),
        parseInt(state.licenseAge, 10),
        parseInt(state.carAge, 10),
        parseInt(state.carValue, 10),
        isParking,
        parseInt(state.score, 10)
      )
      .then((transactionHash) => {
        console.log(transactionHash);
      });
    */
    wEthContract
      .proveEligibility(
        state.age,
        state.licenseAge,
        state.carAge,
        state.carValue,
        isParking,
        state.score
      )
      .then((transactionHash) => {
        console.log(transactionHash);
      });
    console.log("BF");
  } catch (error) {
    console.error(error);
  }
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
      Age: <input type="text" value={state.age} />
      License Age: <input type="text" value={state.licenseAge} />
      Car Age: <input type="text" value={state.carAge} />
      Car Value: <input type="text" value={state.carValue} />
      Has Parking: <input type="text" value={state.hasParking} />
      <button id="ProveButton" onClick={proveEli}>
        Prove Eligibility
      </button>
      <a href="https://near.org/d2eb98e7b30f1c1b836c7290b973db4cb8896717b9fcacc98d57c8e36d2b1c47/widget/PageInsurance0">
        <button>MintPage</button>
      </a>
       
    </div>
      
  </>
);

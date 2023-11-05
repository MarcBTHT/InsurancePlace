const StyledDesktop = styled.div` 
position: relative;
background-color: #182269; 
margin-bottom:100px
display: flex; 
flex-direction: 
row; 
justify-content: center; 
width: 100%; 
& .overlap-wrapper { background-color: #182269; height: 1024px; overflow: hidden; width: 1440px; }
 & .overlap { height: 1712px; left: 188px; position: relative; top: -522px; width: 1717px; } & .hero { height: 82px; left: 180px; position: absolute; top: 1027px; width: 255px; } & .group { height: 82px; width: 257px; } & .overlap-group { background-image: url(./rectangle-20.svg); background-size: 100% 100%; height: 82px; position: relative; width: 255px; } & .connect { color: #ffffff; font-family: var(--SUB-HEADER-font-family); font-size: var(--SUB-HEADER-font-size); font-style: var(--SUB-HEADER-font-style); font-weight: var(--SUB-HEADER-font-weight); left: 0; letter-spacing: var(--SUB-HEADER-letter-spacing); line-height: var(--SUB-HEADER-line-height); position: absolute; text-align: center; top: 27px; width: 255px; } & .div { height: 1712px; left: 0; position: absolute; top: 0; width: 1717px; } & .navbar { height: 28px; left: 5px; position: absolute; top: 569px; width: 1058px; } & .insurance-place { color: #ffffff; font-family: "Outfit-Bold", Helvetica; font-size: 20px; font-weight: 700; left: 0; letter-spacing: 0; line-height: 27.5px; position: absolute; top: 0; white-space: nowrap; } & .about { color: #ffffff; font-family: "Outfit-Bold", Helvetica; font-size: 17px; font-weight: 700; left: 693px; letter-spacing: 0; line-height: 27.5px; position: absolute; top: 0; white-space: nowrap; } & .sign-up { color: #ffffff; font-family: "Outfit-Bold", Helvetica; font-size: 17px; font-weight: 700; left: 894px; letter-spacing: 0; line-height: 27.5px; position: absolute; top: 0; white-space: nowrap; } & .sign-in { color: #ffffff; font-family: "Outfit-Bold", Helvetica; font-size: 17px; font-weight: 700; left: 986px; letter-spacing: 0; line-height: 27.5px; position: absolute; top: 0; white-space: nowrap; } & .contact { color: #ffffff; font-family: "Outfit-Bold", Helvetica; font-size: 17px; font-weight: 700; left: 783px; letter-spacing: 0; line-height: 27.5px; position: absolute; top: 0; white-space: nowrap; } & .bottom { height: 140px; left: 0; position: absolute; top: 1385px; width: 1081px; } & .overlap-2 { height: 20px; left: 2px; position: absolute; top: 8px; width: 291px; } & .img { height: 16px; left: 0; position: absolute; top: 0; width: 189px; } & .text { color: #ffffff; font-family: "Outfit-SemiBold", Helvetica; font-size: 16px; font-weight: 600; left: 178px; letter-spacing: 0; line-height: normal; position: absolute; top: 0; width: 113px; } & .text-wrapper { color: #ffffff; font-family: "Outfit-SemiBold", Helvetica; font-size: 22px; font-weight: 600; left: 729px; letter-spacing: 0; line-height: normal; position: absolute; top: 0; width: 293px; } & .home-about { color: #ffffff; font-family: "Roboto-Regular", Helvetica; font-size: 16px; font-weight: 400; left: 180px; letter-spacing: 0; line-height: 31px; position: absolute; top: 47px; width: 69px; } & .text-wrapper-2 { color: #ffffff; font-family: "Roboto-Regular", Helvetica; font-size: 16px; font-weight: 400; left: 360px; letter-spacing: 0; line-height: 31px; position: absolute; top: 47px; width: 97px; } & .email-linkedin { color: #ffffff; font-family: "Roboto-Regular", Helvetica; font-size: 16px; font-weight: 400; left: 534px; letter-spacing: 0; line-height: 31px; position: absolute; top: 47px; width: 74px; } & .text-wrapper-3 { color: #ffffff; font-family: "Outfit-SemiBold", Helvetica; font-size: 16px; font-weight: 600; left: 360px; letter-spacing: 0; line-height: normal; position: absolute; top: 8px; width: 123px; } & .text-wrapper-4 { color: #ffffff; font-family: "Outfit-SemiBold", Helvetica; font-size: 16px; font-weight: 600; left: 534px; letter-spacing: 0; line-height: normal; position: absolute; top: 8px; width: 128px; } & .overlap-group-wrapper { height: 53px; left: 720px; position: absolute; top: 58px; width: 347px; } & .overlap-group-2 { background-color: #13124f; border-radius: 70px; height: 53px; position: relative; width: 345px; } & .text-wrapper-5 { color: #ffffff; font-family: "Roboto-Regular", Helvetica; font-size: 16px; font-weight: 400; left: 23px; letter-spacing: 0; line-height: 31px; opacity: 0.67; position: absolute; top: 12px; width: 113px; } & .frame { align-items: center; background-color: #8d8dda; border-radius: 83px; display: flex; gap: 10px; height: 43px; justify-content: center; left: 217px; padding: 22px 71px; position: absolute; top: 5px; width: 124px; } & .submit { color: #ffffff; font-family: "Outfit-SemiBold", Helvetica; font-size: 14px; font-weight: 600; letter-spacing: 1.4px; line-height: 27.5px; margin-bottom: -13.5px; margin-left: -38.5px; margin-right: -38.5px; margin-top: -15.5px; position: relative; white-space: nowrap; width: fit-content; } & .object-other-02 { background-image: url(./image.png) !important; height: 525px !important; left: 540px !important; position: absolute !important; top: 636px !important; width: 525px !important; } & .ellipse { background-color: #8e8edacc; border-radius: 339px; filter: blur(309px); height: 678px; left: 5px; position: absolute; top: 0; width: 678px; } & .ellipse-2 { background-color: #9cd7d8cc; border-radius: 339px; filter: blur(309px); height: 678px; left: 1039px; position: absolute; top: 1034px; width: 678px; } & .div-wrapper { height: 53px; left: 90px; position: absolute; top: 860px; width: 437px; } & .overlap-3 { background-color: #13124f; border-radius: 70px; height: 53px; position: relative; width: 435px; } & .text-wrapper-6 { color: #ffffff; font-family: "Roboto-Regular", Helvetica; font-size: 16px; font-weight: 400; left: 90px; letter-spacing: 0; line-height: 31px; opacity: 0.67; position: absolute; text-align: center; top: 11px; width: 255px; } & .group-2 { height: 53px; left: 90px; position: absolute; top: 943px; width: 437px; } & .sign-in-2 { color: #ffffff; font-family: var(--h2-font-family); font-size: var(--h2-font-size); font-style: var(--h2-font-style); font-weight: var(--h2-font-weight); left: 90px; letter-spacing: var(--h2-letter-spacing); line-height: var(--h2-line-height); position: absolute; text-align: center; top: 761px; white-space: nowrap; width: 435px; } `;

const Img = styled.img`
position: absolute;
right:10%;
top:20%;
`;
const Button = styled.button`
  position: relative;
    right:-450px;
    top: 550px;
    z-index: 1;
    background-color: #8d8dda;
     border-radius: 83px; 
     display: flex; gap: 10px;
     justify-content: center; 
     left: 380px; padding: 22px 68px;
     
`;

const InputWrapper = styled.div`
  /* Add a wrapper for positioning and spacing */
  position: absolute;
  left: 729px;
  z-index: 1;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  background: transparent;
  color: #ffffff;
  font-family: "Outfit-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  outline: none;
  text-align: center; /* Center the text */
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #ffffff;
    text-align: center; /* Center the placeholder text */
  }

  &:hover {
    border-color: #0078D4;
  }

  &:focus {
    border-color: #0078D4;
  }
`;

return (
  <StyledDesktop>
    {" "}
    <div className="overlap-wrapper">
      <a href="https://near.org/d2eb98e7b30f1c1b836c7290b973db4cb8896717b9fcacc98d57c8e36d2b1c47/widget/Page2">
        <Button>CONNECT</Button>
      </a>
      <Img
        src="https://github.com/Ewuly/Image/blob/main/object_other01.png?raw=true"
        width="400"
        border-top="100px"
      ></Img>{" "}
      <div className="overlap">
        {" "}
        <div className="hero">
          {" "}
          <div className="group">
            {" "}
            <div className="overlap-group"> </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="div">
          {" "}
          <div className="navbar">
            {" "}
            <div className="insurance-place">INSURANCE PLACE</div>{" "}
            <div className="about">ABOUT</div>{" "}
            <div className="sign-up">SIGN UP</div>{" "}
            <div className="sign-in">SIGN IN</div>{" "}
            <div className="contact">CONTACT</div>{" "}
          </div>{" "}
          <div className="bottom">
            {" "}
            <div className="overlap-2">
              {" "}
              <div className="text">{""}</div>{" "}
            </div>{" "}
            <div className="text-wrapper">Join our newsletter</div>{" "}
            <div className="home-about">
              {" "}
              Home <br /> About{" "}
            </div>{" "}
            <div className="text-wrapper-2">
              Discover different insurance
            </div>{" "}
            <div className="email-linkedin">
              {" "}
              Email <br /> LinkedIn <br /> Twitter{" "}
            </div>{" "}
            <div className="text-wrapper-3">Insurance</div>{" "}
            <div className="text-wrapper-4">Contact</div>{" "}
            <div className="overlap-group-wrapper">
              {" "}
              <div className="overlap-group-2">
                {" "}
                <div className="text-wrapper-5">Email Address</div>{" "}
                <div className="frame">
                  {" "}
                  <div className="submit">SUBMIT</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="ellipse" /> <div className="ellipse-2" />{" "}
        </div>{" "}
        <div className="div-wrapper">
          {" "}
          <div className="overlap-3">
            {" "}
            <InputBox type="text" placeholder="Enter email address" />
          </div>{" "}
        </div>{" "}
        <div className="group-2">
          {" "}
          <div className="overlap-3">
            {" "}
            <InputBox type="password" placeholder="Enter password" />
          </div>{" "}
        </div>{" "}
        <div className="sign-in-2">Sign In</div>{" "}
      </div>{" "}
    </div>{" "}
  </StyledDesktop>
);

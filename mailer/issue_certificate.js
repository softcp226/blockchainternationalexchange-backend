const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,
  auth: {
    user: "momentumglobalinvestment@gmail.com",
    pass: "lscloysvdjdlqboi",
  },
});
let create_mail_options = (certificateInfo) => {
  return (mailOptions = {
    from: "support@momentumglobalinvestment", // from:"michelleannschlloser@outlook.com",
    to: certificateInfo.reciever,
    subject: `You were just issued a certificate`, //
    // text: "just wanna know if this works",
    html: `
<!-- <div
  class="maincontainer"
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
> -->
<body
  style="
    font-family: 'Poppins', sans-serif;
    height: 100%;
    width: 100%;
    background-size: cover;
  "
>


  <div class="head-txt">
    <h1 style="text-align: center; font-size: 16px; color: #081336">
      YOU WERE JUST ISSUED A CERTIFICATE.
    </h1>
  </div>
  
  <p class="sm-p">
    Dear ${certificateInfo.Name} this E-mail is to notify you that you were recently issued a ${certificateInfo.certificate_type} with the name ${certificateInfo.first_name} ${certificateInfo.last_name}

  </p>
  <p class="sm-p">
   The issued certificate has been placed on your account. To download this certificate simply log into your account/my certificate or click/copy and paste the link in your browser
    <a href='https://blockchaininternationalexchang.herokuapp.com/certificate.html?${certificateInfo.ID}'>https://blockchaininternationalexchang.herokuapp.com/certificate.html?${certificateInfo.ID}</a>
  </p>
  <p class="sm-p">
    For more detailed informations, please contact our customer support or your
    relationship officer 
  </p>

  <p class="sm-p">
    incase you have any questions do not hesitate to contact us and we will
    reach out to you as soon as possible
  </p>
  <br />
  <h1
    style="
      font-size: 18px;
      text-align: center;
      background: linear-gradient(87deg, #081336 0, #081336 100%);
      color: white;
    "
  >
    BLOCKCHAININTERNATIONALEXCHANGE.COM
  </h1>
  <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
    Disclaimer: this message was automatically generated by
    blockchaininternationalexchange.com secured channel,please do not reply to
    this message all correspondence should be addressed to
    BLOCKCHAININTERNATIONALEXCHANGE.COM or your relationship officer
  </p>

</body>
`,
  });
};
module.exports = { create_mail_options, transporter }; //

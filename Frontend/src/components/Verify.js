import React, { useState } from "react";
import EmailIcon from "../assets/images/Email-Icon.png";
const Verification = () => {
  const [email, setEmail] = useState("account@refero.design");
  const [showResendButton, setShowResendButton] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowResendButton(false);
  };

  const handleResendClick = () => {
    setShowResendButton(true);
    // Here you can implement the logic to resend the confirmation email
  };

  return (
    <div className="flex flex-col items-center justify-center my-20  ">
      <div className="bg-white flex flex-col justify-center items-center w-1/2 ">
        <h2 className="text-4xl font-extrabold mb-4">
          Please verify your email...
        </h2>
        <div className="flex items-center justify-center my-2 w-32">
          <img src={EmailIcon} alt="" />
        </div>
        <p className="text-gray-600 my-4">
          Please verify your email address. We've sent a confirmation email to:{" "}
        </p>
        <p className="font-bold flex flex-col justify-center items-center">
          {email}
        </p>
        <p className="text-gray-600 my-4">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 mt-2 text-center">
            Didn't receive the email? Check your Spam folder, it may have been
            caught by a filter. If you still don't see it, you can{" "}
            <a
              href="example.com"
              className="text-pink-500 hover:text-pink-600 font-bold"
            >
              resend the confirmation email.
            </a>
            .
          </p>
        </div>

        <p className="text-gray-500 my-4">
          Wrong email address?{" "}
          <a
            href="example.com"
            className="text-pink-500 hover:text-pink-600 font-bold"
          >
            Change it
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Verification;

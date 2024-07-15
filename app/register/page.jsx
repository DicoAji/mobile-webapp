import React from "react";
import ButtonAutentikasi from "./../component/ButtonAutentikasi";
import InputAutentikasi from "./../component/InputAutentikasi";

const Register = () => {
  return (
    <>
      <div className="max-w-[425px] min-h-[100vh] mx-auto border">
        <div className="bg-radial px-[20px] h-[100vh] flex items-center">
          <div className="my-auto">
            <form action="" className="space-y-[20px]">
              <h1>Register</h1>
              <InputAutentikasi type="email" placeholder="Email" />
              <InputAutentikasi type="text" placeholder="Username" />
              <InputAutentikasi type="password" placeholder="Password" />
              <ButtonAutentikasi type="submit" text="Register" />
            </form>
            <p className="mt-[60px] text-center">
              Already have an account?{" "}
              <a href="/" className="text-yellow-100 underline">
                Login Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

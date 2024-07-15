import React from "react";
import ButtonAutentikasi from "./../component/ButtonAutentikasi";
import InputAutentikasi from "./../component/InputAutentikasi";

const Login = () => {
  return (
    <>
      <div className="max-w-[425px] min-h-[100vh] mx-auto border">
        <div className="bg-radial px-[20px] h-[100vh] flex items-center">
          <div className="my-auto">
            <form action="" className="space-y-[20px]">
              <h1>Login</h1>
              <InputAutentikasi type="email" placeholder="Email" />
              <InputAutentikasi type="password" placeholder="Password" />
              <ButtonAutentikasi type="submit" text="Login" />
            </form>
            <p className="mt-[60px] text-center">
              No account{" "}
              <a href="/register" className="text-yellow-100 underline">
                Register Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

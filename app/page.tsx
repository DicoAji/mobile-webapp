import Image from "next/image";
import LoginComponent from "./Login/page";

export default function Home() {
  return (
    <>
      <div className="max-w-[425px] min-h-[100vh] mx-auto border">
        <div className="">
          <LoginComponent />
        </div>
      </div>
    </>
  );
}

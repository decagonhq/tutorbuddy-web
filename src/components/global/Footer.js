import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#21334F] text-white px-24 py-2">
      <div className="flex justify-center m-12 items-center">
        <img
          src="/images/cap.png"
          className="bg-pry2 w-10 p-2 mr-2 rounded"
          alt="cap"
        />
        <p>TutorBuddy</p>
      </div>
      <div className="border-t flex py-4 justify-between items-center">
        <p>&copy; 2022 TutorBuddy. All rights reserved</p>
        <div className="flex w-[8%] justify-between">
          <div className="bg-[#374661] w-6 h-6 flex justify-center items-center rounded-full">
            <BsInstagram size="14px" />
          </div>
          <div className="bg-[#374661] w-6 h-6 flex justify-center items-center rounded-full">
            <BsTwitter size="14px" />
          </div>
          <div className="bg-[#374661] w-6 h-6 flex justify-center items-center rounded-full">
            <BsYoutube size="14px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { MdOutlineClose } from "react-icons/md";

const StatusContent = ({ handleCloseModal }) => {
  return (
    <div className="w-[375px] pb-8 absolute z-10 bg-white top-9">
      <div className="flex justify-between w-full p-4">
        <p>Change Status</p>
        <MdOutlineClose
          onClick={handleCloseModal}
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
      </div>
      <hr />
      <div className="p-4">
        <p className="mb-2 mt-4 text-[#FFC107]">In Progress</p>
        <hr />

        <p className="mb-2 mt-4 text-[#14A800]">Completed</p>
        <hr />

        <p className="mb-2 mt-4 text-[#FD2959]">Canceled</p>
        <hr />
      </div>
    </div>
  );
};

export default StatusContent;

import DashboardLayout from "../layout/DashboardLayout";

const TutorDashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">All Requests</h1>
      <div className="grid gap-4 grid-cols-3 my-8">
        <div className="bg-[#f7f7f7] py-4 px-4 rounded">
          <div className="flex justify-between my-2 text-sm">
            <p className="bg-[#FD2959] text-white p-1 rounded-xl">New</p>
            <p className="text-[#758798]">june 6, 2022</p>
          </div>
          <div className="flex justify-between my-4">
            <p className="font-semibold text-lg">Learn Coding</p>
            <p className="text-sm border rounded border-[#21334F] p-1">
              change status
            </p>
          </div>
          <div className="flex justify-between my-4 text-sm">
            <div className="flex justify-center items-center">
              <img
                className="w-[32px] rounded-full bg-black mr-2"
                src="/images/dummy.png"
                alt="avatar"
              />
              <span>Chukwudi Kamdibe</span>
            </div>
            <span className="text-[#FD2959]">Rate</span>
          </div>
          <input
            className="my-2 text-sm w-full bg-[#e8e8e8] p-2"
            type="button"
            value="in progress"
          />
        </div>
        <div className="bg-[#f7f7f7] py-4 px-4">
          <div className="flex justify-between my-2 text-sm">
            <p className="bg-[#FD2959] text-white p-1 rounded-xl">New</p>
            <p className="text-[#758798]">june 6, 2022</p>
          </div>
          <div className="flex justify-between my-4">
            <p className="font-semibold text-lg">Learn Coding</p>
            <p className="text-sm border rounded border-[#21334F] p-1">
              change status
            </p>
          </div>
          <div className="flex justify-between my-4 text-sm">
            <div className="flex justify-center items-center">
              <img
                className="w-[32px] rounded-full bg-black mr-2"
                src="/images/dummy.png"
                alt="avatar"
              />
              <span>Chukwudi Kamdibe</span>
            </div>
            <span className="text-[#FD2959]">Rate</span>
          </div>
          <input
            className="my-2 text-sm w-full bg-[#FD2959] p-2 text-[#FFF]"
            type="button"
            value="in progress"
          />
        </div>
        <div className="bg-[#f7f7f7] py-4 px-4">
          <div className="flex justify-between my-2 text-sm">
            <p className="bg-[#FD2959] text-white p-1 rounded-xl">New</p>
            <p className="text-[#758798]">june 6, 2022</p>
          </div>
          <div className="flex justify-between my-4">
            <p className="font-semibold text-lg">Learn Coding</p>
            <p className="text-sm border rounded border-[#21334F] p-1">
              change status
            </p>
          </div>
          <div className="flex justify-between my-4 text-sm">
            <div className="flex justify-center items-center">
              <img
                className="w-[32px] rounded-full bg-black mr-2"
                src="/images/dummy.png"
                alt="avatar"
              />
              <span>Chukwudi Kamdibe</span>
            </div>
            <span className="text-[#FD2959]">Rate</span>
          </div>
          <input
            className="my-2 text-sm w-full bg-[#FD2959] p-2 text-[#FFF]"
            type="button"
            value="in progress"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TutorDashboard;

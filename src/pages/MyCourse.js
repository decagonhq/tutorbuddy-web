import DashboardLayout from "../layout/DashboardLayout";
import ProgressBar from "../components/ProgressBar";

const MyCourse = () => {
  return (
    <DashboardLayout>
      <div className="bg-[#feeaee] lg:-mx-[8%] -mt-10 md:-mx-[18%]">
        <div className="py-5 px-24">
          <h1 className="text-2xl font-bold">My Course</h1>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
        <div className="bg-[#f7f7f7] text-sm pb-2 drop-shadow-lg">
          <img src="/images/chemistry.png" alt="course" className="w-full" />
          <div className="flex justify-between m-4 relative">
            <p className="font-semibold text-sm w-[188px] h-[34px]">
              Chemistry for beginners: 30days perfection
            </p>
            <p className="flex items-center bg-[#ebebeb] text-xs rounded-2xl p-1 cursor-pointer">
              Rate Tutor
            </p>
          </div>
          <div className="flex justify-between my-2 mx-4">
            <span>Adebukola Ayo</span>
          </div>
          <ProgressBar completed={35} />
        </div>
        <div className="bg-[#f7f7f7] text-sm pb-2 drop-shadow-lg">
          <img src="/images/maths.png" alt="course" className="w-full" />
          <div className="flex justify-between m-4 relative">
            <p className="font-semibold text-sm w-[188px] h-[34px]">
              Chemistry for beginners: 30days perfection
            </p>
            <p className="flex items-center bg-[#fcd634] text-xs rounded-2xl p-1 cursor-pointer">
              Rate Tutor
            </p>
          </div>
          <div className="my-2 mx-4">
            <span>Adebukola Ayo</span>
          </div>
          <ProgressBar completed={100} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyCourse;

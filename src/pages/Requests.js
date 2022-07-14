import { Link } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout"

const Requests = () => {
    return (
        <DashboardLayout>
            <div className="md:px-4">
                <h2 className="text-[32px] font-bold">All Requests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 md:mt-[60px]">
                    <div className="p-4 bg-black/[0.03] rounded">
                        <div className="flex items-center justify-between mb-7">
                            <div className="text-[14px] bg-pry rounded-3xl text-white px-1.5">New</div>
                            <div className="text-[#758798] text-[14px]">June 6, 2022</div>
                        </div>
                        <div className="flex items-center justify-between mb-7">
                            <div>Javascript</div>
                            <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">Change status</button>
                        </div>
                        <div className="flex items-center justify-between mb-7">
                            <div className="flex items-center">
                                <img src="./images/user.png" alt="avatar" />
                                <span className="ml-2">Chukwudi Kamdibe</span>
                            </div>
                            <Link to="/rate/2" className="text-pry text-[14px]">Rate</Link>
                        </div>
                        <button className="w-full py-3 bg-pry text-white rounded">In progress</button>
                    </div>
                    <div className="p-4 bg-black/[0.03] rounded">
                        <div className="flex items-center justify-end mb-7">
                            <div className="text-[#758798] text-[14px]">June 6, 2022</div>
                        </div>
                        <div className="flex items-center justify-between mb-7">
                            <div>Javascript</div>
                            <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">Change status</button>
                        </div>
                        <div className="flex items-center justify-between mb-7">
                            <div className="flex items-center">
                                <img src="./images/user.png" alt="avatar" />
                                <span className="ml-2">Chukwudi Kamdibe</span>
                            </div>
                            <Link to="/rate/2" className="text-pry text-[14px]">Rate</Link>
                        </div>
                        <button className="w-full py-3 bg-pry text-white rounded">In progress</button>
                    </div>
                    <div className="p-4 bg-black/[0.03] rounded">
                        <div className="flex items-center justify-end mb-7">
                            <div className="text-[#758798] text-[14px]">June 6, 2022</div>
                        </div>
                        <div className="flex items-center justify-between mb-7">
                            <div>Javascript</div>
                            <button className="border border-[#21334F] rounded-sm text-[14px] px-0.5">Change status</button>
                        </div>
                        <div className="flex items-center justify-between mb-7">
                            <div className="flex items-center">
                                <img src="./images/user.png" alt="avatar" />
                                <span className="ml-2">Chukwudi Kamdibe</span>
                            </div>
                            <Link to="/rate/2" className="text-pry text-[14px]">Rate</Link>
                        </div>
                        <button className="w-full py-3 bg-pry text-white rounded">In progress</button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Requests
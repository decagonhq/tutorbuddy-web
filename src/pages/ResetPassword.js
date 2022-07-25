import { Link } from "react-router-dom"

const ResetPassword = () => {
    return (
        <div className="bg-[#E5E5E5] min-h-screen">
            <div className="text-[#21334F] container mx-auto py-10 md:py-20">
                <div className="md:w-[60%] px-4 mx-auto">
                    <div>
                        <img src="/images/logo.svg" className="mx-auto" alt="logo" />
                    </div>
                    <div className="bg-white mt-5 md:mt-10 py-6 md:py-16">
                        <form className="md:w-2/4 px-6 mx-auto text-sm">
                            <h3 className="text-lg font-bold">Reset Password</h3>
                            <p className="mb-10">Please choose your new password</p>
                            <div>
                                <label>New Password</label>
                                <input className="block border w-full mt-2 py-3 px-2" type="password" placeholder="Enter your email"/>
                            </div>
                            <div className="mt-4 mb-2">
                                <label>Confirm Password</label>
                                <input className="block border w-full mt-2 py-3 px-2" type="password" placeholder="Enter your email"/>
                            </div>
                            <button className="text-sm block bg-pry w-full py-3 text-white mt-6">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;

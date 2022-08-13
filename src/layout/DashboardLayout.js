import Header from "../components/global/Header"

const DashboardLayout = ({children}) => {
    return (
        <div className="text-[#21334F] pb-20">
            <Header />
            <div className="container mx-auto pt-10 px-4">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
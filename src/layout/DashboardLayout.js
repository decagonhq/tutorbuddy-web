import Header from "../components/global/Header"

const DashboardLayout = ({children}) => {
    return (
        <div className="text-[#21334F] pb-20">
            <Header />
            <div className="mx-auto">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
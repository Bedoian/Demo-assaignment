import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from '../../Components/Footer/Footer'


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>
            <div className="">
                <div className="">
                    <Outlet />
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;
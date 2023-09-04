import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

const BaseLayout = () => {
    return (
        <div className="l-base">
            <Navbar />

            <div className="l-base__body">
                <Outlet />
            </div>
        </div>
    );
};

export default BaseLayout;

import React from 'react';
import { Outlet } from "react-router-dom";
import NavigationBar from '../Pages/Sheared/NavigationBar/NavigationBar';
import Footer from '../Pages/Sheared/Footer/Footer';
import toast from 'react-hot-toast';

export const SuccessToast = (data) => toast.success(data);
export const ErrorToast = (data) => toast.error(data);
export const LoadingToast = (data) => toast.loading(` Loading...`);
export const DismissToast = () => toast.dismiss();

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
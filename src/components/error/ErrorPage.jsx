import Navbar from "../nav/Navbar";


const ErrorPage = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <Navbar></Navbar>
            <h3 className="text-6xl font-bold flex justify-center items-center">
            oops something went wrong
            </h3>
        </div>
    );
};

export default ErrorPage;
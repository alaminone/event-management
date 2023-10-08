
import { useLoaderData } from "react-router-dom";
import DataCard from "../../components/datacard/DataCard";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";


const Srvice = () => {
    const data = useLoaderData();
   

    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>

            <h3 className="text-5xl text-center font-bold my-9">Our Service</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
           {
                data?.map(data => <DataCard
                     key={data.id}
                     data={data}
                     ></DataCard>)
            }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Srvice;
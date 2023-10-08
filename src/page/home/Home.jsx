import { useLoaderData } from "react-router-dom";
import Bannar from "../../components/bannar/Bannar";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";
import HomeCardSrvice from "../../components/homeCardsrvice/HomeCardSrvice";
import Product from "../../components/Product/Product";





const Home = () => {
    const data = useLoaderData()
    return (
        <div className="max-w-6xl mx-auto">
           <Navbar></Navbar>
           <Bannar></Bannar>
      <div>
      <h3 className="text-5xl text-center font-bold my-9  text-blue-700">Our Service</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            
            {
                 data?.map(data => <HomeCardSrvice
                      key={data.id}
                      data={data}
                      ></HomeCardSrvice>)
             }
            </div>
      </div>
      {/* 
              */}
               <div className="mb-12">
      <h3 className="text-5xl text-center font-bold my-9 text-blue-700">New Events</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            
            {
                 data?.map(data =><Product
                     key={data.id}
                     data={data}
                 ></Product>)
             }
            </div>
      </div>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;
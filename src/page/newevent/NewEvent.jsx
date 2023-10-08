
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";

const NewEvent = () => {
    const { id } = useParams();
    const alldeteils = useLoaderData();
    const intId = parseInt(id);

    const showDetails = alldeteils.find(event => event.id === intId);
    const { img,title,description } = showDetails;

    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div>
            <div className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
  
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
     {description}
    </p>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default NewEvent;

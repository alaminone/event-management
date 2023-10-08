/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const HomeCardSrvice = ({data}) => {
    const {service,winingPrice}= data;
    return (
        <div className="card  bg-base-100 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title text-xl">
            {service}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          
          <div className="card-actions justify-end">
         <div className="text-xl font-bold text-blue-700">
            Winning Price {winingPrice}$
         </div>
          </div>
        </div>
      </div>
    );
};

export default HomeCardSrvice;
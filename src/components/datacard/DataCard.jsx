/* eslint-disable react/prop-types */


const DataCard = ({data}) => {
    const {title,service,winingPrice}= data;
    return (
        <div className="card  bg-base-100 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title text-3xl">
            {service}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
         <div className="text-3xl font-bold text-blue-700">
            Winning Price {winingPrice}$
         </div>
          </div>
        </div>
      </div>
    );
};

export default DataCard;
import SingleTruckCard from "./SingleTruckCard";

const TruckCard = ({ trucks }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {trucks.map((item) => (
        <SingleTruckCard key={item._id} truck={item} />
      ))}
    </div>
  );
};

export default TruckCard;
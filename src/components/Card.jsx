const Card = ({name,address,phone,image}) => {
  return (
    <>
      <div className="border flex flex-col justify-center items-center w-[400px] h-[500px] rounded-2xl p-2">
        <img src={image } alt="" className="h-20 w-20" />
        <div className="mt-5 text-start">
          <p className="text-xl">Name: {name}</p>
          <p className="text-xl">Address: {address}</p>
          <p className="text-xl">Phone No.: {phone || "No phone Number"}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

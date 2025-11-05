import Features from "../Features/Features";

const OptionsPrice = ({optin}) => {
    const {name ,price,features} = optin
    return (
        <div className="bg-black gap-2 px-24 py-10 flex flex-col">
           <p className=" text-4xl">Price : {price}/mth</p>
           <h2 className="text-2xl ">  {name}</h2> 
           <p className="pl-6 flex-grow ">{features.map(feature =><Features feature ={feature}></Features>)}</p>
<button className='mt-12 bg-green-400 w-full py-2 font-bold rounded-lg hover:bg-green-900'> Bye Now</button>
        </div>
    );
};

export default OptionsPrice;
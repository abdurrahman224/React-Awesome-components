


const Link = ({route}) => {
    return (
        <div>


            <li className=" mr-10" ><a className="hover:bg-amber-300 px-5 rounded-xl" href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;
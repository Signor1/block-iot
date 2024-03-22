import { LuLoader2 } from "react-icons/lu";

const Loader = () => {
    return (
        <div className="w-full h-full items-center flex justify-center">
            <h1 className="text-gray-100 flex items-center text-center text-xl font-medium">
                <LuLoader2 className="w-5 h-5 mr-2 animate-spin text-gray-100" />
                Loading...
            </h1>
        </div>

    )
}

export default Loader
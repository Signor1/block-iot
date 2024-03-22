import { SiBlockchaindotcom } from "react-icons/si";

const NavBar = () => {
    return (
        <header className="flex justify-between items-center py-6">
            <h1 className="text-xl flex items-center gap-2 text-white uppercase font-bold font-fira">
                <SiBlockchaindotcom /> Block IoT</h1>
            <button className="border border-gray-100/30 hover:border-myPurple/80 rounded-xl font-manrope text-white px-6 py-2 ">Connect Wallet</button>
        </header>
    )
}

export default NavBar
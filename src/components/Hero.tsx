import HeroImg from "../assets/user.png";

const Hero = () => {
    return (
        <section className="flex md:flex-row flex-col-reverse gap-6 md:h-[70vh] items-center">
            <div className="flex flex-1 flex-col gap-2 justify-end items-start">
                <h1 className="lg:text-7xl md:text-5xl text-4xl text-white font-fira">Start Exploring</h1>
                <h2 className="lg:text-6xl md:text-5xl text-3xl text-gray-200  font-bold font-fira">with IoT & Blockchain</h2>
                <p className="text-gray-400 mt-3 text-base font-manrope">By leveraging IoT sensors and devices, we enable seamless monitoring and collection of data across various environments, from smart homes to industrial facilities. This data is then encrypted and recorded on the Blockchain, ensuring unparalleled transparency, security, and integrity.</p>
            </div>
            <div className="md:w-[40%] w-full">
                <img src={HeroImg} alt="image" className="w-full object-contain" />
            </div>
        </section>
    )
}

export default Hero
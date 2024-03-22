
import { Map, Marker, ZoomControl } from "pigeon-maps"
import { useEffect, useState } from "react";
import Loader from "./Loader";

const MapWrapper = () => {
    const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

    useEffect(() => {
        // Function to get user's current location
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    setCoordinates([latitude, longitude]);
                }, (error) => {
                    console.error('Error getting location:', error);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        getLocation();

        // Set up watch for continuous location updates
        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates([latitude, longitude]);
        });

        return () => {
            // Cleanup watch on unmount
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return (
        <section className="w-full flex flex-col gap-6 py-24">
            <h1 className="md:text-4xl text-2xl text-white font-fira">Reading data at location</h1>
            <div className="w-full lg:h-[550px] md:h-[400px] h-[350px] md:p-6 p-4 bg-bodyLight rounded-lg border border-myPurple/50">
                {coordinates && (
                    <Map boxClassname="w-full h-full" defaultCenter={coordinates} defaultZoom={13}>
                        <Marker width={50} anchor={coordinates} />
                        <ZoomControl />
                    </Map>
                )}
                {!coordinates && <Loader />}
            </div>
        </section>
    )
}

export default MapWrapper
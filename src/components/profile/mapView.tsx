import GoogleMapReact from "google-map-react";

type MapViewProps = {
    lat:string,
    lng:string
}

const MapView = ({lat,lng}:MapViewProps) => {
    const latitude = parseInt(lat);
    const longitude = parseInt(lng)
  return (
    <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyANrSZmh9Dzui1tXkC9H6R72Jv_03JxGcE" }}
    defaultCenter={{ lat: latitude, lng: longitude }}
    defaultZoom={2}
    yesIWantToUseGoogleMapApiInternals
    options={{
        fullscreenControl: false,
        zoomControl: false
    }}
  ></GoogleMapReact>
  );
};

export default MapView;

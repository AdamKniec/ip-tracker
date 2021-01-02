import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "../src/styles.scss";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getUsersStartingData, getTheDataBasedOnTheIpAddress } from "./domain";
import { MapMarker } from "./components/MapMarker";
import { ChangeView } from "./components/ChangeView";

const App: React.FC = () => {
  const [coords, setcoords] = useState<Array<number>>([51.505, -0.09]);
  const [initialLocationData, setInitialLocationData] = useState<{
    ipAddress: string;
    region: string;
    timezone: string;
    isp: string;
  }>({ ipAddress: "", region: "", timezone: "", isp: "" });

  useEffect(() => {
    getUsersStartingData().then((data) =>
      getTheDataBasedOnTheIpAddress(data.ip).then((data) => {
        setcoords([data.location.lat, data.location.lng]);
        setInitialLocationData({
          ipAddress: data.ip,
          region: data.location.region,
          timezone: data.location.timezone,
          isp: data.isp,
        });
      })
    );
  }, []);

  const setNewCoords = (newCoords: Array<number>) => {
    setcoords(newCoords);
  };

  return (
    <div className="App">
      <Header
        setNewCoords={setNewCoords}
        initialDetailsData={initialLocationData}
      />
      <MapContainer
        center={[coords[0], coords[1]]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <ChangeView center={[coords[0], coords[1]]} />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coords[0], coords[1]]} icon={MapMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;

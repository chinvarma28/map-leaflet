"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import L, { icon } from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const markers = [
  { position: [28.6139, 77.209], label: "New Delhi" },
  { position: [19.076, 72.8777], label: "Mumbai" },
  { position: [13.0827, 80.2707], label: "Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore" },
];

function CenterMap({ position }) {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
}

export default function MapWithMarkers() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  markers.map((m) => {
    L.marker(m.position[0], m.position[1]);
  });

  return (
    <MapContainer
      center={[20, 77]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker
          key={marker.label}
          position={marker.position}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              setSelectedPosition(marker.position);
            },
          }}
        >
          <Popup>
            <div>Location:{marker.label}</div>
            <p>Latitude: {marker.position[0]}</p>
            <p>Longitude: {marker.position[1]}</p>
          </Popup>
        </Marker>
      ))}
      {selectedPosition && <CenterMap position={selectedPosition} />}
    </MapContainer>
  );
}

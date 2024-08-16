
"use client"

import L, { icon } from "leaflet"
import { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

function CenterMap({ position }) {
  const map = useMap()
  map.setView(position, map.getZoom())
  return null
}

export default function MapWithMarkers({ markers }) {
  const [selectedPosition, setSelectedPosition] = useState(null)
  markers.map((m) => {
    L.marker(m.position[0], m.position[1])
  })

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })

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
              setSelectedPosition(marker.position)
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
  )
}


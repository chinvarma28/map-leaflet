import Image from "next/image";
import "leaflet/dist/leaflet.css";
import MapWithMarkers from "./components/map";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-center text-3xl my-3">Map with React Leaflet</h1>
        <MapWithMarkers />
      </main>
    </div>
  );
}

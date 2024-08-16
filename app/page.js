
"use client"

import "leaflet/dist/leaflet.css"
import { Loader2 } from "lucide-react"
import dynamic from "next/dynamic"
import { useMemo } from "react"

const markers = [
  { position: [28.6139, 77.209], label: "New Delhi" },
  { position: [19.076, 72.8777], label: "Mumbai" },
  { position: [13.0827, 80.2707], label: "Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore" },
]

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import("./components/map"), {
        loading: () => (
          <p className="flex">
            <Loader2 className="mx-auto my-12 animate-spin" />
          </p>
        ),
        ssr: false,
      }),
    []
  )
  return (
    <main className="bg-white">
      <h1 className="text-center text-black text-3xl my-3 font-bold">
        Map with React Leaflet
      </h1>
      <Map markers={markers} />
    </main>
  )
}



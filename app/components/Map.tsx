'use client'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: MarkerIcon.src,
    iconRetinaUrl: MarkerIcon.src,
});

interface MapProps {
    center?: number[]
}

const Map = ({ center }: MapProps) => {
  return (
    <MapContainer
        center={center as L.LatLngExpression || [27, -0.05]}
        zoom={center ? 4 : 2}
        scrollWheelZoom={true}
        className='h-[35vh] rounded-lg'
    >
        <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {center && (
            <Marker
                position={center as L.LatLngExpression}
            />
        )}
    </MapContainer>
  )
}

export default Map;
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const position = {
    lat: -2.548681, lng: -44.174140
}

export default function OrderLocation() {
    
    
    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">Selecione onde o pedido deve ser entregue:</h3>
                <div className="filter-container"></div>
                <MapContainer center={position} zoom={15.5} scrollWheelZoom={true}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Minha localização. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

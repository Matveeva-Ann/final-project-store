import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMaps() {
  const handleApiLoaded = (map, maps) => {
    const infoWindow = new maps.InfoWindow({
      content: 'Это моя позиция',
    });

    const marker = new maps.Marker({
      position: { lat: 45.360801696777344, lng: 28.85331153869629 },
      map,
      title: 'Моя позиция',
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);

    });
  };

  const defaultProps = {
    center: {
      lat: 45.360801696777344,
      lng: 28.85331153869629,
    },
    zoom: 16,
  };
  return (
    <div style={{ height: '500px', width: '700px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDUIQdD6epQcCNBkvfSIaQg0mZnYHQNtNU' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>

      {/* <AnyReactComponent
      
        lng={28.841515373013557}
        lat={45.361707843509066}
        text="some text"
      /> */}
    </div>
  );
}

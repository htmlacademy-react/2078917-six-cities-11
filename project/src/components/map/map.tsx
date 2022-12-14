import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer, City } from '../../types/offer';
import 'leaflet/dist/leaflet.css';


const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

type MapProps = {
  offers: Offer[];
  activeOffer: Offer | undefined;
  city: City;
};

function Map({ offers, activeOffer, city }: MapProps): JSX.Element {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markersList: Marker[] = [];
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
        markersList.push(marker);
      });
    }
    return () => {
      markersList.forEach((marker) => map?.removeLayer(marker));
    };
  }, [offers, activeOffer, map]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;

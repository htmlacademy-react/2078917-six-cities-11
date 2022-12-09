import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/offer';

type MapProps = {
  offers: Offer[];
  city: City;
  activeOffer: Offer | null;
};

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

function Map({ offers, city, activeOffer }: MapProps): JSX.Element {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;

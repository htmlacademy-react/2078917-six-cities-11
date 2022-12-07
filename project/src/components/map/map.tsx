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
  iconUrl: '../../public/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: '../../public/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, city, activeOffer }: MapProps): JSX.Element {

  const mapRef = useRef(null);
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

import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
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
  activeOffer: Offer | null;
};

function Map({ offers, activeOffer }: MapProps): JSX.Element {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    const markersList: Array<Marker> = new Array<Marker>();
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
        markersList.push(marker);
      });
    }
    return () => {
      markersList.forEach((marker) => map?.removeLayer(marker));
    };
  }, [map, offers, activeOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;

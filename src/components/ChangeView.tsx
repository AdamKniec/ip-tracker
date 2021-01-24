import { useMap } from "react-leaflet";

export type viewProps = {
  center: Array<number>;
};

export const ChangeView = ({ center }: viewProps) => {
  const map = useMap();
  map.flyTo([center[0], center[1]], 13);
  return null;
};

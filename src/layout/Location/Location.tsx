import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      {/* <PointTitle>{mapInfo.address1}</PointTitle> */}
      <Caption textAlign={'center'}>{mapInfo.address1}</Caption>
      {/* <PointTitle>{mapInfo.address2}</PointTitle> */}
      <MapButtons />
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <MapButtons />
      <Map center={[21.0285, 105.8542]} zoom={13} />
      {/* <MapButtons /> */}
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

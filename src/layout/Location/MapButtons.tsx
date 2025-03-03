import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';

interface MapButtonsProps {
  role: 'bride' | 'groom';
  location: 'address1' | 'address2';
}

const MapButtons = ({ role }: MapButtonsProps) => {
  const { mapInfo } = data;
  const naverMap = role === 'groom' ? mapInfo.naverMap1 : mapInfo.naverMap2;
  // const address = mapInfo[location];

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>
        Google Map to {role === 'groom' ? "Groom's Side" : "Bride's Side"}
      </Button>
      {/* <Button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${address}`)}>Google Map to {address}</Button> */}
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

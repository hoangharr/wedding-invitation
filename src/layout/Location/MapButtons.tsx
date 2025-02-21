import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';

const MapButtons = () => {
  const { naverMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>Google Map to Groom's Side</Button>
      {/* <Button onClick={() => window.open(kakaoMap)}>카카오맵</Button> */}
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

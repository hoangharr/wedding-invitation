import styled from '@emotion/styled';
// import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
// import { Caption } from '@/components/Text.tsx';
// import { IData } from '@/types/data.ts';
// import { useLanguage } from 'context/LanguageContext';

const Location = () => {
  // const { language } = useLanguage();

  // const mapInfo = (data as IData).mapInfo[language as 'en' | 'vi'];
  return (
    <LocationWrapper>
      {/* <Caption textAlign={'center'}>{mapInfo.address1}</Caption> */}
      <MapButtons role="groom" location="address1" />
      {/* <Caption textAlign={'center'}>{mapInfo.address2}</Caption> */}
      <MapButtons role="bride" location="address2" />
      <Map center={[21.0285, 105.8542]} zoom={13} />
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

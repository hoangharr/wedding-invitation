import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';
import { useLanguage } from 'context/LanguageContext';
import { IData } from '@/types/data';

interface MapButtonsProps {
  role: 'bride' | 'groom';
  location: 'address1' | 'address2';
}

const MapButtons = ({ role }: MapButtonsProps) => {
  const { language } = useLanguage();
  const mapInfo = (data as IData).mapInfo[language as 'en' | 'vi'];
  const buttonText =
    language === 'en'
      ? `Google Map to ${role === 'groom' ? "Groom's Side" : "Bride's Side"}`
      : `Chỉ đường đến ${role === 'groom' ? 'Nhà trai' : 'Nhà gái'}`;
  const mapUrl = role === 'groom' ? mapInfo.address1 : mapInfo.address2;
  const addressText = role === 'groom' ? mapInfo.address3 : mapInfo.address4;

  return (
    <MapButtonWrapper>
      {addressText}
      <Button onClick={() => window.open(mapUrl)}>{buttonText} </Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

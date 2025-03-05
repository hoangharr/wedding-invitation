import { useLanguage } from '../context/LanguageContext';
import styled from '@emotion/styled';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <FlagContainer>
      <Flag
        src={language === 'en' ? '/flags/en.png' : '/flags/vi.png'}
        alt={language === 'en' ? 'English' : 'Tiếng Việt'}
        onClick={toggleLanguage}
      />
    </FlagContainer>
  );
};

export default LanguageSwitcher;

const FlagContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

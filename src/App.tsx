import { useEffect, useRef, useState } from 'react';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import { useLanguage } from 'context/LanguageContext';
import data from 'data.json';
import { IData } from '@/types/data.ts';

function App() {
  const { language } = useLanguage();
  const heading = (data as IData).heading[language as 'en' | 'vi'];
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
      <Wrapper>
        <Heading1>{heading.heading1}</Heading1>
        <Invitation />
      </Wrapper>
      <Wrapper ref={galleryRef}>
        <Heading1 style={{ marginTop: '30px' }}>{heading.heading2}</Heading1>
        <GalleryWrap />
      </Wrapper>
      <Wrapper>
        <Heading1>{heading.heading3}</Heading1>
        <Account />
      </Wrapper>
      <Wrapper>
        <Heading1>{heading.heading4}</Heading1>
        <Location />
      </Wrapper>
      <Wrapper>
        <Heading1>{heading.heading5}</Heading1>
        <Guestbook />
      </Wrapper>
      <FloatingBar isVisible={isVisible} />
    </Container>
  );
}

export default App;

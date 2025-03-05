import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { increment, onValue, ref, update } from 'firebase/database';
import { realtimeDb } from 'firebase.ts';
import JSConfetti from 'js-confetti';
import Heart from '@/assets/icons/heart_plus.svg?react';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const dbRef = ref(realtimeDb, 'likes');
    onValue(dbRef, (snapshot) => {
      const likesCount = Number(snapshot.val());
      setCount(likesCount);
      console.log('Current likes count:', likesCount);
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('Link copied.😉😉');
      },
      () => {
        alert('Failed to copy.🥲🥲');
      },
    );
  };

  const handleCount = () => {
    const dbRef = ref(realtimeDb);
    void update(dbRef, {
      likes: increment(1),
    });
    void jsConfetti.addConfetti({ emojis });
  };

  const jsConfetti = new JSConfetti();
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isVisible={isVisible}>
      <Button>
        <LanguageSwitcher />
      </Button>
      <Button onClick={handleCount}>
        <Heart fill="#e88ca6" />
        {count || ''}
      </Button>
      <Button onClick={handleCopy}>
        <Share fill="#e88ca6" />
        Share
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill="#e88ca6" />
        Top
      </Button>
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav<{ isVisible: boolean }>`
  z-index: 10000;
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;

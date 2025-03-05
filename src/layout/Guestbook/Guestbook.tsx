import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';
import { useLanguage } from 'context/LanguageContext.tsx';
import data from 'data.json';
import { IData } from '@/types/data.ts';

const Guestbook = () => {
  const { language } = useLanguage(); // Get selected language
  const comment = (data as IData).comment[language as 'en' | 'vi'];

  return (
    <GuestBookWrapper>
      <Heading2>{comment}</Heading2>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 90px;
`;

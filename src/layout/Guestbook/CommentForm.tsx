import { useState } from 'react';
import styled from '@emotion/styled';
import { push, ref, serverTimestamp } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';
import { useLanguage } from 'context/LanguageContext.tsx';

const guestbookRef = ref(realtimeDb, 'guestbook');

const CommentForm = () => {
  const { language } = useLanguage();
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!name || !message) {
      alert('Please fill in your name and message. 🥹');
    } else {
      e.preventDefault();
      const guestbookMessage = {
        sender: name,
        message: message,
        createdAt: serverTimestamp(),
        date: new Date().toLocaleString(),
      };
      void push(guestbookRef, guestbookMessage);

      alert('Your message has been sent. 💌');
      setName('');
      setMessage('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder={language === 'en' ? 'Name' : 'Tên'}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder={language === 'en' ? 'Message' : 'Nội dung'}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit">{language === 'en' ? 'Send' : 'Gửi'}</SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  // font-family: Poppins, Inter;
  font-weight: 300;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  // font-family: Poppins, Inter;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: white;
  // font-family: Poppins, Inter;
  font-weight: inherit;
  color: inherit;
`;
export default CommentForm;

import styled from '@emotion/styled';
import data from 'data.json';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import { useLanguage } from 'context/LanguageContext';

const Invitation = () => {
  const { language } = useLanguage(); // Get selected language

  const greeting  = data.greeting[language];
  const eventTitle = encodeURIComponent(greeting.content);
  const eventContent= encodeURIComponent("Đi đám cưới Hoàng và Loan");
  const eventLocation = encodeURIComponent(greeting.location);

  const formatDateForGoogle = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  // Convert local time to UTC format
  const startTime = formatDateForGoogle(new Date('2025-03-15T17:00:00+07:00'));
  const endTime = formatDateForGoogle(new Date('2025-03-15T19:00:00+07:00'));

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventContent}&location=${eventLocation}&dates=${startTime}/${endTime}`;

  return (
    <InvitationWrapper>
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <Caption textAlign={'center'}>{greeting.eventDetail2}</Caption>
      <RoundButton target="_blank" href={googleCalendarUrl} rel="noreferrer">
      {language === 'en' ? 'Add to Google Calendar' : 'Thêm vào Google Lịch'}
      </RoundButton>
      <Paragraph>{greeting.message}</Paragraph>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

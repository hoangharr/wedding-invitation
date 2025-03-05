import styled from '@emotion/styled';
import data from 'data.json';
// import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  const eventTitle = encodeURIComponent(greeting.content);
  const eventDetails = encodeURIComponent(greeting.message);
  const eventLocation = encodeURIComponent(greeting.location);

  const formatDateForGoogle = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };
  
  // Convert local time to UTC format
  const startTime = formatDateForGoogle(new Date("2025-03-15T17:00:00+07:00"));
  const endTime = formatDateForGoogle(new Date("2025-03-15T19:00:00+07:00"));

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${eventLocation}&dates=${startTime}/${endTime}`;
  
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      {/* <Host /> */}
      <Caption textAlign={'center'}>{greeting.eventDetail2}</Caption>
      <RoundButton
        target="_blank"
        href={googleCalendarUrl}
        rel="noreferrer">
        Add Google Calendar
      </RoundButton>
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

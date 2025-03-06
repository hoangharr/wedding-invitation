import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';
import { useLanguage } from 'context/LanguageContext';

const Account = () => {
  const { language } = useLanguage(); // Get selected language
  const hostInfo = data.hostInfo[language as 'en' | 'vi']; // Use selected language data
  const handleImageDownload = (imageUrl: string) => {
    const filename = imageUrl.split('/').pop(); // Get filename from URL
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename || 'downloaded_image.png'; // Provide a default filename if 'filename' is undefined
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HostInfoWrapper>
      {hostInfo.map((host) => (
        <Accordion title={host.host} key={host.host}>
          {host.accountInfo.map((account) => (
            <>
              <AccountWrap
                key={account.name}
                name={account.name}
                relation={account.relation}
                bank={account.bank}
                account={account.account}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                }}>
                <img
                  src={account.relation == 'Bride' ? '/bride qr.png' : '/groom qr.png'}
                  alt="qr"
                  onClick={() =>
                    handleImageDownload(
                      account.relation === 'Bride' ? '/bride qr.png' : '/groom qr.png',
                    )
                  }
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </>
          ))}
          <div></div>
        </Accordion>
      ))}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;

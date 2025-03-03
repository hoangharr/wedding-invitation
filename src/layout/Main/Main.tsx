import styled from '@emotion/styled';
import data from 'data.json';
import { useRef, useState } from 'react';

const Main = () => {
  const { greeting } = data;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Set initial state to true since autoplay is enabled

  const handleTogglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // useEffect(() => {
  //   const playAudio = () => {
  //     audioRef.current?.play().catch((error) => console.log('Autoplay blocked:', error));
  //     document.removeEventListener('click', playAudio);
  //   };

  //   document.addEventListener('click', playAudio);

  //   return () => document.removeEventListener('click', playAudio);
  // }, []);

  return (
    <div style={{paddingTop:"30px"}}>
      <MainImg src="src/assets/images/NHO01756.jpg" />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
      <audio ref={audioRef} loop autoPlay playsInline>
        <source src="wedding march.m4a" type="audio/mpeg" />
      </audio>
      <ButtonContainer>
        <IconButton onClick={handleTogglePlayPause}>
          {isPlaying ? (
            <PauseIcon viewBox="0 0 24 24">
              <path d="M6 19h4V5H6zm8-14v14h4V5z" />
            </PauseIcon>
          ) : (
            <PlayIcon viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </PlayIcon>
          )}
        </IconButton>
      </ButtonContainer>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  font-family: Poppins, serif;
  font-size: 2rem;
  color: #2f2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const IconButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: white;
  background-color:rgb(255, 143, 135);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #4a3a39;
  }
`;

const PlayIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
`;

const PauseIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
`;
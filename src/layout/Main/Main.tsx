import styled from '@emotion/styled';
import data from 'data.json';
import { useRef, useState } from 'react';
import { useLanguage } from 'context/LanguageContext';

const Main = () => {
  const {language} = useLanguage()
  const greeting = data.greeting[language];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{paddingTop:"30px"}}>
      <MainImg src="/NHO01756.JPG" />
      <MainTitle>{greeting.title}</MainTitle>
      <audio ref={audioRef} loop playsInline>
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
  font-family: Poppins, Inter;
  font-size: 2rem;
  color: #2f2120;
  line-height: 120%;
  white-space: pre-line;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px
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
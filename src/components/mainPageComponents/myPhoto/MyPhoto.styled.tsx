import styled from '@emotion/styled';

export const PhotoContainer = styled.div`
  width: 12vw; 
  height: 12vw;
  border: solid 2px white; 
  border-radius: 15px;  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

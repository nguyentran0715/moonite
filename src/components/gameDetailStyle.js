import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const slideIn = keyframes`
  from {
    transform: scale(.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  img.game-image {
    border-radius: 4px;
  }
`;

export const Detail = styled(motion.div)`
  width: 70%;
  height: 95vh;
  border-radius: 1rem;
  padding: 5rem 10rem;
  background-color: #151515;
  color: black;
  overflow-y: auto;
  animation: ${slideIn} 0.15s linear forwards;

  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 1.6rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media screen and (max-width: 1279px) {
    width: 90%;
  }

  @media screen and (max-width: 1023px) {
    padding: 5rem;
    h3 {
      margin-bottom: 1rem;
    }
  }
`;

export const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .rating .rating-value {
    color: #ff7676;
    font-weight: 600;
  }

  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

export const Info = styled(motion.div)`
  text-align: center;

  @media screen and (max-width: 1023px) {
    text-align: left;
    margin-top: 2rem;
  }
`;

export const Platforms = styled(motion.div)`
  display: flex;
  justify-content: center;

  img {
    width: 3rem;
    height: 3rem;
  }

  img:not(:first-child) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 1023px) {
    justify-content: flex-start;
  }
`;

export const Media = styled(motion.div)`
  margin-top: 5rem;

  .image-container {
    padding-bottom: 56.25%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Description = styled(motion.div)`
  margin: 5rem 0;
  p {
    line-height: 1.8;
  }

  span {
    font-weight: 600;
    color: #ff7676;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

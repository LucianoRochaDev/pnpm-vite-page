import { styled } from "@linaria/react";

export const Header = styled.header`
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 25px;
  background: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #0078d0;
  height: 35px;
  border: 0;
  border-radius: 56px;
  color: #fff;
  cursor: pointer;
  padding: 0 40px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.1s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 500;
  letter-spacing: 0.8px;

  &:before {
    background-color: initial;
    background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
    border-radius: 125px;
    content: "";
    height: 50%;
    left: 4%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    transition: all 0.1s;
    width: 92%;
  }

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,
      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
    transform: scale(1.05);
  }

  /* @media (min-width: 768px) {
    padding: 16px 48px;
  } */
`;

export const NavList = styled.nav`
  display: flex;
  gap: 3rem;

  & a {
    background-image: linear-gradient(to right, #0078d0, #0078d0 50%, #000 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;

    text-decoration: none;
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  & a:before {
    content: "";
    background: #0078d0;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: all 0.3s ease-in-out;
  }

  & a:hover {
    background-position: 0;
  }

  & a:hover::before {
    width: 100%;
  }
`;

export const BlurTransition = styled.div`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: leftBlurIn;
  @keyframes leftBlurIn {
    from {
      transform: scaleX(0.2);
      filter: blur(20px);
      opacity: 0;
    }
  }

  /* .leBlurIn span { animation-name: leBlurIn }
@keyframes leBlurIn {
    from {
        transform: scaleX(0.2);
        filter: blur(20px);
        opacity: 0;
    }
} */
`;

export const DanceTransition = styled.div`
  &:hover {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: danceTop;
    transform-origin: top;
  }
  @keyframes danceTop {
    16% {
      transform: skew(-14deg);
    }
    33% {
      transform: skew(12deg);
    }
    49% {
      transform: skew(-8deg);
    }
    66% {
      transform: skew(6deg);
    }
    83% {
      transform: skew(-4deg);
    }
  }
`;

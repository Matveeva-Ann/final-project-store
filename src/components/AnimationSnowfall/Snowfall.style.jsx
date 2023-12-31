import styled from '@emotion/styled';

export const  SnowflakesContainer = styled.div`
position: fixed;
width: 100%;
height: 100%;
pointer-events: none;
`;

export const Snowflake = styled.div`
position: absolute;
color: #fff;
font-size: 20px;
line-height: 1;
animation: fall linear infinite;
animation-duration: ${(Math.random() * 10 + 9).toFixed(2)}s;

@keyframes fall {
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(100vh);
  }
}
`;
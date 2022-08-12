import styled from 'styled-components';

type ColorProps = {
  color: string;
};

export const Container = styled.div`
  border: 1px solid #d0d4e4;
  border-radius: 8px;

  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Color = styled.div<ColorProps>`
  width: 60px;
  height: 40px;
  padding: 8px;

  background: ${({ color }) => color};

  border: 1px solid #d0d4e4;
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

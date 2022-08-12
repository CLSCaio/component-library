import styled from 'styled-components';

type FontProps = {
  fontS?: string;
  fontW?: string;
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

export const Font = styled.div<FontProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 40px;
  padding: 8px;

  font-size: ${({ fontS }) => fontS || '14px'};
  font-weight: ${({ fontW }) => fontW || '400'};

  border: 1px solid #d0d4e4;
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

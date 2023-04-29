import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 20px;
  max-width: 100%;
  color: #4d5264;
  background-color: #f3f3f5;
   box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px rgba(0,0,0,.2);
  `;

export const Title = styled.h2`
  padding: 15px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #4d5264;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  flex-basis: 25%;
  font-size: 20px;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  border-right: 1px solid #e4e9f0;
  color: #e4e9f0;
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 10px;
  color: #e4e9f0;
`;

export const Percentage = styled.span`
  font-size: 16px;
`;

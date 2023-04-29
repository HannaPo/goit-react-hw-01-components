import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0 auto;
  max-width: 250px;
    color: #4d5264;
  background-color: #dbdbf3;
   box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
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

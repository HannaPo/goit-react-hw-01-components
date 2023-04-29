import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  margin: 20px auto;
  padding-top: 30px;
  width: 250px;
  max-width: 100%;
  color: #4d5264;
  background-color: #dbdbf3;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  margin: 10px auto;
  height: 120px;
  width: 120px;
  `;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 12px;
  line-height: 1.26;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 12px;
  line-height: 1.26;
  margin-bottom: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9da0af;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: calc(100% / 3);
  border-right: 1px solid rgb(35 50 73 / 17%);
   &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
  color: #f5f8fc;
`;

export const Quantity = styled.span`
  font-size: 16px;
  color: #4d5264;
  font-weight: bold;
`;

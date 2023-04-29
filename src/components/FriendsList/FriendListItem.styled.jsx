import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  color: #4d5264;
  background-color: #f3f3f5;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px rgba(0,0,0,.2);
  `;

export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
  border-radius: 3px;
  padding: 5px;
`;

export const FriendName = styled.p`
  font-weight: 700;
  font-size: 15px;
`;

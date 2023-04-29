import Profile from './Profile/Profile';
import user from './data/user.json';

import Statistics from './Statistics/Statistics';
import data from './data/data.json';

import FriendList from './FriendsList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './Transactions/Transactions';
import transactions from './data/transactions.json';

import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <Wrapper>
        <div>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />

          <Statistics title="Upload stats" stats={data} />

          <FriendList friends={friends} />
        </div>
        <TransactionHistory items={transactions} />
      </Wrapper>
    </>
  );
};

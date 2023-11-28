import { Profile } from './userProfile/profile';
import user from './userProfile/user.json';
import { Statistics } from './statistics/statistic';
import data from './statistics/data.json';
import { FriendsList } from './friendsList/friendsList';
import friends from './friendsList/friends.json';
import { TransactionHistory } from './transactionHistory/transactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile props={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

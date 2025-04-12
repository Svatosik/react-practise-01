// css
import "normalize.css";
import "./styles/reset.css";
//components
import { Profile } from "./components/profile/Profile";
import { Statistics } from "./components/stats/Statistics";
import { FriendsList } from "./components/friends/FriendsList";
import { TransactionList} from "./components/transactions/TransactionList"
//data
import user from "./components/profile/user.json";
import data from "./components/stats/data.json";
import friends from "./components/friends/friends.json";
import transactions from "./components/transactions/transactions.json";
import { Transaction } from "./components/transactions/Transaction";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionList transactions={transactions} />
    </>
  );
}

export default App;

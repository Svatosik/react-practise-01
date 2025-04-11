// css
import "normalize.css";
import "./styles/reset.css";
//components
import { Profile } from "./components/profile/Profile";
import { Statistics } from "./components/stats/Statistics";
//data
import user from "./components/profile/user.json";
import data from "./components/stats/data.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </div>
  );
}

export default App;

import type { VoteType, Votes } from "../../types/votes.ts";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import { useState } from "react";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";
function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  function handleVotes(VoteType: VoteType) {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [VoteType]: prevVotes[VoteType] + 1,
    }));
    console.log(votes);
  }
  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    console.log(votes);
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVotes} onReset={resetVotes} />
      {totalVotes > 0 && (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      )}

      {totalVotes === 0 && <Notification />}
    </div>
  );
}

export default App;

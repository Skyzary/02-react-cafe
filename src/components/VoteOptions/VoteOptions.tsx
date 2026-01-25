import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes.ts";
interface VoteOptionsProps {
  onReset: () => void;
  onVote: (vote: VoteType) => void;
}
export default function VoteOptions({ onVote, onReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

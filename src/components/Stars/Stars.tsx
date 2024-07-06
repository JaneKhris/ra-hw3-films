import { TProps } from "../../models";
import { Star } from "../Star/Star";
import { nanoid } from 'nanoid'

export function Stars({count = 4}: TProps) {
  let countArray = [];
  if (count >= 1 && count <= 5) {
    countArray = Array(count).fill(0);
  }
  console.log(count)

  return (
    <ul className="card-body-stars u-clearfix">
      {countArray.map(() => (
        <li key={nanoid()}>
          <Star />
        </li>
      ))}
    </ul>
  );
}

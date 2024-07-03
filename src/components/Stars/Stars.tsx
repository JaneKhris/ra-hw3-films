import { IProps } from "../../models";
import { Star } from "../Star/Star";
import { nanoid } from 'nanoid'

export function Stars(props: IProps) {
  let countArray = [];
  if (props.count >= 1 && props.count <= 5) {
    countArray = Array(props.count).fill(0);
  }
  console.log(props.count)

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

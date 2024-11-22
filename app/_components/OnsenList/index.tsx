import { Onsen } from "@/app/_libs/microcms";

type Props = {
  onsen: Onsen[];
};

export default function OnsenList({ onsen }: Props) {
  return (
    <ul>
      {onsen.map((onsen) => (
        <li key={onsen.id}>
          <h2>{onsen.name}</h2>
          <p>{onsen.lead}</p>
          <p>{onsen.description}</p>
        </li>
      ))}
    </ul>
  );
}

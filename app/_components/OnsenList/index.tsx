import { Onsen } from "@/app/_libs/microcms";
import { getOnsenList } from "@/app/_libs/microcms";

export default async function OnsenList() {
  const data = await getOnsenList();
  return (
    <ul>
      {data.contents.map((onsen) => (
        <li key={onsen.id}>
          <h2>{onsen.name}</h2>
          <p>{onsen.lead}</p>
          <p>{onsen.description}</p>
        </li>
      ))}
    </ul>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import OnsenList from "@/app/_components/OnsenList";
import { Onsen } from "@/app/_libs/microcms";

const data: { contents: Onsen[] } = {
  contents: [
    {
      id: "100401",
      name: "草津",
      lead: "自然湧出量日本一の湯量豊富な日本三名泉",
      description:
        "草津温泉は湯けむりを上げる源泉・湯畑を中心に多くの宿が立ち並び、自然湧出量日本一の高温温泉が楽しめます。湯もみと踊りショー、湯めぐり手形など、草津ならではの温泉文化が体験できます。",
    },
    {
      id: "0920616",
      name: "鬼怒川",
      lead: "開湯330年以上の歴史を持つ関東有数の温泉街",
      description:
        "開湯330年以上の歴史を持つ鬼怒川温泉は、年間200万人以上が訪れる人気の温泉地です。天然アルカリ性単純泉の泉質は肌に優しく、多くの効能があるとされています。鬼怒川の渓谷美と四季折々の景色、近くの龍王峡のハイキングなども楽しめます。",
    },
    {
      id: "1020802",
      name: "伊香保",
      lead: "365段の石段街と歴史ある湯治湯",
      description:
        "伊香保温泉は、湯治場としての歴史があり365段の石段がシンボルです。「黄金の湯」は鉄分が酸化した色で血行促進効果があるため特に女性には”子宝の湯”として親しまれてきました。「白銀の湯」は豊富な湧出量の無色透明の湯で、疲労回復や健康増進に効果的です。",
    },
  ],
};

export default function Home() {
  return <OnsenList onsen={data.contents} />;
}

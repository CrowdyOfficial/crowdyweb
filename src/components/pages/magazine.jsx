import React from "react";
import MagazineMenu from "./magazineComponent/MagazineMenu";
import NAV from "./pageComponent/Nav";
import Bottom from "./pageComponent/Bottom";
import "../../style/magazine.scss";

const Magazine = () => {
  const cafes = {
    /*
    example
    {
        to: "",
        thumbnail: "",
        cafeName: "",
        cafeDesc: "",
      },
    */
    list: [
      {
        to: "/yenani",
        thumbnail: "./assets/magazinePages/yenani/yenani_thumbnail.png",
        cafeName: "예나니",
        cafeDesc: "끝남동의 매력적인 카페, 아기자기한 감성",
      },
      {
        to: "/tenderly",
        thumbnail:
          "./assets/magazinePages/tenderlycoffee/tenderly_thumbnail.png",
        cafeName: "텐더리커피앤디저트",
        cafeDesc: "따뜻하고 아늑한 공간의 여유로움",
      },
      {
        to: "/atthemoment",
        thumbnail:
          "./assets/magazinePages/atthemoment/atthemoment_thumbnail.png",
        cafeName: "앳더모먼트",
        cafeDesc: "계절의 향과 글루텐프리 바스크 치즈케이크",
      },
      {
        to: "/geeksyeonnam",
        thumbnail: "./assets/magazinePages/geeksyeonnam/thumbnail.png",
        cafeName: "긱스",
        cafeDesc: "",
      },
    ],
  };
  const makeCafe = (start) => {
    let result = [];
    for (let i = start; i < start + 4; i++) {
      result.push(
        <MagazineMenu
          key={i}
          className="M"
          to={cafes.list[i].to}
          thumbnail={cafes.list[i].thumbnail}
          cafeName={cafes.list[i].cafeName}
          cafeDesc={cafes.list[i].cafeDesc}
        />
      );
    }
    return result;
  };

  return (
    <div className="App">
      <div className="magazinePage">
        <NAV></NAV>

        {/* section one */}
        <div className="section01 SCoreDreamFont">
          <div className="desc">
            <div className="title">
              <span>매거진, 사장님이</span>
              <span>풀어내는 카페 이야기</span>
            </div>
            <div className="descs">
              <span>어디에서도 들어보지 못한,</span>
              <span>사장님이 직접 말하는 카페 스토리</span>
            </div>
          </div>
        </div>

        {/* section two */}
        <div className="section02">{makeCafe(0)}</div>

        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default Magazine;

import React from "react";
import MagazineMenu from "./magazineComponent/MagazineMenu";
import NAV from "./pageComponent/Nav";
import Bottom from "./pageComponent/Bottom";
import Paging from "./pageComponent/Paging";
import "../../style/magazine.scss";
import useStore from "../../store";

const Magazine = () => {
  const { cafes } = useStore();

  const makeCafe = (start) => {
    const result = [];
    for (let i = start; i < start + 6; i++) {
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
              <br />
              <span>사장님이 직접 말하는 카페 스토리</span>
            </div>
          </div>
        </div>

        {/* section two */}
        <div id="section02" className="section02">
          {makeCafe(0)}
          {/* <div className="pagination">
            <Paging data={cafes} />
          </div> */}
        </div>

        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default Magazine;

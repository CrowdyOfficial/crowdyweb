import React, { useState } from "react";
import MagazineMenu from "./magazineComponent/MagazineMenu";
import NAV from "./pageComponent/Nav";
import Bottom from "./pageComponent/Bottom";
import "../../style/magazine.scss";
import useStore from "../../store";
import Pagination from "react-js-pagination";

const Magazine = () => {
  const { cafes } = useStore();
  const [page, setPage] = useState(1);

  // what logic?
  // 1: 0 1 2 3 4
  // 2: 5 6 7 8 9
  // 3: 10 11 12 13 14

  const makeCafe = (start) => {
    const result = [];
    if (start === 0) {
      for (let i = 0; i < 5; i++) {
        if (cafes.list[i] === undefined) {
          break;
        }
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
    } else {
      for (let i = 5 * start; i < 5 * start + 5; i++) {
        if (cafes.list[i] === undefined) {
          break;
        }
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
    }
    return result;
  };

  const handlePageChange = (page) => {
    setPage(page);
    // console.log(`now page: ${page}`);
    document.getElementById("section01").scrollIntoView();
  };

  return (
    <div className="App">
      <div className="magazinePage">
        <NAV></NAV>

        {/* section one */}
        <div id="section01" className="section01 SCoreDreamFont1">
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
          {makeCafe(page - 1)}
          <div className="pagination">
            <Pagination
              activePage={page}
              itemsCountPerPage={5}
              totalItemsCount={cafes.list.length}
              hideNavigation={true}
              hideFirstLastPages={true}
              onChange={handlePageChange}
            />
          </div>
          <br />
          <br />
          <br />
        </div>

        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default Magazine;

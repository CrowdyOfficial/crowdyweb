import React from "react";
import QA from "../QA";
import Space from "./Space";
import "../../style/Lereve.scss";

import "../../style/QA.scss";

const LeReve = () => {
  return (
    <div className="M">
      <div id="magazine" className="magazine">
        <div className="crowdyMagazine">크라우디 매거진</div>
        <img src="assets/LeReve/1.png" alt="" />
        <div className="title">
          <span>미술관에서 연인과 즐기는</span>
          <span>커피와 영화 한 편</span>
          <span className="address">르레브 / 화성시 여울로 140</span>
        </div>

        <div className="cafeDesc">
          <span className="topSpan">
            커피의 깊은 풍미를 일반인들이 느끼기 쉽지 않다.
          </span>
          <span>다만, 공간이 주는 풍요로움이</span>
          <span className="bottomSpan">
            커피의 풍미를 느끼는 데 도움을 준다.
          </span>
        </div>

        {/* Question 1 */}
        <div className="questAnswer">
          <div className="question">
            <span>르레브의 공간은 특별한데요! 사장님이 르레브를 </span>
            <span>기획하는데 큰 영향을 준 요인이 궁금합니다.</span>
          </div>
          <div className="answer">
            <span>왕좌의 게임, 반지의 제왕, 앤디 워홀, 스위스.. </span>
            <br />
            <span>
              많은 요소들이 있겠지만 우선 기억이 나는 것은 이정도인 것
            </span>
            <span>같습니다.</span>
          </div>
        </div>

        <img src="assets/LeReve/2.png" alt="" />

        {/* Question 2 */}
        <div className="questAnswer One">
          <div className="question">
            <span>공간이 주는 컨셉과 웅장함이 돋보이는데요.</span>
          </div>
          <div className="answerOne">
            <span>
              르레브 공간은 낮과 밤, 날씨에 따라 다른 분위기를 형성합니다.
            </span>
            <span>
              &nbsp;저는 비가 많이 내리는 날을 좋아합니다. 밖에 무슨 일이
              일어나든
            </span>
            <span>
              &nbsp;르레브 안은 고요하고 안정적이었거든요. 르레브만의 차분한
            </span>
            <span>
              &nbsp;분위기를 더 느끼기 좋은 날씨라고 생각합니다. 참고로 무거운
            </span>
            <span>&nbsp;분위기가 싫으시다면 야외 테라스를 추천드립니다😊</span>
          </div>
        </div>

        {/* Question 3 */}
        <QA
          q1={"낮과 밤은 어떻게 다른가요?"}
          a1={"저녁이 되면 1층과 2층의 분위기는 완전히 달라집니다. 저녁이 "}
          a2={"되면 르레브의 조명은 어두워집니다. 이로 인해, 1층에서는 "}
          a3={"장엄함이 느껴지고 2층에서는 연인들이 소파에 기대어 영화를 "}
          a4={"볼 수 있는 편안함이 형성이 됩니다. 르레브의 이 같은 매력을 "}
          a5={"많은 분들이 볼 수 있었으면 좋겠습니다."}
        ></QA>

        <div className="container">
          <img src="assets/LeReve/3-1.png" alt="" />
          <img src="assets/LeReve/3-2.png" alt="" />
          <img src="assets/LeReve/3-3.png" alt="" />
          <img src="assets/LeReve/3-4.png" alt="" />
        </div>

        {/* Question 4 */}
        <QA
          q1={"사장님의 커피 취향이 궁금합니다."}
          a1={"저는 아침에 일어나서 일을 하는 동시에 커피를 내려 먹는데요, "}
          a2={"오리지널, 싱글 원두를 선호하고 밸런스를 가장 중요하게 "}
          a3={"여깁니다. 가끔은 산미가 높은 커피를 먹는 것도 좋아합니다."}
        ></QA>

        <img className="LereveMenu" src="assets/LeReve/4.png" alt="" />

        {/* Question 5 */}
        <QA
          q1={"카페에서 가장 매력 있는 메뉴와 조합은 무엇이라고 생각하세요?"}
          a1={"르레브는 브런치, 피자, 파스타까지 다양하게 판매하고 있어요. "}
          a2={"간단하게 드시고 싶으시다면, 에그 크루아상과 에스프레소를 "}
          a3={"추천드리고요. 요즘 자주 먹는 메뉴와 조합은 크로플과 딸기 "}
          a4={"쥬스입니다."}
        ></QA>

        <img className="LereveMenu" src="assets/LeReve/5.png" alt="" />

        {/* Question 6 */}

        <QA
          q1={"마지막으로 하시고 싶은 말씀 있으신가요?"}
          a1={"고객분들 중에 인터뷰를 보고 방문하셨다면 꼭 저 또는 직원에게 "}
          a2={"말씀해주세요. 해당 고객에게는 소정의 혜택을 드리겠습니다!"}
        ></QA>

        <img src="assets/LeReve/6.png" alt="" />

        <div className="bottom">
          <span className="address">르레브 / 화성시 여울로 140</span>
        </div>
      </div>
      <div>
        <table border="0">
          <tr>
            <td>영업시간: &nbsp;&nbsp;</td>
            <td>매일 10:00 ~ 23:59</td>
          </tr>
          <tr>
            <td>외부링크: </td>
            <td>
              <a href="https://bit.ly/3xC2cVh">
                <img src="assets/icon/naver.png" alt="" />
                &nbsp;&nbsp;네이버
              </a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <a href="https://bit.ly/3DevufY">
                <img src="assets/icon/insta.png" alt="" />
                &nbsp;&nbsp;인스타
              </a>
            </td>
          </tr>
        </table>
      </div>
      <Space></Space>
    </div>
  );
};

export default LeReve;
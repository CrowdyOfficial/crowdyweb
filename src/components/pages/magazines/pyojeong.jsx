import React from "react";
import { Link } from "react-router-dom";
// magazine Components
import BottomLink from "./components/BottomLink";
import Space from "../Space";
import PCMNav from "./components/PCMNav";
import MNav from "./components/MNav";
import H from "./components/H";
import Img1 from "./components/img1";
import Img2 from "./components/img2";
import SectionSpace from "./components/SectionSpace";
import SlideIMG from "./components/SlideIMG";
// style
import "../../../style/magazinePages.scss";
import "../../../style/QA.scss";

const asset = "./assets/magazinePages/pyojeong/";
const Pyojeong = () => {
  const images = [
    asset + "2-1.png",
    asset + "2-2.png",
    asset + "2-3.png",
    asset + "2-4.png",
    asset + "2-5.png",
    asset + "2-6.png",
    asset + "2-7.png",
    asset + "2-8.png",
    asset + "2-9.png",
  ];
  return (
    <div className="M">
      <PCMNav></PCMNav>
      <MNav></MNav>
      <div id="magazine notoSans" className="magazine">
        <div className="crowdyMagazine">
          크라우디 매거진
          <div className="goBack">
            <Link to="/magazine">
              <img src="./assets/icon/Back.png" alt="" />
            </Link>
          </div>
        </div>
        <img className="magazineThumbnail" src={asset + "1.png"} alt="" />
        <div className="title">
          <span>작은 공간에서</span>
          <span>구겔호프가 주는 특별함</span>
          <span className="address">표정 / 서울 마포구 동교로 262-10 1층</span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">
            커피와 디저트의 제작 공간이 홀과 비슷한 이유는
          </span>
          <span>
            커피와 디저트의 본질과 퀄리티를 중요하게 생각하기 때문이고
          </span>
          <span className="bottomSpan">
            이런 커피와 디저트를 맛 본 사람의 행복은 표정으로 드러난다.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/cake.png" alt="" />
              <div>
                시그니처 메뉴<span>초코 하트 구겔호프케이크</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.png" alt="" />
              <div>
                월~일 12시 ~ 20시<span>(매주 화요일 휴무)</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.png" alt="" />
              <div>
                6000원 이상<span>(음료 기준)</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.png" alt="" />
              <div>
                주변 공용 주차장 3분 거리<span>250원/5분</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table.png" alt="" />
              <div>
                좌석 수<span>4 개</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/walking.png" alt="" />
              <div>
                홍대입구역<span>도보 9분</span>
              </div>
            </div>
          </div>
        </div>

        <SlideIMG imgArray={images} />

        <div className="questAnswer">
          <div className="question">
            <span>
              먼저 많은 분들이 관심을 갖는 하트 모양 케이크에 대해서도 당연히
              여쭤봐야할 거 같은데요,
            </span>
            <br />
            <span>초코 하트 구겔호프 케이크의 탄생 배경이 궁금합니다.</span>
          </div>
          <div className="answer">
            <span>
              사실 지금의 초코 하트 구겔호프케이크는 오픈하고 3달 정도 후인{" "}
              <H text="발렌타인데이 시즌 한정 케이크로 출시를 했었어요." />
            </span>
            <br />
            <span>
              하트 모양의 케이크를 출시했었는데 기대 이상으로 반응이 엄청
              뜨거웠어요.
            </span>
            <br />
            <span>
              그 이후로도 계속 많은 분들이 관심을 가져주셔서 계속 판매를 하게
              되었고 어느새 표정 카페를 대표하는 케이크로 인식된 거 같아요.
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>하트 모양의 케이크는 예약만 받으시나요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="네, 예약으로만 받고 있고, 예약은 인스타그램 DM으로 해주시는게 좋습니다!" />
            </span>
            <br />
            <span>
              추가로 말씀드리면, 초코 하트 구겔호프 케이크(하트모양 케이크)는
              인기가 많아서 당일 급하게 원하시는 분들을 위해 여유분으로 몇 개 더
              만들고 있어요.
            </span>
          </div>
        </div>

        <Img2
          img1={asset + "3-1.png"}
          img2={asset + "3-2.png"}
          desc2="@pyojeong_x_x 게시글"
        />

        <div className="questAnswer">
          <div className="question">
            <span>표정의 카페는 협소한 편인데요,</span>
            <br />
            <span>
              공간이 적은데도 많은 분들이 찾아와주시는 이유가 무엇이라고
              생각하시나요?
            </span>
          </div>
          <div className="answer">
            <span>카페 실평수가 한 10평에서 11평 정도 돼요.</span>
            <br />
            <span>
              '홀 공간을 많이 활용해야할까?"라는 생각도 했지만,{" "}
              <H text="카페 공간을 디저트와 커피의 품질을 올리는 데 활용하자고 결정했습니다." />
            </span>
            <br />
            <span>
              저희도 홀이 작아서 아쉽지만 양질의 디저트와 커피를 많은 분들이
              좋아해주시는 거 같아서 후회는 없어요😊
            </span>
          </div>
        </div>

        <Img2 img1={asset + "4-1.png"} img2={asset + "4-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>
              표정을 만드시는데 가장 크게 신경쓰셨던 부분은 무엇인가요?
            </span>
          </div>
          <div className="answer">
            <span>
              <H text="표정의 공간을 기획할 때 커피와 디저트에만 집중할 수 있는 공간을 만들고 싶었어요." />
            </span>
            <br />
            <span>
              그래서 카페 내부에는 액자나 인테리어 소품을 많이 두지 않았고 검정,
              회색, 연회색 3가지 컬러만 활용하여 톤앤매너를 맞췄습니다
            </span>
            <br />
            <span>
              그리고 음식과 음료를 여유있게 즐기실 수 있도록 커피를 내리는
              공간에서 밖을 바라볼 수 있는 창문도 기획을 했습니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "5-1.png"} img2={asset + "5-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>표정에서만 경험할 수 있는 요인은 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              저희는 홀이 작고 바와 비슷한 형태로 되어있어서 손님 한 분 한 분을
              신경 써드리는데 최선을 다하고 있습니다.
            </span>
            <br />
            <span>
              커피와 디저트의 종류가 다양해서 고객님의 취향과 메뉴에 대해 설명을
              드리면 자연스럽게 추천해 드린 메뉴로 주문을 해주세요.
            </span>
            <br />
            <span>
              그래서 그런지,{" "}
              <H text="하나의 코스를 커스텀 받았다고 느끼시는 분들이 많은 것 같아요." />
            </span>
          </div>
        </div>
        <Img1 img={asset + "6.png"} />
        <div className="questAnswer">
          <div className="question">
            <span>맛있는 커피를 만드는 표정만의 방법이 있나요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="저희는 원두를 갈아 검증하고 평가하는 커핑(향미인지과정) 시스템을 도입하여 진행하고 있습니다." />
            </span>
            <br />
            <span>
              커핑을 통과한 원두는 원두 굵기, 물 온도 등 맛 발현에 영향을 주는
              요소를 테스팅하여 최상의 맛 상태를 제어하고 있습니다.
            </span>
            <br />
            <span>
              이렇게 깐깐하게 원두를 검증하는 단계를 밟은 것이 손님들에게 좋은
              반응을 얻어낸 이유인 것 같습니다.
            </span>
          </div>
        </div>
        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>
              그래서 단순히 케이크 맛집 뿐만 아니라 커피가 맛있다는 이야기도
              많았던 거군요!
            </span>
          </div>
          <div className="answer">
            <span>그렇게 말씀해주시니 너무 고맙습니다.</span>
            <br />
            <span>
              요즘 원두에 과일을 넣고 발효시키는 등 원두의 가공 방식이 많이
              달라지고 있어요.
            </span>
            <br />
            <span>
              <H text="이런 가공 방식은 커피의 매력을 알릴 수 있는 요소라고 생각하는데요." />
            </span>
            <br />
            <span>
              다른 카페에 가서 커피를 마실 때 그러한 가공 방식의 장점과 매력이
              잘 전달되지 않아 아쉬웠던 경험이 있었어요.
            </span>
            <br />
            <span>
              이러한 가공 방식의 장점을 잘 전달드리려고 했던 노력을 알아봐주신
              거 같아 뿌듯하네요!
            </span>
          </div>
        </div>

        <Img2 img1={asset + "7-1.png"} img2={asset + "7-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>손님들이 가장 많이 주문하는 메뉴는 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              아무래도 테이크아웃은 초코 하트 구겔호프 케이크를 가장 많이
              찾아주시는 편이고 매장 내부에서는{" "}
              <H text="커피와 미니 구겔호프가 같이 나오는 ‘표정 플레이트’라는 세트 메뉴를 많이 찾아주세요." />
            </span>
          </div>
        </div>

        <Img2
          img1={asset + "8-1.png"}
          desc1="@pyeojeong_x_x 게시글"
          img2={asset + "8-2.png"}
        />

        <div className="questAnswer">
          <div className="question">
            <span>'표정 플레이트'에 대해 자세히 설명해주세요.</span>
          </div>
          <div className="answer">
            <span>
              <H text="표정의 커피와 구겔호프를 모두 맛 보실 수 있는 세트 메뉴에요." />
            </span>
            <br />
            <span>
              3가지 종류의 원두 중에 원하시는 것을 골라주시면 핸드드립 방식으로
              커피를 내려드리고, 미니 구겔호프의 경우 8가지 맛 중에 원하시는
              구겔호프 케이크를 선택하실 수 있습니다.
            </span>
          </div>
        </div>
        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>사장님이 추천하시는 표정 플레이트의 조합이 있으신가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="저는 복숭아 향이 나는 원두의 커피와 레밍턴 구겔호프를 좋아해요." />
            </span>
            <br />
            <span>
              참고로 래밍턴 구겔호프는 겉은 초콜릿과 코코넛 안은 바닐라 시트로
              만들어졌어요.
            </span>
          </div>
        </div>

        <Img2
          img1={asset + "9-1.png"}
          img2={asset + "9-2.png"}
          desc2="@pyojeong_x_x 게시글"
        />

        <div className="questAnswer">
          <div className="question">
            <span>
              표정 매장 안에서 메뉴를 즐기고 싶다면, 어느 시간대에 방문하는 것이
              좋을까요?
            </span>
          </div>
          <div className="answer">
            <span>
              <H text="저희는 2시~6시 사이 사람이 많은 편이에요." />
            </span>
            <br />
            <span>
              날마다 다를 수 있지만 말씀드린 시간 이외에 방문하시면 내부에서
              여유롭게 음료를 드실 수 있을거라고 생각합니다!
            </span>
          </div>
        </div>

        <Img2 img1={asset + "10-1.png"} img2={asset + "10-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>마지막으로 하고 싶으신 말씀이 있으신가요?</span>
          </div>
          <div className="answer">
            <span>
              저는 방문했던 카페의 디저트가 너무 맛있어서 친구를 데리고 방문한
              적이 있어요.
            </span>
            <br />
            <span>
              그런데 다시 방문했을 때는 맛이 변해서 너무 실망스럽고 좀
              창피하기까자 하더라고요.
            </span>
            <br />
            <span>
              <H text="그래서 저희는 일관된 맛을 낼 수 있는 카페가 되는 것을 목표로 잡고 항상 노력하고 있습니다." />
            </span>
            <br />
            <span>
              많은 분들이 이런 저희의 노력을 알아봐주시면 너무 좋을 것 같아요.
            </span>
          </div>
        </div>
        <Img1 img={asset + "11.png"} />

        <SectionSpace></SectionSpace>
        {/* Bottom */}
        <div className="bottom">
          <div className="cafeMenu">
            <div className="menupan cafeMenuTopMargin">메뉴판</div>
            <img className="menupanMargin" src={asset + "menu.png"} alt="" />
          </div>
          <div className="openingHours">
            <div className="openingHourTitle">운영시간</div>
            <br />
            <div className="open">
              <span>월~일 </span>
              <span>&nbsp;12:00 ~ 20:00</span>
            </div>
            <div className="open">
              <span className="sunday">화요일 </span>
              <span className="sunday">&nbsp;정기 휴무</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%91%9C%EC%A0%95+%EC%97%B0%EB%82%A8%EC%A0%90&oquery=%ED%91%9C%EC%A0%95+%EC%97%B0%EB%82%A8&tqi=h1SPbsp0J1sssA8XGFwssssstHR-216648"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;표정 연남점
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/pyojeong_x_x/"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.png"
                  alt=""
                />
                &nbsp;@pyojeong_x_x
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?
                menu=route&ename=표정 연남점&ex=126.9255&ey=37.5627&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/표정 연남점,37.5627,126.9255"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/kakaomap.png"
                  alt=""
                />
                &nbsp;카카오맵
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomLink></BottomLink>
      <Space></Space>
    </div>
  );
};

export default Pyojeong;

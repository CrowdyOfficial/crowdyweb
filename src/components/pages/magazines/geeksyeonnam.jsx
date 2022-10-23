import React from "react";
import { Link } from "react-router-dom";
import Space from "../Space";
import PCMNav from "./components/PCMNav";
import MNav from "./components/MNav";
import H from "./components/H";
import Img1 from "./components/img1";
import Img2 from "./components/img2";
import SectionSpace from "./components/SectionSpace";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import BottomLink from "./components/BottomLink";
import "../../../style/magazinePages.scss";
import "../../../style/QA.scss";

const GeeksYeonnam = () => {
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  };
  const images = [
    "./assets/magazinePages/geeksyeonnam/2-1.png",
    "./assets/magazinePages/geeksyeonnam/2-2.png",
    "./assets/magazinePages/geeksyeonnam/2-3.png",
    "./assets/magazinePages/geeksyeonnam/2-4.png",
    "./assets/magazinePages/geeksyeonnam/2-5.png",
    "./assets/magazinePages/geeksyeonnam/2-6.png",
    "./assets/magazinePages/geeksyeonnam/2-7.png",
  ];
  const makeSlide = () => {
    const result = [];
    for (let i = 0; i < images.length; i++) {
      result.push(
        <div key={i} className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[i]})` }}></div>
        </div>
      );
    }
    return result;
  };
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
        <img
          className="magazineThumbnail"
          src="./assets/magazinePages/geeksyeonnam/1.png"
          alt=""
        />
        <div className="title">
          <span>다양한 종류의 원두에서</span>
          <span>나의 커피 취향을 찾다</span>
          <span className="address">
            긱스 연남점 / 서울 마포구 동교로 38길 27-12, 지하 1층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">
            커피 한 잔에서 얻을 수 있는 즐거움을 알 수 있는 곳.
          </span>
          <span>긱스의 전문 바리스타와 함께</span>
          <span className="bottomSpan">
            나의 입맛에 맞는 커피 취향을 찾아보세요.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/coffee.png" alt="" />
              <div>
                시그니처 메뉴<span>카페 피스타치오</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.png" alt="" />
              <div>
                월~목 12시 ~ 21시<span>금~일 11시30분~22시</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.png" alt="" />
              <div>
                3500원 이상<span>(음료 기준)</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.png" alt="" />
              <div>
                주변 공용 주차장 6분 거리<span>1500원/30분</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table.png" alt="" />
              <div>
                테이블 수<span>8개</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/walking.png" alt="" />
              <div>
                홍대입구역<span>도보 12분</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <Slide {...properties}>{makeSlide()}</Slide>
        </div>

        <div className="questAnswer">
          <div className="question">
            <span>긱스 브랜드를 창업하게 된 이유가 궁금합니다.</span>
          </div>
          <div className="answer">
            <span>제가 긱스 창업 이전에 외국 항공사에서 근무를 했었어요.</span>
            <br />
            <span>
              커피라고는 맥심만 먹어봤는데 우연히 이탈리아에서 인생 커피를
              맛보았습니다.
            </span>
            <br />
            <span>
              단순히 원두를 에스프레소 형태로 내린 커피였는데{" "}
              <H text="에스프레소가 달달하고 쓰지 않을 수 있다는 것을 처음 알게해줬어요." />
            </span>
            <br />
            <span>
              믿기지 않으시겠지만 그 커피를 먹고 커피 사업을 하기로
              결정했습니다.
            </span>
            <br />
            <span>
              저와 함께 긱스를 만든 이사님께서도 저를 반하게 했던 원두의 커피를
              드시고 긱스에 합류하기로 결정을 하셨어요 😁
            </span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/geeksyeonnam/3-1.png"
          img2="./assets/magazinePages/geeksyeonnam/3-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>사장님을 반하게 했던 그 커피를 긱스에서 맛볼 수 있나요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="저를 반하게 했던 원두는 이탈리아의 아구스트 크레모소라는 원두에요." />
            </span>
            <br />
            <span>
              저희가 한국 독점판매권을 가지고 있고 국내에 백화점, 호텔등을
              비롯한 다양한 곳에 유통하고 있습니다.
            </span>
            <span>
              원두의 맛과 향은 굉장히 민감해서 수입하는 과정에 맛이 변질될 수
              있어요.
            </span>
            <br />
            <span>
              수입하는 과정에서도 이것을 지키는 것이 소위 말하는 수출용 로스팅
              프로세스라는 기술력입니다.
            </span>
            <br />
            <span>
              또한, 매장에서는 원두 상태, 습도, 기기 등을 고려해 최상의 맛을 낼
              수 있도록 매일 아침마다 세팅을 진행한 이후 손님을 받고 있습니다.
            </span>
          </div>
        </div>

        <Img2
          img1="./assets/magazinePages/geeksyeonnam/4-1.png"
          img2="./assets/magazinePages/geeksyeonnam/4-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>
              긱스의 인테리어는 카페와 칵테일 바, 그 사이 어딘가에 있는 것
              같아요.
            </span>
          </div>
          <div className="answer">
            <span>정확하게 봐주셨어요.</span>
            <br />
            <span>
              <H text="이탈리아에서는 바에서 커피와 술을 함께 팔아요." />
            </span>
            <br />
            <span>
              처음보는 옆사람과 이야기를 하기도하고 바리스타에게 커피나 술에
              대한 이야기를 나누는 모습에 감명을 받아 긱스에 적용하게 되었어요.
            </span>
            <br />
            <span>
              현재 긱스에서도 술과 커피 모두 판매하고 있고 낮에는 조명의 감도를
              조절하여 밝고 환한 분위기를, 저녁에는 감도가 좀 더 어둡고 주황
              또는 보라색으로 조명을 조절해서 더욱 고급스러운 분위기를 연출하고
              있어요.
            </span>
          </div>
        </div>

        <Img2
          img1="./assets/magazinePages/geeksyeonnam/5-1.png"
          img2="./assets/magazinePages/geeksyeonnam/5-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>생소한 메뉴도 눈에 보이네요.</span>
          </div>
          <div className="answer">
            <span>
              샴페인 잔에 담긴 맥주 메뉴도 있고, 위스키와 커피를 블랜딩한 커피
              칵테일 메뉴도 있습니다.
            </span>
            <br />
            <span>
              <H
                text="방문하시는 고객분들께 즐거움을 드릴 수 있는 메뉴를
              계속해서 연구하고 있습니다."
              />
            </span>
          </div>
        </div>
        <Img1 img="./assets/magazinePages/geeksyeonnam/6.png" />
        <div className="questAnswer">
          <div className="question">
            <span>
              가까운 시일 내에 새로운 메뉴도 출시할 계획이 있으신가요?
            </span>
          </div>
          <div className="answer">
            <span>
              사실 지금 많은 시간과 노력을 들여 준비 중인 메뉴가 있습니다.
            </span>
            <br />
            <span>
              하나의 원두를 에스프레서 머신, 드립, 사이폰 등{" "}
              <H text="다양한 방식으로 내린 커피를 동시에 맛 볼 수 있는 커피 샘플러" />
              를 기획하고 있어요.
            </span>
            <br />
            <span>
              이 이외에도 칵테일 바에서 제공하는 "킵" 서비스를 본 딴 "원두 킵"
              서비스, 커피 오마카세를 변형한 "다이닝 커피"등 메뉴 이외에도
              다양한 방식으로 사람들의 취향을 채워 줄 수 있는 고민을 하고
              있습니다.
            </span>
          </div>
        </div>

        <Img2
          img1="./assets/magazinePages/geeksyeonnam/7-1.png"
          img2="./assets/magazinePages/geeksyeonnam/7-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>긱스(Get Your Coffee)는 어떤 의미인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="사람들이 긱스에서 자신만의 커피 취향을 찾으면 좋겠다라는 뜻입니다." />
            </span>
            <br />
            <span>
              긱스에는 50가지가 넘는 원두가 있고 로스팅 방식, 압력, 열 등
              여러가지 요소를 고려하면 훨씬 다양한 맛의 커피를 만들어 낼 수
              있습니다.
            </span>
            <br />
            <span>
              바리스타의 큐레이팅을 통해 사람들이 원하는 커피 맛을 찾을 수
              있도록 도와드리고 있습니다.
            </span>
          </div>
        </div>

        <Img2
          img1="./assets/magazinePages/geeksyeonnam/8-1.png"
          img2="./assets/magazinePages/geeksyeonnam/8-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>바리스타의 큐레이팅은 어떻게 진행되나요?</span>
          </div>
          <div className="answer">
            <span>
              방문하시는 고객분의 커피 취향을 찾을 수 있도록 바리스타가 산미,
              고소함, 과일 향, 드립, 사이폰 등 디테일한 질문을 드릴거에요.
            </span>
            <br />
            <span>
              <H
                text="질문에 대한 답을 주시면 바리스타가 이를 종합하여 가장 어울리는
              커피를 추천드립니다."
              />
            </span>
            <br />
            <span>
              바로 원하는 취향의 커피를 찾지 못할 수 있지만, 다양한 원두의
              설명을 들으면서 맛의 감각이 넓어지면 본인의 취향과 최대한 비슷한
              커피를 머지않아 찾을 수 있게 될거에요 😀
            </span>
          </div>
        </div>

        <Img1 img="./assets/magazinePages/geeksyeonnam/9.png" />

        <div className="questAnswer">
          <div className="question">
            <span>
              그래서 커피 애호가분들에게 긱스가 요즘 자주 언급되는 거 같습니다.
            </span>
          </div>
          <div className="answer">
            <span>그래서 너무 뿌듯합니다.</span>
            <br />
            <span>
              긱스 연남점은 올해 7월 오픈으로 이제 막 3개월이 넘은 것 같아요.
            </span>
            <br />
            <span>
              <H text="커피의 취향을 찾을 수 있는 공간" />이 되기 위해 노력하는
              긱스의 매력을 알아봐주시는 거 같아서 너무 행복하고 앞으로도 초심을
              잃지 않도록 하겠습니다.
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>특별히 추천하는 메뉴가 있으신가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="가장 인기가 많은 메뉴는 카페 피스타치오라는 에스프레소 메뉴입니다." />
            </span>
            <br />
            <span>개인적으로 추천하는 메뉴는 클립 더 연남인 것 같아요.</span>
            <br />
            <span>
              긱스 연남점에서만 맛 볼 수 있는 자체 개발 메뉴로 가벼우면서도
              우유와 꽃향이 어우러져 풍미있는 달달함이 느껴지는 맛입니다.
            </span>
          </div>
        </div>

        <Img1
          img="./assets/magazinePages/geeksyeonnam/10.png"
          desc="@get_your_coffees 사진"
        />
        <div className="questAnswer">
          <div className="question">
            <span>마지막으로 인터뷰를 보시는 분들께 한 말씀해 주세요.</span>
          </div>
          <div className="answer">
            <span>
              <H text="긱스를 통해 많은 분들이 커피를 취미이자 취향으로 생각했으면 좋겠어요." />{" "}
            </span>
            <br />
            <span>
              정말 다양한 원두와 기법을 조합하면서 저와 같이 커피의 매력에 빠질
              수 있었으면 좋겠습니다.😊
            </span>
          </div>
        </div>
        <Img1 img="./assets/magazinePages/geeksyeonnam/11.png" />

        <SectionSpace></SectionSpace>
        {/* Bottom */}
        <div className="bottom">
          <div className="cafeMenu">
            <div className="menupan cafeMenuTopMargin">메뉴판</div>
            <img
              className="menupanMargin"
              src="assets/magazinePages/geeksyeonnam/menu.png"
              alt=""
            />
          </div>
          <div className="openingHours">
            <div className="openingHourTitle">운영시간</div>
            <br />
            <div className="open">
              <span>월~목 </span>
              <span>&nbsp;12시 ~ 21시</span>
            </div>
            <div className="open">
              <span>금~일 </span>
              <span>&nbsp;11시30분 ~ 22시</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EA%B8%B1%EC%8A%A4+%EC%97%B0%EB%82%A8%EC%A0%90"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;긱스 연남점
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/get_your_coffees/"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.png"
                  alt=""
                />
                &nbsp;@get_your_coffees
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=긱스 연남점&ex=126.926&ey=37.5619&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/긱스 연남점,37.5619,126.926"
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

export default GeeksYeonnam;

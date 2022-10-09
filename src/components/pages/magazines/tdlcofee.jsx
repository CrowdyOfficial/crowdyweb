import React from "react";
import { useNavigate } from "react-router-dom";
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

const TDLCoffee = () => {
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
  };
  const images = [
    "./assets/magazinePages/tenderlycoffee/2-1.png",
    "./assets/magazinePages/tenderlycoffee/2-2.png",
    "./assets/magazinePages/tenderlycoffee/2-3.png",
    "./assets/magazinePages/tenderlycoffee/2-4.png",
    "./assets/magazinePages/tenderlycoffee/2-5.png",
    "./assets/magazinePages/tenderlycoffee/2-6.png",
    "./assets/magazinePages/tenderlycoffee/2-7.png",
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
  const nav = useNavigate();
  return (
    <div className="M">
      <PCMNav></PCMNav>
      <MNav></MNav>

      <div id="magazine notoSans" className="magazine">
        <div className="crowdyMagazine">
          크라우디 매거진
          <div onClick={() => nav(-1)} className="goBack">
            <img src="./assets/icon/Back.png" alt="" />
          </div>
        </div>
        <img
          className="magazineThumbnail"
          src="./assets/magazinePages/tenderlycoffee/1.png"
          alt=""
        />
        <div className="title">
          <span>따듯함 속에서 맛보는</span>
          <span>소금빵과 커피</span>
          <span className="address">
            텐더리커피 / 서울 마포구 성미산로29길 35, 2층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">
            한적한 골목을 걸으면 나오는 텐더리커피.
          </span>
          <span>맛있는 음료와 디저트부터 따듯함이 감도는 공간까지,</span>
          <span className="bottomSpan">쉼 없는 생각이 이완되다.</span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/pet.png" alt="" />
              <div>
                애견 동반<span>가능</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.png" alt="" />
              <div>
                월~목 12시 ~ 21시<span>금~토 12시~22시</span>
                <span className="thirdLine">일요일 14시~21시</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.png" alt="" />
              <div>
                4500원 이상<span>(음료 기준)</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.png" alt="" />
              <div>
                주변 공용 주차장 X<span>도보 추천</span>
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
                홍대입구역<span>도보 9분</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <Slide {...properties}>{makeSlide()}</Slide>
        </div>

        <div className="questAnswer">
          <div className="question">
            <span>텐더리 카페를 만들게 된 계기가 궁금합니다.</span>
          </div>
          <div className="answer">
            <span>카페를 창업하기 전, 너무 힘들었던 순간이 있었습니다.</span>
            <br />
            <span>
              그러던 중 우연히 따뜻한 느낌의 카페를 방문했었는데 너무 힐링이
              되는 느낌을 받았습니다.
            </span>
            <br />
            <span>
              저도 누군가에게&nbsp;
              <H text={"힐링을 줄 수 있는 공간"} />을 만든든 것을 목표로 지금의
              텐더리 카페를 기획하게 되었습니다.
            </span>
          </div>
        </div>
        <Img1 img="assets/magazinePages/tenderlycoffee/3.png" />

        <div className="questAnswer">
          <div className="question">
            <span>"텐더리"는 무슨 뜻인가요?</span>
          </div>
          <div className="answer">
            <span>
              Tenderly는&nbsp;
              <H text={"'부드럽게, 상냥하게, 친절하게'"} />
              라는 뜻을 담고 있습니다.
            </span>
            <br />
            <span>
              평소 자주 듣던 재즈 음악을 듣던 중에 Tenderly라는 단어를 알게 되어
              선정하였습니다 😊
            </span>
            <br />
            <span>
              이름 그대로 변하지 않고 항상 친절하게 손님들을 맞이하는 곳으로
              기억되고 싶습니다
            </span>
          </div>
        </div>
        <Img1 img={"assets/magazinePages/tenderlycoffee/4.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>
              편안함을 찾아 텐더리를 방문한다는 이야기를 많이 들었습니다.
            </span>
          </div>
          <div className="answer">
            <span>
              여러 요소가 있겠지만 <H text={"안정감"} />을 느끼게 기획한
              인테리어가 편안함으로 이어진다고 생각합니다.
            </span>
            <br />
            <span>
              우드한 느낌과 색깔적인 통일감을 주는 인테리어를 기획하였고
              자칫하면 우울할 수 있는 분위기를 상쇄시키고자 통창을 설치했고
              식물과 조명들로 포인트를 주었습니다.
            </span>
            <br />
            <span>많은 사람들이 좋아해주셔서 너무 감사하고 뿌듯합니다😀</span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/tenderlycoffee/5-1.png"
          img2="./assets/magazinePages/tenderlycoffee/5-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>사람들이 카페를 찾는데 어려움을 느끼지는 않나요?</span>
          </div>
          <div className="answer">
            <span>
              <H text={"카페를 창업한 지 3개월"} />
              &nbsp;밖에 되지 않았습니다.
            </span>
            <br />
            <span>
              저도 얼마 전까지만 해도 약간 외진 곳이라 사람들이 찾기 어렵다는
              우려가 있었어요.
            </span>
            <br />
            <span>
              다행히도 한 번 방문한 고객분들께서 다시 방문해주시고 인스타그램,
              패션 잡지에 카페가 소개가 되는 등 여러 방면에서 홍보에 도움을 받아
              텐더리 카페는 잘 자리를 잡아가고 있다고 생각합니다 😄
            </span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/tenderlycoffee/6-1.png"
          img2="./assets/magazinePages/tenderlycoffee/6-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>
              인스타그램을 보니 새로운 메뉴가 주기적 출시되는 것 같아요.
            </span>
          </div>
          <div className="answer">
            <span>
              거리가 가깝지 않음에도 불구하고 와주신 고객분들께 너무 감사해요.
            </span>
            <br />
            <span>
              감사함을 돌려드리고 싶은 마음이 새로운 메뉴를 개발하는데{" "}
              <H text={"동기부여"} />가 됩니다.
            </span>
            <br />
            <span>새로운 메뉴는 거의 매일 개발하는 거 같아요.</span>
            <br />
            <span>
              다만, 시도하는 과정에서 제가 생각한 기준에 맞지 않은 경우가 많아
              생각보다 실제로 출시되는 양이 적습니다..ㅎㅎ
            </span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/tenderlycoffee/7-1.png"
          desc1="@tenderly_coffee 게시글"
          img2="./assets/magazinePages/tenderlycoffee/7-2.png"
          desc2="@tenderly_coffee 게시글"
        />

        <div className="questAnswer">
          <div className="question">
            <span>소금빵이 텐더리의 시그니처 빵인 것 같은데요?</span>
          </div>
          <div className="answer">
            <span>
              신선함 덕분에 많은 분들이 좋아해주시지 않을까라고 생각합니다.
            </span>
            <br />
            <span>
              <H text={"소금빵을 당일 제조 및 판매"}></H>를 원칙으로 하고 있기
              때문에 판매 후에 남는 빵의 경우 제가 먹거나 모두 폐기하고
              있습니다.
            </span>
            <br />
            <span>
              소금빵을 드시기 원하신다면 방문하시기 전 날 영업 시간에 인스타그램
              DM으로 신청해주세요!
            </span>
            <br />
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/tenderlycoffee/8-1.png"
          desc1="@tenderly_coffee 게시글"
          img2="./assets/magazinePages/tenderlycoffee/8-2.png"
          desc2="@tenderly_coffee 게시글"
        />
        <div className="questAnswer">
          <div className="question">
            <span>곧 출시될 메뉴가 있을까요?</span>
          </div>
          <div className="answer">
            <span>
              현재 <H text={"그린티 라떼와 디카페인 커피"}></H>를 준비하고
              있습니다.
            </span>
            <br />
            <span>
              그린티 라떼는 최소 10월은 되어야 나올 수 있을 거 같습니다.
            </span>
            <br />
            <span>
              많은 분들이 디카페인을 찾아주시는데 아직 여러가지 상황을
              고려해야되서 출시가 늦춰질 거 같습니다.
            </span>
            <br />
            <span>메뉴가 출시되면 인스타그램으로 공유드릴 예정입니다 :)</span>
          </div>
        </div>
        <Img1 img="assets/magazinePages/tenderlycoffee/9.png" />
        <div className="questAnswer">
          <div className="question">
            <span>
              당장 오늘 방문하는 고객에게 추천해주고 싶은 메뉴가 있나요?
            </span>
          </div>
          <div className="answer">
            <span>
              담백한 것과 달콤한 것 중에 무엇을 좋아하시는 지 먼저 알아야 할 거
              같아요.
            </span>
            <br />
            <span>
              일반적으로는&nbsp;
              <H text={"소금빵과 카야버터 소금빵"}></H>을 추천드리고 싶습니다.
            </span>
            <br />
            <span>
              소금빵과 어울리는 음료는 너티아인슈페너 또는 아몬드 크림 라떼를
              추천드리고 싶고, 카야버터 소금빵은 아메리카노와 같은 담백한 음료가
              어울릴 거 같습니다.
            </span>
          </div>
        </div>
        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>마지막으로, 카페 대관이 가능한가요?</span>
          </div>
          <div className="answer">
            <span>네 맞습니다.</span>
            <br />
            <span>
              <H text={"쇼핑몰"}></H>&nbsp;쪽에서 연락을 많이 주시고 카페에서{" "}
              <H text={"연극 공연"}></H>도 하시더라구요.
            </span>
            <br />
            <span>
              오픈 전 후로 빌리실 수 있고, 오전에 빌릴 경우 오픈이 12시인데 최대
              1시까지는 사용하실 수 있도록 맞춰드리고있습니다.
            </span>
          </div>
        </div>
        <Img1 img="assets/magazinePages/tenderlycoffee/10.png" />
        <SectionSpace></SectionSpace>
        {/* Bottom */}
        <div className="bottom">
          <div className="cafeMenu">
            <div className="menupan cafeMenuTopMargin">메뉴판</div>
            <img
              className="menupanMargin"
              src="assets/magazinePages/tenderlycoffee/menu.png"
              alt=""
            />
          </div>
          <div className="openingHours">
            <div className="openingHourTitle">운영시간</div>
            <br />
            <div className="open">
              <span>월~목 </span>
              <span>&nbsp;12:00 ~ 21:00</span>
            </div>
            <div className="open">
              <span>금~토 </span>
              <span>&nbsp;12:00 ~ 21:00</span>
            </div>
            <div className="open">
              <span>일요일 </span>
              <span>&nbsp;14:00 ~ 21:00</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%85%90%EB%8D%94%EB%A6%AC%EC%BB%A4%ED%94%BC"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;&nbsp;텐더리커피
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/tenderly_coffee/?hl=ko"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.png"
                  alt=""
                />
                &nbsp;&nbsp;@tenderly_coffee
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=텐더리커피&ex=126.9217&ey=37.5657&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;&nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/텐더리커피,37.5657,126.9217"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/kakaomap.png"
                  alt=""
                />
                &nbsp;&nbsp;카카오맵
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <BottomLink></BottomLink>
      <Space></Space>
    </div>
  );
};

export default TDLCoffee;

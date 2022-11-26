import React from "react";
import { useNavigate } from "react-router-dom";
// magazine Components
import {
  BottomLink,
  Space,
  PCMNav,
  MNav,
  H,
  Img1,
  Img2,
  SectionSpace,
  SlideIMG,
} from "./components";
// style
import "../../../style/magazinePages.scss";
import "../../../style/QA.scss";
const Yenani = () => {
  const images = [
    "./assets/magazinePages/yenani/2-1.webp",
    "./assets/magazinePages/yenani/2-2.webp",
    "./assets/magazinePages/yenani/2-3.webp",
    "./assets/magazinePages/yenani/2-4.webp",
    "./assets/magazinePages/yenani/2-5.webp",
    "./assets/magazinePages/yenani/2-6.webp",
    "./assets/magazinePages/yenani/2-7.webp",
  ];
  const nav = useNavigate();
  return (
    <div className="M">
      <PCMNav></PCMNav>
      <MNav></MNav>

      <div id="magazine notoSans" className="magazine">
        <div className="crowdyMagazine">
          크라우디 매거진
          <div onClick={() => nav(-1)} className="goBack">
            <img src="./assets/icon/Back.webp" alt="" />
          </div>
        </div>
        <div className="spaceup"></div>
        <img
          className="magazineThumbnail"
          src="./assets/magazinePages/yenani/1.webp"
          alt=""
        />
        <div className="title">
          <span>섬세함과 깊은 맛으로</span>
          <span>끝남동 어르신들까지 사로잡다</span>
          <span className="address">
            예나니 / 서울 마포구 성미산로17길 112, 1층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">농장에서 직접 공수한 재료로,</span>
          <span>선별된 설탕 및 밀가루,</span>
          <span>직접 만든 콩포트부터 필링지까지.</span>
          <span className="bottomSpan">
            모든 메뉴는 사장님의 손길이 닿아있다.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/cake.webp" alt="" />
              <div>
                시그니처 메뉴<span>계절 과일 생크림 케이크</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.webp" alt="" />
              <div>월~토 11시 ~ 20시</div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.webp" alt="" />
              <div>
                3000원 이상<span>베이커리 기준</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.webp" alt="" />
              <div>
                잠시 가게 앞<span>10분 주차 가능</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table_none.webp" alt="" />
              <div className="toNone">
                테이블 수<span>0개</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/walking.webp" alt="" />
              <div>
                홍대입구역<span>도보 20분</span>
              </div>
            </div>
          </div>
        </div>

        <SlideIMG imgArray={images} />

        <div className="questAnswer">
          <div className="question">
            <span>
              제과를 배우기 위해 일본 제과 전문 학교를 입학하셨다고 들었습니다.
            </span>
          </div>
          <div className="answer">
            <span>네 맞습니다.</span>
            <br />
            <span>
              일본의 <H text="나카무라 제과 아카데미" />를 졸업했습니다.
            </span>
            <span>덕분에 기본기를 제대로 익힐 수 있었습니다.</span>
            <span>
              라인업에 없는 제품도 미리 의뢰만 해주시면 대부분 상품으로
              만들어드릴 수 있어요!
            </span>
          </div>
        </div>

        <Img2
          img1="./assets/magazinePages/yenani/3-1.webp"
          img2="./assets/magazinePages/yenani/3-2.webp"
        />

        <div className="questAnswer">
          <div className="question">
            <span>사장님이 생각하시는 맛있는 빵의 기준은 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="재료와 재료에 대한 상식" />
              이라고 생각합니다.
            </span>
            <br />
            <span>
              아무리 좋은 재료를 사용한다고 해도 사용법을 제대로 모른다면 최상의
              맛을 끌어낼 수 없다고 생각하기 때문에 재료에 대한 상식을 알고 있는
              것이 중요 포인트라고 생각해요.
            </span>
            <br />
            <span>아 물론 저도 매일매일 알아가는 중입니다 😂</span>
          </div>
        </div>
        <Img1 img="assets/magazinePages/yenani/4.webp" />
        <div className="questAnswer">
          <div className="question">
            <span>특별히 못난이 재료를 직접 공수하시는 이유가 있으신가요?</span>
          </div>
          <div className="answer">
            <span>
              무조건 최상급이라고 적혀있는 재료만 좋은 게 아니라, 충분히
              맛있는데 상처 또는 모양/크기 변형으로 상품가치가 떨어져서 농장에서
              그런 상품들만 따로 모아서 판매하는 분들이 계세요.
            </span>
            <br />
            <span>
              아무리 좋은 재료를 사용한다고 해도 사용법을 제대로 모른다면 최상의
              맛을 끌어낼 수 없다고 생각하기 때문에 재료에 대한 상식을 알고 있는
              것이 중요 포인트라고 생각해요.
            </span>
            <br />
            <span>
              그래서 시즌별로 수소문해서 따로 구매를 하여 제품으로 만들고
              있는데, 여름 시즌상품으로 만들었던 옥수수휘낭시에의 초당옥수수도,
              지금의 단호박 제품에 사용되는 단호박도 전부
              <H text=" 속칭 못난이 재료" />를 가지고 만들고 있습니다.
            </span>
            <br />
            <span>맛은 정말 뒤쳐지지 않다고 자신 있게 말씀드릴 수 있어요!</span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/yenani/5-1.webp"
          img2="./assets/magazinePages/yenani/5-2.webp"
        />
        {/* Question 4 */}
        <div className="questAnswer">
          <div className="question">
            <span>휘낭시에 대한 극찬이 많은데요,</span>
            <br />
            <span>인기 비결과 더 맛있게 먹는 방법을 추천해주세요!</span>
          </div>
          <div className="answer">
            <span>
              크기가 작아 먹기 쉽고, 다양한 맛이 있어서 인기가 있는 게 아닐까
              싶습니다.
            </span>
            <br />
            <span>
              휘낭시에의 주재료는 계란흰자, 설탕, 아몬드파우더 등등인데{" "}
              <H text="추가재료 및 재료비율 따라 식감이 달라지는 것" />도 하나의
              특징입니다.
            </span>
            <br />
            <span>먹는 방법도 다양하게 있어요!</span>
            <br />
            <span>쫀득하게 먹고 싶으면 얼려먹고,</span>
            <br />
            <span>부드럽게 먹고 싶으면 그대로 먹고,</span>
            <br />
            <span>
              바삭하게 먹고 싶으면 에어프라이기에 살짝 돌려드시면 됩니다!
            </span>
          </div>
        </div>
        <Img1 img="assets/magazinePages/yenani/6.webp" />

        <div className="questAnswer">
          <div className="question">
            <span>
              메뉴가 다양해서 고르기 힘들 수 있을 것 같아요,추천하는 메뉴가
              있으실까요?
            </span>
          </div>
          <div className="answer">
            <span>
              시그니처 메뉴인 <H text="계절과일 생크림케이크" /> 입니다.
            </span>
            <br />
            <span>
              계절마다 샌드되는 과일이 바뀌고, 생크림도 100% 동물성크림으로
              만들고 있어서 농후하고 아주 촉촉한 게 특징인데요, 커피와 함께
              먹어도 괜찮지만 개인적으로 흰우유와 함께 먹는 것을 추천드립니다.
            </span>
          </div>
        </div>
        <Img1 img="assets/magazinePages/yenani/7.webp" />

        <div className="questAnswer">
          <div className="question">
            <span>
              아낌없이 넣어주는 재료에 비해 하나 같이 가격들이 다 착하네요?
            </span>
          </div>
          <div className="answer">
            <span>
              오픈 때부터 또는 소문을 듣고 찾아와주시는 고객님들 때문인 것
              같아요.
            </span>
            <br />
            <span>
              또한, 요즘에는 동네 어르신들분들도 찾아오셔서 생소하실 수 있는
              휘낭시에같은 메뉴들을 찾아주세요.
            </span>
            <br />
            <span>
              전국에 정말 많고 많은 디저트 집이 있는데 예나니라는 존재를 알고
              와주시는 고객님들께 <H text="재료를 아끼지 않고 최상의 맛" />
              으로 선사하여 감사의 마음을 전하고 싶어요.
            </span>
            <br />
            <span>
              아마 고객님들에게 제 마음이 전달되어 예나니가 조금씩 성장을 하고
              있는 게 아닌가 싶습니다.
            </span>
          </div>
        </div>
        <Img1 img="assets/magazinePages/yenani/8.webp" />
        <div className="questAnswer">
          <div className="question">
            <span>과일을 활용한 시즌 메뉴가 눈에 띄는데요,</span>
            <br />
            <span>
              곧 다가올 가을과 겨울에 선보일 메뉴에 대해 스포를 해주실 수
              있을까요?
            </span>
          </div>
          <div className="answer">
            <span>케이크류 종류가 다양해질 예정입니다.</span>
            <br />
            <span>
              이미 밤휘낭시에가 출시가 됐지만, 밤을 사용한 케이크도 출시될
              예정이고,
            </span>
            <br />
            <span>
              겨울에는 고객뿐만 아니라 많은 제과제빵인들이 기다리고 있는{" "}
              <H text="빨갛고 달달한 그 과일" />이 돌아옵니다.
            </span>
            <br />
            <span>맞춰보세요 😋</span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/yenani/9-1.webp"
          desc1="@_yena_ni_ 게시글"
          img2="./assets/magazinePages/yenani/9-2.webp"
          desc2="@_yena_ni_ 게시글"
        />
        <div className="questAnswer">
          <div className="question">
            <span>혹시 주문 제작도 진행하시나요?</span>
          </div>
          <div className="answer">
            <span>
              요즘 들어, 케이크 주문 제작과 답례품 요청이 많이 들어오는
              편이에요.
            </span>
            <br />
            <span>
              신청을 원하시면 <H text="최소 2일 전까지" />는 말씀해주셔야 저도
              더 완성도 높게 정성을 들여 만들 수 있을 거 같습니다.
            </span>
            <br />
            <span>
              퀵 또는 테이크아웃을 통해서만 이용이 가능한 점 참고해주세요!
            </span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/yenani/10-1.webp"
          img2="./assets/magazinePages/yenani/10-2.webp"
          desc2="@_yena_ni_ 게시글"
        />
        <div className="questAnswer">
          <div className="question">
            <span>예나니 인스타그램에는 어떤 내용을 올리시나요?</span>
          </div>
          <div className="answer">
            <span>
              매장 영업 날에는 <H text="아침 오픈 시간에 맞춰 라인업" />이
              올라가고 있어요!
            </span>
            <br />
            <span>
              1인 매장이다 보니 날마다 라인업이 조금씩 달라져서 정보 전달로
              업로드가 되고 있고, 신상품 및 주문 케이크의 작업물 등을 업로드하고
              있습니다.
            </span>
            <br />
            <span>
              제가 좀 더 여유로워지면 제과 및 재료에 대한 상식들도 올려서
              공유하고 싶어요!
            </span>
          </div>
        </div>
        <Img2
          img1="./assets/magazinePages/yenani/11-1.webp"
          desc1="@_yena_ni_ 게시글"
          img2="./assets/magazinePages/yenani/11-2.webp"
          desc2="@_yena_ni_ 게시글"
        />
        <SectionSpace></SectionSpace>
        <div className="bottom">
          <br />
          <div className="openingHours">
            <div className="openingHourTitle">운영시간</div>
            <br />
            <div className="open">
              <span>월 - 토</span>
              <span>&nbsp;11:00 ~ 20:00</span>
            </div>
            <div className="open">
              <span className="sunday">일요일 &nbsp;정기 휴무</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=0&acr=1&acq=%EC%98%88%EB%82%98%EB%8B%88&qdt=0&ie=utf8&query=%EC%98%88%EB%82%98%EB%8B%88"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;예나니
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/_yena_ni_/"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.webp"
                  alt=""
                />
                &nbsp;@_yena_ni_
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=예나니&ex=126.9171&ey=37.5664&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/예나니,37.5664,126.9171"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/kakaomap.webp"
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

export default Yenani;

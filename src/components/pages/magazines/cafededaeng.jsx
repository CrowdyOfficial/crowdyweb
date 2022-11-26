import React from "react";
import { Link } from "react-router-dom";
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

const asset = "./assets/magazinePages/cafededaeng/";
const Cafededaeng = () => {
  const images = [
    asset + "2-1.webp",
    asset + "2-2.webp",
    asset + "2-3.webp",
    asset + "2-4.webp",
    asset + "2-5.webp",
    asset + "2-6.webp",
    asset + "2-7.webp",
    asset + "2-8.webp",
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
              <img src="./assets/icon/Back.webp" alt="" />
            </Link>
          </div>
        </div>
        <div className="spaceup"></div>
        <img className="magazineThumbnail" src={asset + "1.webp"} alt="" />
        <div className="title">
          <span>고양이를 연상케 하는</span>
          <span>블랙&그레이의 모던 카페</span>
          <span className="address">
            카페 드 댕 / 서울 마포구 동교로 269, 1&2층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">
            단조로운 형상에 국한되지 않고 다채로운 것을 보여주자.
          </span>
          <span>모두의 기호를 만족시킬 수 없어도 모두의 마음에 스며들자.</span>
          <span className="bottomSpan">한 마리 고양이처럼.</span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/coffee.webp" alt="" />
              <div>
                시그니처 메뉴<span>크렘 드 댕</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.webp" alt="" />
              <div>
                매일<span>10시 ~ 22시</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.webp" alt="" />
              <div>
                5000원 이상<span>(음료 기준)</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.webp" alt="" />
              <div>
                주변 공용 주차장 2분 거리<span>250원/5분</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table.webp" alt="" />
              <div>
                테이블 수<span>20 개</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/walking.webp" alt="" />
              <div>
                홍대입구역<span>도보 15분</span>
              </div>
            </div>
          </div>
        </div>

        <SlideIMG imgArray={images} />

        <div className="questAnswer">
          <div className="question">
            <span>카페 이름인 '카페 드 댕'은 무슨 뜻인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="제가 키우는 반려묘의 이름이 댕이입니다." />
            </span>
            <br />
            <span>댕이가 지금은 5살 정도 된 거 같습니다.</span>
            <br />
            <span>댕이 이름으로 카페를 차리는 것이 소원이였습니다!</span>
          </div>
        </div>

        <Img2 img1={asset + "3-1.webp"} img2={asset + "3-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>카페 드 댕에 오면 댕이를 볼 수 있나요?</span>
          </div>
          <div className="answer">
            <span>아쉽게도 댕이는 이 곳에 온 적이 없어요ㅎㅎ</span>
            <br />
            <span>
              대신에 이 곳은 댕이의 매력을 최대한 녹이려고 노력했어요.
            </span>
            <br />
            <span>먼저 댕이의 털 색은 검정과 회색으로 이루어져 있는데요.</span>
            <br />
            <span>
              <H text="블랙 앤 그레이의 모던 컬러와 고양이가 놀 수 있는 동적인 형태의 공간을 보여주길 원했어요." />
            </span>
            <br />
            <span>그래서 입체감과 조명에 포인트를 주었어요.</span>
          </div>
        </div>

        <Img1 img={asset + "4.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>카페 드 댕의 공간에 대해 설명해주세요.</span>
          </div>
          <div className="answer">
            <span>카페 드 댕은 1층과 2층으로 이루어진 공간이에요.</span>
            <br />
            <span>
              <H text="개방적인 분위기를 좋아하신다면 1층을, 조용하고 포근한 공간을 느끼시고 싶으시다면 2층을 추천합니다." />
            </span>
            <br />
            <span>
              방문하셨을 때 공간의 분위기와 더불어 카페 드 댕의 메뉴 또한 심혈을
              기울여 만들고 있기에 공간과 맛으로 여운 깊은 카페로 인지할 수
              있을거에요!
            </span>
          </div>
        </div>

        <Img2 img1={asset + "5-1.webp"} img2={asset + "5-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>
              카페 드 댕에 방문한 많은 분들이 무화과가 들어간 버터바를
              추천하시더라구요,
            </span>
            <br />
            <span>버터바 메뉴에 대해 자세히 설명해주세요.</span>
          </div>
          <div className="answer">
            <span>
              <H text="버터바는 직관적인 향미와 질감을 표현하고자 했던 많은 연구와 시도 덕분에 만들어졌는데요, 많은 분들이 좋아해주셔서 뿌듯합니다." />
              😊
            </span>
            <br />
            <span>
              버터방 대해 설명드리면, 뵈르 누아제트라는 버터를 태우듯이 끓여
              짙은 헤이즐넛의 향을 발현해 내고 바닐레 에센스나 익스트랙이 아닌
              마다가스카르산 바닐라 빈을 사용하여 정말 기분 좋은 은은한 바닐라
              향을 품고 있는 달콤하면서도 쫀득 바삭한 디저트입니다.
            </span>
            <br />
            <span>
              가을 제철 과일인 무화과와 프랑스 생크림을 곁들여 복합적인 풍미를
              즐기실 수 있습니다.
            </span>
          </div>
        </div>
        <Img1 img={asset + "6.webp"} />
        <div className="questAnswer">
          <div className="question">
            <span>손님들이 가장 많이 찾으시는 메뉴는 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="시그니쳐 메뉴인 '크렘 드 댕'입니다." />
            </span>
            <br />
            <span>아인슈페너나 크림라때 메뉴 또한 열기가 식지 않고 있죠.</span>
            <br />
            <span>
              하지만 단순하고 흔한 것이 싫어 복합적인 밀크 베이스를 만들고, 크림
              또한 '크렘'이라는 단어처럼 정말 묵직하고 짙은 풍미를 표현하고자
              했습니다.
            </span>
            <br />
            <span>
              가니쉬로 올라가는 마카다미아도 구워서 갈아내 고소한 풍미를
              표현했습니다.
            </span>
            <br />
            <span>정말 정말 심혈을 기울인 메뉴입니다.</span>
          </div>
        </div>
        <Img2 img1={asset + "7-1.webp"} img2={asset + "7-2.webp"} />
        <div className="questAnswer">
          <div className="question">
            <span>
              카페 드 댕을 이용할 때 유의해야하는 점이거나 꿀팁이 있다면
              무엇인가요?
            </span>
          </div>
          <div className="answer">
            <span>카페 드 댕은 1층과 2층으로 이루어진 공간이에요.</span>
            <br />
            <span>
              <H text="개방적인 분위기를 좋아하신다면 1층을, 조용하고 포근한 공간을 느끼시고 싶으시다면 2층을 추천합니다. " />
            </span>
          </div>
        </div>

        <Img2 img1={asset + "8-1.webp"} img2={asset + "8-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>특히나 추천하는 메뉴와 조합이 있으실까요?</span>
          </div>
          <div className="answer">
            <span>네 있습니다. 방문하신다면 꼭 이 조합으로 드셔보세요.</span>
            <br />
            <span>
              <H text="1. 마르코폴로와 크림브륄레" />
            </span>
            <br />
            <span>2. 애플 시나몬 마롱 치즈 크럼블과 밀크쉐이크</span>
            <br />
            <span>3. 버터바와 아메리카노(또는 크렘 드 댕)</span>
          </div>
        </div>

        <Img2 img1={asset + "9-1.webp"} img2={asset + "9-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>현재 메뉴를 개발 중에 있거나 곧 선보일 메뉴가 있을까요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="솔티 캐러멜과 바닐라 청크를 이용한 *바리에이션 커피와 오페라 케이크 프렌치 브레드 입니다." />
            </span>
            <br />
            <span>
              무화과 철이 지나면 버터바와 크럼블의 *가니쉬가 변경 될 예정입니다.
            </span>
            <br />
            <br />
            <span>*바리에이션 커피:</span>
            <br />
            <span>
              바리에이션 커피는 아메리카노같이 커피만을 마시는게 아니라 다른
              여러가지 설탕, 우유, 초콜릿, 아이스크림 등을 섞어 마시는 커필르
              총칭
            </span>
            <br />
            <span>*가니쉬:</span>
            <br />
            <span>음식의 외형을 돋보이게 하기 위해 음식에 곁들이는 것</span>
          </div>
        </div>
        <Img2 img1={asset + "10-1.webp"} img2={asset + "10-2.webp"} />
        <div className="questAnswer">
          <div className="question">
            <span>
              사장님이 추천하는 연남동을 즐기는 방법 또는 코스가 있을까요?
            </span>
          </div>
          <div className="answer">
            <span>
              저는 연트럴파크 산책길을 걸으며 힐링 하는 것을 좋아해요.
            </span>
            <br />
            <span>
              <H text="배가 고파지면 좋아하는 단골 맛집들을 찾아가 밥을 먹고 카페 드 댕에서 커피 한 잔 하며 쉬는 것이 하루 일과입니다." />
            </span>
            <br />
            <span>
              단골 맛집 한 곳을 소개해드리자면 커페 드 댕 건너편에 있는
              "상해소홀"이라는 중화요리 전문점이 있어요.
            </span>
            <br />
            <span>볶음밥, 꿔바로우, 마파두부.</span>
            <br />
            <span>이 세가지 메뉴는 꼭 추천드립니다.</span>
          </div>
        </div>

        <Img1 img={asset + "11.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>마지막으로 꼭 하고 싶은</span>
            <br />
            <span>이야기가 있다면 말씀해주세요 😊</span>
          </div>
          <div className="answer">
            <span>
              카페 드 댕의 메뉴는 최상급 원재료들로 만들어진다고 자부할 수
              있어요.
            </span>
            <br />
            <span>
              이전에 저 혼자서 메뉴 개발에 힘을 썼지만 지금은 팀원들도 많아지고
              파티셰님도 한 분 계시다보니 최상의 원재료로 더 맛있는 메뉴들을
              뽑아낼 수 있게 되었습니다.
            </span>
            <br />
            <span>
              인테리어가 예쁘면 메뉴의 맛이 떨어질 수 있다는 생각을 가지고 계신
              분이 간혹 있으신데요.
            </span>
            <br />
            <span>
              카페 드 댕의 공간과 메뉴, 두가지 모두 만족감을 드려 방문하시는
              분의 마음속에 스며드는 것이 목표입니다.
            </span>
            <br />
            <br />
            <span>
              <H text="단조로운 형상에 국한되지 않고" />
            </span>
            <br />
            <span>
              <H text="다채로운 것을 보여주고자 합니다." />
            </span>
            <br />
            <span>
              <H text="모두의 기호를 만족시킬 수는 없어도" />
            </span>
            <br />
            <span>
              <H text="모두의 마음에 스며들어 오래 남으려 합니다." />
            </span>
            <br />
            <span>
              <H text="한 마리 고양이처럼" />
            </span>
            <br />
            <span>- 카페 드 댕 -</span>
          </div>
        </div>

        <Img2 img1={asset + "12-1.webp"} img2={asset + "12-2.webp"} />

        <SectionSpace></SectionSpace>
        {/* Bottom */}
        <div className="bottom">
          <div className="cafeMenu">
            <div className="menupan cafeMenuTopMargin">메뉴판</div>
            <img className="menupanMargin" src={asset + "menu.webp"} alt="" />
          </div>
          <div className="openingHours">
            <div className="openingHourTitle">운영시간</div>
            <br />
            <div className="open">
              <span>매일 </span>
              <span>&nbsp;10:00 ~ 22:00</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%B9%B4%ED%8E%98+%EB%93%9C+%EB%8C%95+%EC%97%B0%EB%82%A8"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;카페 드 댕 연남점
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/cafededaeng/"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.webp"
                  alt=""
                />
                &nbsp;@cafededaeng
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=카페 드 댕 연남점&ex=126.9257&ey=37.5639&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/카페 드 댕 연남점,37.5639,126.9257"
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

export default Cafededaeng;

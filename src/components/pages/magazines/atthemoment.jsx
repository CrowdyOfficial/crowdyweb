import React from "react";
import { useNavigate } from "react-router-dom";
import Space from "../Space";
import MNav from "./components/MNav";
import H from "./components/H";
import Img1 from "./components/img1";
import Img2 from "./components/img2";
import "../../../style/magazinePages.scss";
import "../../../style/Intro.scss";

const AtTheMoment = () => {
  const nav = useNavigate();
  return (
    <div className="M">
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
          src="./assets/magazinePages/atthemoment/1.png"
          alt=""
        />
        <div className="title">
          <span>계절의 향과</span>
          <span>글루텐프리 바스크 치즈케이크</span>
          <span className="address">
            앳더모먼트 / 서울 마포구 동교로38길 42-6 102호
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">계절을 나타낸 은은한 향과</span>
          <span>살가운 바람이 존재하는 공간.</span>
          <span className="bottomSpan">
            바스크 치즈케이크를 먹으며 시간의 변화를 느낀다.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/cake.png" alt="" />
              <div>
                시그니처 메뉴<span>밤 바스크 치즈케이크</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.png" alt="" />
              <div>
                월~금 12시 ~ 22시<span>토~일 12시~22시 30분</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.png" alt="" />
              <div>
                5000원 이상<span>(음료 기준)</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.png" alt="" />
              <div>
                주변 공용 주차장<span>250원/분</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table.png" alt="" />
              <div>
                테이블 수<span>10개</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/walking.png" alt="" />
              <div>
                홍대입구역<span>도보 6분</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slideIMGs">
          <img
            className=""
            src="./assets/magazinePages/atthemoment/2-1.png"
            alt=""
          />
        </div>

        <div className="questAnswer">
          <div className="question">
            <span>바스크 치즈 케이크가 뭐죠?</span>
          </div>
          <div className="answer">
            <span>
              바스크 케이크를 설명드리자면, 보통의 빵들은 굽는다는 느낌이라면
              바스크 케이크는 굉장히 고온에서 단기간에 태우는 느낌을 굽는
              방식으로 만들어집니다.
            </span>
            <br />
            <span>
              또한, 케이크의 경우 구워지고 난 후 식히는 시간이 필요한데요,
              바스크 치즈 케이크는 냉장고에서의 더 오랜 숙성이 필요한
              케이크입니다.
            </span>
            <br />
            <span>
              대중적인 빵들과는 굽는 방식이 다르기 때문에, 많이 드시는{" "}
              <H
                text="치즈
              케이크와는 다른 풍미"
              />
              들을 은은하게 더 느끼실 수 있을거에요.
            </span>
          </div>
        </div>
        <Img1 img="./assets/magazinePages/atthemoment/3.png"></Img1>

        <div className="questAnswer">
          <div className="question">
            <span>바스크 치즈 케이크에</span>
            <br />
            <span>밀가루가 들어가지 않았다고요?</span>
          </div>
          <div className="answer">
            <span>네 맞아요.</span>
            <br />
            <span>
              앳더모먼트 바스크 치즈 케이크는 글루텐프리로 놀랍게도{" "}
              <H
                text="밀가루가
              들어가지 않았어요."
              />
            </span>
            <br />
            <span>
              바스크 치즈 케이크 중에서도 크리미한 편에 속하면서 쫀득한 식감을
              자랑하고 많이 달지 않아서 그런지 신기하게도 어르신분들도 많이
              좋아해주실만큼 호불호가 없는 메뉴입니다!
            </span>
          </div>
        </div>

        <Img2
          img1="./assets/magazinePages/atthemoment/4-1.png"
          img2="./assets/magazinePages/atthemoment/4-2.png"
          desc2="@atthemoment_cafe 게시글"
        />

        <div className="questAnswer">
          <div className="question">
            <span>카페가 특이하게 반지하면서 테라스가 있네요?</span>
          </div>
          <div className="answer">
            <span>
              주변을 보면 아시겠지만, 요즘 연남동에 지어지는 건물은 대부분
              반지하층이 있어요.
            </span>
            <br />
            <span>
              저는 카페를 창업하면서 테라스가 있는 카페를{" "}
              <H text="테라스까지 갖춘 카페" />를 열고 싶다고 생각을 했고 지금의
              앳더모먼트의 공간에 카페를 열었습니다.
            </span>
          </div>
        </div>

        <Img1 img="./assets/magazinePages/atthemoment/5.png" />

        <div className="questAnswer">
          <div className="question">
            <span>
              앳더모먼트에서는 계절마다 향을 다르게 피운다고 들었어요.
            </span>
          </div>
          <div className="answer">
            <span>
              저는 매장을 가장 잘 표현할 수 있는 수단이 향이라고 생각해요.
            </span>
            <br />
            <span>
              매장 앞, 테라스 등 곳곳에 향을 많이 활용하고 있어서 자연스럽게
              앳더모먼트만의 향을 맡으실 수 있을거에요.
            </span>
            <br />
            <span>
              크게는 봄, 여름, 가을, 겨울의 <H text="계절을 느낄 수 있는 향" />
              을 준비하고 비가 오거나 눈이 갑자기 오면 그 날의 분위기에 어울리는
              향을 갑자기 바꾸기도 해요.
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>향으로 게절을 어떻게 표현하셨나요?</span>
          </div>
          <div className="answer">
            <span>
              여름에는 여름을 잘 표현할 수 있는{" "}
              <H text="코코넛 베이스의 산뜻한 느낌의 인센스 스틱" />을 가장 많이
              사용했어요.
            </span>
            <br />
            <span>
              요즘에는 요가할 때 많이 쓰는 건초 베이스의 향을, 비가 올 때는
              머스크라든지 우드향을 사용하는 편이에요.
            </span>
            <br />
            <span>겨울에는 또 겨울에 맞는 향을 사용할 생각입니다.</span>
          </div>
        </div>

        <Img2
          img1="./assets/magazinePages/atthemoment/6-1.png"
          img2="./assets/magazinePages/atthemoment/6-2.png"
        />

        <div className="questAnswer">
          <div className="question">
            <span>카페를 창업하기 이전에는 어떤 일을 하셨나요?</span>
          </div>
          <div className="answer">
            <span>
              호텔조리학과를 졸업하고 <H text="요식업계에서 거의 5년을 근무" />
              했어요.
            </span>
            <br />
            <span>
              워낙 예전부터 커피를 좋아해서 자연스럽게 카페 창업에 관심을 가지고
              있었는데 공부하다 보니 베이커리에도 관심을 가지게 되었어요.
            </span>
            <br />
            <span>
              요리 경력이 있어서 일반인에 비해 제빵 공부를 비교적 쉽게할 줄
              알았는데 완전히 다른 영역이더라고요.
            </span>
            <br />
            <span>오히려 제빵이 더 정교하고 어려운 것 같아요.</span>
            <br />
            <span>
              그래서 지금도 계속해서 제빵 공부를 통해 실력을 갈고 닦고 있습니다.
            </span>
          </div>
        </div>

        <Img1 img="./assets/magazinePages/atthemoment/7.png" />

        <div className="questAnswer">
          <div className="question">
            <span>
              앳더모먼트에 대해 사장님이 특별히 신경쓰기는 부분이 있을까요?
            </span>
          </div>
          <div className="answer">
            <span>
              아무래도 <H text="앳더모먼트만의 차별점" />을 항상 고민하는 것
              같아요.
            </span>
            <br />
            <span>
              결국 카페를 운영하는 입장에서 맛의 경쟁력이 가장 큰 차별점이 될
              것이라고 생각했어요.
            </span>
            <br />
            <span>
              리얼 초코 라떼를 만들 때는 보통의 경우 시럽이랑 파우더를 넣지만
              앳더모먼트는 칼리바우트라 초콜릿을 직접 녹여서 만들고 있어요.
            </span>
            <br />
            <span>
              음료를 제조할 때도 바닐라빈 시럽의 최상 등급인 타이티 바닐라빈을
              이용해서 직접 끓이고 숙성시키고 있고요.
            </span>
          </div>
        </div>

        <Img1 img="./assets/magazinePages/atthemoment/8.png" />

        <div className="questAnswer">
          <div className="question">
            <span>앳더모먼트의 시그니처 메뉴는 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              고객님께서 가장 많이 찾으시는 메뉴는 밤 바스크 치즈케이크 입니다.
            </span>
            <br />
            <span>
              근데 제가 추천드리고 싶은 것은{" "}
              <H text="바나나 카라멜 바스크 치즈케이크" />
              인데요.
            </span>
            <br />
            <span>
              이번에 새로 나온 신메뉴이고 맛도 있지만, 다른 바스크 치즈케이크와
              달리 저희 앳더모먼트에서만 드실 수 있는 메뉴이기 때문에 더
              추천드립니다!
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>준비 중인 신메뉴가 있을까요?</span>
          </div>
          <div className="answer">
            <span>
              얼마 전에 <H text="블루베리 에이드, 샤인머스켓 에이드를 출시" />
              했어요!
            </span>
            <br />
            <span>
              베이커리로는 방금 말씀드린 바나나 카라멜 바스크 치즈케이크가
              나왔고요.
            </span>
            <br />
            <span>
              바나나 카라멜 바스크 치즈 케이크에 대해 추가 설명을 드리자면, 직접
              만든 카라멜과 토치로 구운 바나나 특유의 단맛과 스모키한 향을 느낄
              수 있습니다.
            </span>
            <br />
            <span>다른 곳에서는 먹어볼 수 없는 맛일 거에요 😊</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom">
          <div className="cafeMenu">
            <div className="menupan cafeMenuTopMargin">메뉴판</div>
            <img src="assets/magazinePages/atthemoment/menu.png" alt="" />
          </div>
          <div className="openingHours">
            <span className="openingHourTitle">운영시간</span>
            <br />
            <div className="open">
              <span>월~금 </span>
              <span>&nbsp;12:00 ~ 22:00</span>
            </div>
            <div className="open">
              <span>토~일 </span>
              <span>&nbsp;12:00 ~ 22:30</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%95%B3%EB%8D%94%EB%AA%A8%EB%A8%BC%ED%8A%B8&oquery=%ED%85%90%EB%8D%94%EB%A6%AC%EC%BB%A4%ED%94%BC&tqi=hzC72sprvh8sseEMjZlssssstS4-318524"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;앳더모먼트
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/atthemoment_cafe/?hl=ko"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.png"
                  alt=""
                />
                &nbsp;@atthemoment_cafe
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=앳더모먼트&ex=126.9255&ey=37.5611&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/앳더모먼트,37.5611,126.9255"
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
      <div></div>
      <Space></Space>
    </div>
  );
};

export default AtTheMoment;

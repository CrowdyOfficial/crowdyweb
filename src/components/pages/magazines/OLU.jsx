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

const asset = "./assets/magazinePages/olu/";
const OLU = () => {
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
        <img className="magazineThumbnail" src={asset + "1.webp"} alt="" />
        <div className="title">
          <span>에스프레소의</span>
          <span>편견을 깨는 공간</span>
          <span className="address">
            OLU / 서울 마포구 성미산로29안길 11, 1층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">
            에스프레소는 내린지 얼마되지 않을 때 마셔야 온전한 맛을 느낄 수
            있다.
          </span>
          <span>
            달달한 에스프레소를 위해서는 재료는 물론 먹는 타이밍도 중요하며,
          </span>
          <span className="bottomSpan">
            서서 마실 수 있는 스탠딩 테이블도 그런 이유에서 놓여졌다.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/coffee.webp" alt="" />
              <div>
                시그니처 메뉴<span>카페 질리</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.webp" alt="" />
              <div>
                매일<span>11시 ~ 20시</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.webp" alt="" />
              <div>
                2500원 이상<span>(음료 기준)</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.webp" alt="" />
              <div>
                주변 공용 주차장 7분 거리<span>250원/5분</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table.webp" alt="" />
              <div>
                테이블 수<span>8 개</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/walking.webp" alt="" />
              <div>
                홍대입구역<span>도보 9분</span>
              </div>
            </div>
          </div>
        </div>

        <SlideIMG imgArray={images} />

        <div className="qaTitle">소개 Introduce</div>

        <div className="questAnswer">
          <div className="question">
            <span>카페 이름을 ‘OLU’은 무슨 뜻인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="'OLU'라는 이름은 커피를 내리는 모습에서 떠올리게 됐어요." />
              &nbsp;O는 원두, L은 커피를 내리는 모습, U는 컵을 표현한다고
              봐주시면 됩니다.
            </span>
            <br />
            <span></span>
          </div>
        </div>

        <Img2 img1={asset + "3-1.webp"} img2={asset + "3-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>OLU를 창업하시게 된 계기가 궁금합니다.</span>
          </div>
          <div className="answer">
            <span>
              국내에서는 매우 쓴 에스프레소만 맛 봤었어요. 하지만, 원래의
              에스프레소는 씁쓸함 안에 여러가지 맛이 담겨져 있어야하는데 이
              부분이 많은 사람들에게 알려져있지 않더라고요. 그래서 직접
              만들어보기로 했어요.{" "}
              <H
                text="저희를 통해 에스프레소가 대중화됐으면 좋겠고 또 다양한
              베리에이션을 공유하여 많은 분들이 커피의 매력을 느끼셨으면
              좋겠습니다."
              />
            </span>
          </div>
        </div>

        <Img2 img1={asset + "4-1.webp"} img2={asset + "4-2.webp"} />

        <div className="qaTitle">메뉴 Menu</div>

        <div className="questAnswer">
          <div className="question">
            <span>에스프레소를 더 잘 즐길 수 있는 방법이 있나요?</span>
          </div>
          <div className="answer">
            <span>
              에스프레소는 시간이 지날수록 써지기 때문에, 빠르게 마시는 것이
              좋아 스탠딩 자리를 마련했어요. 그래서 개인적으로 처음 와보신다면
              스탠딩으로 드시는 것을 추천을 드립니다.
            </span>
          </div>
        </div>

        <Img1 img={asset + "5.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>OLU의 시그니처 에스프레소 중 하나인</span>
            <br />
            <span> ‘카페 질리’에 대해 자세히 설명해주세요.</span>
          </div>
          <div className="answer">
            <span>
              ‘카페 질리’는 기본 에스프레소에 초코릿 크림이 올라가는 메뉴입니다.
              초콜릿 크림을 먹으면 달달한 맛이 입안에 퍼지고 끝에는 에스프레소가
              살짝 남아있어 쓴 맛으로 마무리돼요.{" "}
              <H text="기본 에스프레소보다는 맛이 그렇게 쓰지 않아 처음 다가가는 사람들한테 추천드리고 있어서 시그니처 메뉴로 선정했습니다." />
            </span>
          </div>
        </div>

        <Img2 img1={asset + "6-1.webp"} img2={asset + "6-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>OLU의 메뉴 중 ‘카페 그라니타’는</span>
            <br />
            <span>1일 한정 수량이 정해져있는데,</span>
            <br />
            <span>그 이유가 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              아무래도 에스프레소를 추출하는 것의 경우 맛을 잃지 않은 상태에서는
              하루에 뽑을 수 있는 양이 한정되어있고 1일 한정 수량만 판매
              중입니다.
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>손님들이 가장 많이 찾으시는 메뉴는 무엇인가요?</span>
            <br />
            <span>(이유도 함께 말씀해주세요.)</span>
          </div>
          <div className="answer">
            <span>
              <H text="처음 오시는 분은 ‘질리’랑 ‘꼰파냐’를 좋아하시고 전문가들은 ‘스트라빠짜또’를 좋아합니다." />{" "}
              스트라빠짜도는 에스프레소에 카카오 파우더가 올라가서 에스프레소의
              쓴 맛과 카카오파우더의 달달함을 동시에 즐길 수 있습니다.
            </span>
          </div>
        </div>
        <Img1 img={asset + "7.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>특히나 추천하는 메뉴와 조합이 있으실까요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="디저트로는 티라미수와 판나코타를 추천드리고 싶어요." />{" "}
              티라미수를 드신다면 기본 에스프레소랑 꼭 같이 드셔보시는 것을
              추천드립니다! 판나코타는 이탈리아 디저트인데 이 메뉴도 달콤해서
              사실 티라미수와 마찬가지로 기본 에스프레소와 같이 드시는 것을
              추천드립니다.
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span></span>
            <br />
            <span>현재 메뉴를 개발 중에 있거나 곧 선보일 메뉴가 있을까요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="저희는 메뉴 개발 기간이 긴 편입니다." /> 6개월에 한번
              정도 신 메뉴가 출시된다고 보시면 돼요. 사실 저번 주 주말에
              신메뉴인 카넬라(이탈리어 시나몬) 에스프레소를 출시했는데, 너무
              향이 세지 않은 시나몬을 올려서 최대한 호불호가 없게 만든 메뉴에요.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "8-1.webp"} img2={asset + "8-2.webp"} />

        <div className="qaTitle">인테리어 Interior</div>

        <div className="questAnswer">
          <div className="question">
            <span>OLU 내부의 우드 디자인이 눈에 띄는데요,</span>
            <br />
            <span>인테리어를 요소 중</span>
            <br />
            <span>가장 신경쓰신 부분은 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="에스프레소를 잘 느낄 수 있는 작은 공간을 만들고 싶었습니다." />{" "}
              그래서 인테리어 도안을 직접 그려가며 셀프 인테리어로 카페를
              꾸몄습니다. 인테리어 포인트는 매장 안쪽에 단상을 올려 무대에
              올라가는 듯한 느낌을 준 것입니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "9-1.webp"} img2={asset + "9-2.webp"} />

        <div className="qaTitle">경험 Experience</div>

        <div className="questAnswer">
          <div className="question">
            <span>커피 애호가분께서</span>
            <br />
            <span>'지금까지 먹은 에스프레소 중 가장 맛있다'라고</span>
            <br />
            <span>말씀주셨습니다.</span>
          </div>
          <div className="answer">
            <span>
              그렇게 말씀주시니 정말 감사합니다.{" "}
              <H
                text="저희는 커피 맛이 변질되지
              않도록 냉난방 온도, 추출 시간, 추출 온도 등 다양한 조건을 조절해서
              에스프레소를 내리고 있는데요."
              />{" "}
              이러한 노력을 알아봐주시는 것 같아 기분이 좋습니다.
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>마지막으로 문항지에는 없지만,</span>
            <br />
            <span>꼭 하고 싶은 이야기가 있다면 말씀해주세요!</span>
          </div>
          <div className="answer">
            <span>
              저희 가게에 오셔서 사진 촬영을 해주시는 분들이 많아요. 정말
              감사하죠. 그런데 에스프레소는 시간이 지날수록 써지기 때문에 내리고
              나서 빠르게 드셔야 본연의 맛을 느끼실 수가 있습니다.{" "}
              <H
                text="그러니 사진을
              최대한 빨리 촬영하시고 맛을 음미하셨으면 좋겠습니다!"
              />
            </span>
          </div>
        </div>
        <Img2 img1={asset + "10-1.webp"} img2={asset + "10-2.webp"} />

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
              <span>&nbsp;11:00 ~ 20:00</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=OLU+%EC%97%B0%EB%82%A8%EB%8F%99"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;언더플로어 연남점
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/olu_espresso_/"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.webp"
                  alt=""
                />
                &nbsp;@olu_espresso_
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=OLU 연남점&ex=126.9228&ey=37.5651&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/OLU 연남점,37.5651,126.9228"
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

export default OLU;

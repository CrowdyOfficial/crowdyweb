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

const asset = "./assets/magazinePages/5to7/";
const C5to7 = () => {
  const images = [
    asset + "2-1.webp",
    asset + "2-2.webp",
    asset + "2-3.webp",
    asset + "2-4.webp",
    asset + "2-5.webp",
    asset + "2-6.webp",
    asset + "2-7.webp",
    asset + "2-9.webp",
    asset + "2-10.webp",
    asset + "2-11.webp",
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
          <span>자유로운 시간 속에서</span>
          <span>느린 수플레를 즐기다</span>
          <span className="address">
            5to7 / 서울 성동구 서울숲2길 44-13, 2&3층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">
            5-7시 사이, 바쁜 삶 속에서 여유를 찾을 수 있는 공간.
          </span>
          <span>
            모두가 더 빠른 것을 추구할 때 이곳은 자유로운 느림을 만끽한다.
          </span>
          <span className="bottomSpan">
            그 자리에서 굽는 수플레, 한 방울씩 내리는 핸드 드립, 앤틱한
            공간까지.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/cake.webp" alt="" />
              <div>
                시그니처 메뉴<span>펄 크림 뷔릴레 수플레</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.webp" alt="" />
              <div>
                매일<span>12시 ~ 21시30분</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.webp" alt="" />
              <div>
                6000원 이상<span>(음료 기준)</span>
              </div>
            </div>
          </div>
          <div className="flexbox secondLine">
            <div className="left">
              <img src="./assets/magazinePages/icons/car.webp" alt="" />
              <div>
                주변 공용 주차장 4분 거리<span>300원/5분</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table.webp" alt="" />
              <div>
                테이블 수(실내)<span>17 개</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/walking.webp" alt="" />
              <div>
                서울숲 역<span>도보 8분</span>
              </div>
            </div>
          </div>
        </div>

        <SlideIMG imgArray={images} />

        <div className="qaTitle">소개 Introduce</div>

        <div className="questAnswer">
          <div className="question">
            <span>카페 이름을 ‘5to7’로</span>
            <br />
            <span>지으신 이유가 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="5시-7시에 ‘자유로운 시간을 즐긴다’ 라는데서 영감을 얻어 매장에서 오셔서 커피한잔을 즐기는 동안 여러 일들에서 벗어나 자유로운 시간을 즐기셨으면 해서 이와 같이 지었습니다." />
            </span>
            <br />
            <span>
              저희는 핸드드립과 수플레 등 모두 시간이 어느정도 걸리는 메뉴들로
              준비하면서 공간에서 시간을 즐기는 그 자체에 집중 할 수 있게 컨셉을
              정했습니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "3-1.webp"} img2={asset + "3-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>‘5to7’에서만</span>
            <br />
            <span>경험할 수 있는 요소가 있다면 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="‘5to7’에서만 경험할 수 있는 요소는 ‘시간’ 그 자체라고 생각합니다." />
            </span>
            <br />
            <span>
              커피 한잔을 내리기 위해 원두를 그라인딩하고 물을 끓이고 내리고. 또
              수플레는 머랭을 그 자리에서 만들고 굽고 하는 시간이 10~15분이
              걸립니다. 이 모든 과정들은 여유로운 공간에서 시간을 편하게 즐길 수
              있도록 하기 위해 만들어진 것입니다.
            </span>
            <br />
            <span>
              가구과 분위기에서 시간의 흐름이 느껴지시겠지만 공간 자체의
              조명들이 어두워 언제 봐도 아늑한 밤 같은 분위기로 퇴근 후의 여유를
              선물하고 있습니다. 바쁜일상에서 시간 자체가 여유롭고 자유로운
              시간을 5to7에서는 만끽할 수 있다고 생각합니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "4-1.webp"} img2={asset + "4-2.webp"} />

        <div className="qaTitle">메뉴 Menu</div>

        <div className="questAnswer">
          <div className="question">
            <span>‘5to7’의 대표 메뉴인</span>
            <br />
            <span>수플레 케이크에 대해 자세히 설명해주세요.</span>
          </div>
          <div className="answer">
            <span>
              수플레는 거품 낸 달걀 흰자에 추가 재료를 첨가하여 그릴에 구워낸
              것으로 팬케이크 같기도 하면서 그 위에 어떤 재료가 올라가느냐에
              따라 맛이 완전히 달라지는 디저트입니다. 외국에서는 팬케이크를
              디저트가 아닌 식사대용인 브런치로 먹기도 합니다. 저희는 디저트로도
              손색없지만 브런치로 먹는다고 했을 때도 손색없을 정도의 양과
              든든함을 주고 싶었습니다.{" "}
              <H
                text="‘5to7’만의 특색있는 크림과 재료 조합을
              통해 시그니처 수플레가 탄생했습니다."
              />
            </span>
            <br />
            <span>
              또한 수플레를 굽는 그릴도 온도가 중요해서 그릴 자체를 구리동판으로
              된 것을 수입해서 사용하고 있습니다. 그렇기 때문에 안정적으로
              굽기의 정도와 식감을 줄 수 있고 이런 포실포실한 수플레 팬케이크와
              어울리는 크림들을 개발해 다양한 크림의 조화를 느낄 수 있는
              것입니다.
            </span>
          </div>
        </div>

        <Img1 img={asset + "5.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>손님들이 가장 많이 찾으시는 메뉴와</span>
            <br />
            <span>그 이유를 말씀해 주세요.</span>
          </div>
          <div className="answer">
            <span>
              가장 많이 찾으시는 메뉴는 ‘오투칠 슈페너’와 ‘펄 크림 뷔릴레
              수플레’ 입니다. ‘오투칠 슈페너’는 커스터드 크림이 올라간 우유
              베이스의 콜드브루 커피를 함께 조합한 ‘5to7’의 시그니처 음료입니다.
              크림 뷔릴레는 기존에 존재하던 디저트 종류 중 하나인데 이를 활용해
              음료를 만든 점에서 손님들이 좋아해 주시는 것 같습니다.
              ‘5to7’에서만 맛보실 수 있다고 자부합니다. 😊
              <H
                text="특히 다른
              곳들과는 차별점을 두기 위해 크림 배합부터 이에 맞는 콜드브루
              제조까지 모두 직접 하고 있습니다."
              />
            </span>
            <br />
            <span>
              디저트로는 ‘크림 펄 크림 뷔릴레 수플레’가 저희 ‘5to7’의 시그니처
              수플레입니다. ‘오투칠 슈페너’에 올라가는 크림을 수플레와 함께
              접목시켜 부드러운 수플레 위에 크림이 부드러움을 한층
              업그레이드시킵니다. 씹는 맛과 재미를 주기 위해 타피오카 펄을
              곁들였는데, 부드러움과 쫀득함이 공존해서 재밌는 식감까지 함께 하실
              수 있습니다.
            </span>
          </div>
        </div>

        <Img1 img={asset + "6.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>특히나 추천하는 메뉴와 조합이 있으실까요?</span>
          </div>
          <div className="answer">
            <span>
              시즌 메뉴를 특히 추천드려요! 겨울에는 딸기, 여름에는 망고를 활용한
              제철 과일을 곁들인 과일 수플레가 있습니다.{" "}
              <H
                text="과일은 매일 가장
              신선하고 좋은 것으로 가락시장에서 받아 사용하고 있어요."
              />{" "}
              무엇보다 정말 맛있는 제철 생과일을 듬뿍 올려주기 때문에 수플레와
              함께 드셨을 때 조금 더 상큼함을 느끼실 수 있습니다.
            </span>
            <br />
            <span>
              제가 좋아하는 조합은 과일 수플레와 패션후루츠 에이드입니다!
              개인적으로 상큼한 것을 좋아하는데요. 저희는 100% 유기농 설탕만을
              사용해 직접 청을 만들어 에이드로 사용하고 있어요~ ‘5to7’만의
              과일청 레시피로 만들어져 달지 않고 상큼해 수플레와도 정말 잘
              어울립니다. 달달한 디저트 말고 조금 가벼운 맛을 원하신다면 이
              조합을 추천 드려요!
            </span>
          </div>
        </div>

        <Img2 img1={asset + "7-1.webp"} img2={asset + "7-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>‘5to7’을 이용할 때</span>
            <br />
            <span>유의해야하는 점이나 꿀팁이 있다면 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              오투칠은 수플레 맛집이기도 하지만 브루잉 커피 전문점입니다!{" "}
              <H
                text="전문
              바리스타들이 직접 로스팅한 원두를 이용해 만든 콜드브루와 핸드 드립
              커피가 유명해요."
              />{" "}
              수플레와 함께 하는 드립커피는 정말 우유와 단팥빵 같은
              조합이랄까요? 커피 향과 갓 나와 푹신하고 따뜻한 수플레는 오늘의
              피로와 수고를 잊게 해주는 것 같아요. ‘5to7’에 오신다면 꼭 드립
              커피를 드셔 보시기를 추천합니다!
            </span>
            <br />
            <span>
              그리고 바쁜시간에 오시기에는 적합한 매장은 아닙니다. 에스프레소
              머신이 없는 공간이라 모든 메뉴가 조금은 시간이 걸리고, 수플레
              팬케이크도 주문 즉시 조리를 하기에 시간이 걸려 바쁜 시간에는
              즐기시기에 아쉬움이 있습니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "8-1.webp"} img2={asset + "8-2.webp"} />

        <div className="qaTitle">인테리어 Interior</div>

        <div className="questAnswer">
          <div className="question">
            <span>‘5to7’만의 감성(브랜딩)이 있는 것 같습니다.</span>
            <br />
            <span>어떤 부분을 가장 신경쓰셨나요?</span>
          </div>
          <div className="answer">
            <span>
              ‘Time to be free (자유로운 시간)’ 슬로건에 맞게 공간은 앤틱한
              분위기를 주었습니다.{" "}
              <H
                text="직접 가구를 동묘나 빈티지 가구상을 돌아서
              구매를 했고 조명들도 전부 수입했습니다."
              />{" "}
              그리고 메뉴들도 기다리는 시간을 즐기실 수 있게 브루잉 커피들과
              수플레를 준비하게 된 것입니다. 이런 감성과 브랜드를 많은 분들이
              좋아해 주시는 것 같아요.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "9-1.webp"} img2={asset + "9-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>사장님이 추천하시는</span>
            <br />
            <span>서울숲 즐기는 방법 또는 코스가 있을까요?</span>
          </div>
          <div className="answer">
            <span>
              <H
                text="저는 개인적으로 디저트를 참 좋아하는데요. 저희 ‘오투칠 수플레’는
              디저트 같으면서도 하나를 다 먹게 되면 큰 팬케이크를 먹은 느낌이
              들기도 합니다."
              />{" "}
              😊 ‘오투칠 수플레’를 하나 드시고 서울숲을 한바퀴 돌면서 여유의
              시간을 즐기다가 당충전을 위해 근처에 위치한 ‘구욱희씨’에가서
              달달한 쿠키하나 드시면 좋을 것 같습니다^^
            </span>
          </div>
        </div>

        <Img2 img1={asset + "10-1.webp"} img2={asset + "10-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>아침, 점심, 저녁에</span>
            <br />
            <span>따라 카페의 모습이 다를 거 같은데요.</span>
            <br />
            <span>시간에 따라 ‘5to7’을 이용하는</span>
            <br />
            <span>고객분들의 선택이 달라지나요?</span>
          </div>
          <div className="answer">
            <span>
              우선 저희가 12시 오픈을 하다 보니 아쉽게도 아침의 손님들은
              맞이하지 못합니다. 점심시간의 손님들은 확실히 수플레와 커피의
              조합을 많이 찾으세요. ‘펄 크림뷔릴레 수플레’와 ‘아.아.’의 조합을
              주로 찾으시네요. 저녁에는 디카페인이나 밀크티와 같은 음료들을 많이
              찾으십니다. 수플레도 말차나 티라미슈 수플레를 더 찾으시구요~
              <H
                text="아무래도 퇴근 후에 찾아주시는 분들이 많으셔서 당이 땡기시나
              봅니다~!"
              />
            </span>
          </div>
        </div>

        <Img2 img1={asset + "11-1.webp"} img2={asset + "11-2.webp"} />

        <div className="qaTitle">경험 Experience</div>

        <div className="questAnswer">
          <div className="question">
            <span>질문 드린 내용 이외에 메뉴에 대해</span>
            <br />
            <span>특별히 언급하고 싶은 내용이 있으신가요?</span>
          </div>
          <div className="answer">
            <span>
              저희는 시중 시럽을 사용하고 있지 않아요. 바닐라빈 시럽을 직접
              만들어 사용하고 있는데, 저희 바닐라빈 라떼를 드신 분들은 어디
              시럽을 사용하느냐고 묻곤 하시더라고요. ‘5to7’만의 특별 바닐라빈
              시럽 레시피로 정성껏 만들고 있습니다. 이렇게 수제 청이나 시럽을
              만들어 사용하는 이유는 아무리 좋은 원두를 사용해 만든 커피도
              시럽이나 그 부재료가 어떻게 들어가느냐에 따라 맛이 달라질 수
              있어요. 커피의 맛에 최대한 어울리는 크림과 시럽을 직접 만들어
              조화롭게 만들어 내는 것에 집중하고 있습니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "12-1.webp"} img2={asset + "12-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>마지막으로 문항지에는 없지만,</span>
            <br />
            <span>꼭 하고 싶은 이야기가 있다면 말씀해 주세요. 😊</span>
          </div>
          <div className="answer">
            <span>
              손님들이 매장에서 행복과 힐링을 느끼고 가셨으면 좋겠습니다. 이제는
              매장에 오셔서 드시는 모든 것들의 맛있음은 당연한 것이라고
              생각해요. 맛은 당연하고 매장에서 느끼는 온기와 노래 그리고
              커피향과 수플레까지 이 모든 것이 하나가 되어 “그 매장에서 되게
              행복했어” 라는 감정을 느끼게 하는 매장이 되고 싶습니다! 그런 모든
              것들이 하나가 될 수 있도록 앞으로 새로운 메뉴와 공간 브랜딩에
              힘쓰고자 합니다. 😊
            </span>
          </div>
        </div>

        <Img2 img1={asset + "13-1.webp"} img2={asset + "13-2.webp"} />

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
              <span>&nbsp;12:00 ~ 21:30</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=5to7+%EC%84%B1%EC%88%98"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;5to7 성수
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/5to7__seongsu"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.webp"
                  alt=""
                />
                &nbsp;@5to7_seongsu
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=5to7 성수&ex=127.0433&ey=37.546&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/5to7 성수,37.546,127.0433"
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

export default C5to7;

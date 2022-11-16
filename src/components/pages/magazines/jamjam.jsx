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

const asset = "./assets/magazinePages/jamjam/";
const Jamjam = () => {
  const images = [
    asset + "2-1.png",
    asset + "2-2.png",
    asset + "2-3.png",
    asset + "2-4.png",
    asset + "2-5.png",
    asset + "2-6.png",
    asset + "2-7.png",
    asset + "2-8.png",
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
          <span>흑임자로 받은 사랑을</span>
          <span>서비스로 보답하다</span>
          <span className="address">
            잼잼 / 서울특별시 마포구 성미산로29길 24 지하 1층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">
            낮과 밤의 분위기가 다르고 시간에 따라 매장의 내부가 조금 바뀌어도
          </span>
          <span>메뉴의 맛과 우리가 추구하는 가치만큼은 변함이 없다.</span>
          <span className="bottomSpan">
            발걸음을 옮겨 방문해주는 사람들을 위해 묵묵히 모든 것을 내줄 뿐.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/coffee.png" alt="" />
              <div>
                시그니처 메뉴<span>흑임자 라떼</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.png" alt="" />
              <div>
                매일<span>11시 ~ 22시</span>
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
                주변 공용 주차장 8분 거리<span>250원/5분</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/table.png" alt="" />
              <div>
                테이블 수<span>12 개</span>
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
            <span>잼잼을 만들기 위해 2년 동안</span>
            <br />
            <span>많은 노력을 하셨다고 들었습니다.</span>
            <br />
            <span>잼잼을 창업하게 된 계기를 말씀해주세요!</span>
          </div>
          <div className="answer">
            <span>
              <H text="소비자가 원하는 니즈를 모두 담은 가게를 꾸리고 싶었습니다." />
            </span>
            <br />
            <span>
              잼잼을 차리기 이전에 창업 컨설턴트를 본업으로 노하우를 쌓고 자금을
              모아 정말 양심적이고 소비자 입장에서 좋아할 만한 요소를 녹여낸
              아지트가 있으면 좋겠다고 생각했습니다.
            </span>
            <br />
            <span>
              '어디가지?'라는 물음표에 어느 날은 식사, 어느 날은 커피, 또 다른
              날은 디저트로 잼잼을 방문하게끔 만들고 싶었습니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "3-1.png"} img2={asset + "3-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>잼잼에서만 경험할 수 있는</span>
            <br />
            <span>요소가 있다면 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>잼잼에서만 경험할 수 있는 요소는 상호작용입니다.</span>
            <br />
            <span>
              우리는 빨리 돈을 벌고 싶다는 생각보다는 오래오래 남아있고 싶다는
              생각을 합니다.
            </span>
            <br />
            <span>
              그렇기 때문에 계절마다 메뉴를 바꾸고 계절에 맞는 과일을 선택해서
              디저트를 만들고 있습니다.
            </span>
            <br />
            <span>
              <H
                text='저희만의 철학이 있다면 "맛없는 메뉴를 입에 넣어드릴 바에 다시
              만들어드린다"입니다.'
              />
            </span>
            <br />
            <span>
              아이스크림이 올라가는 디저트는 쉽게 녹아 아쉬울 수 있으니
              아이스크림을 충분히 다시 리필해드리고 그것을 권장합니다.
            </span>
            <br />
            <span>
              저희는 부족해서 아쉬운 메뉴를 제공하는 것보다 푸짐하고 마음 따듯한
              메뉴를 제공합니다.
            </span>
            <br />
            <span>한 푼 덜 벌어도 한 달 더 오래 만나는 게 좋잖아요.</span>
          </div>
        </div>

        <Img2 img1={asset + "4-1.png"} img2={asset + "4-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>브런치 맛집으로도 알려져있는데요.</span>
            <br />
            <span>그 이유는 무엇이라고 생각하시나요?</span>
          </div>
          <div className="answer">
            <span>감사하게도 가게를 대표하는 메뉴가 참 많습니다.</span>
            <br />
            <span>
              <H
                text="선택과 집중이라는 단어가 유행처럼 번질 때 저희는 흑임자 라떼와
              흑임자 크럼블을 고수했고, 덕분에 정말 큰 인기를 누릴 수
              있었습니다."
              />
            </span>
            <br />
            <span>
              1년 내내 잼잼을 디저트와 커피가 맛있는 공간으로 만드는데 노력했고
              이제는 만족스러운 식사까지 제공하고 싶은 욕심이 생겼습니다.
            </span>
            <br />
            <span>
              선택과 집중으로 확실한 시그니처 커피와 디저트에 이어 지금은
              브런치까지도 확장할 수 있었던 것은 손님들이 저희의 노력을 그만큼
              예쁘게 봐주시는 게 아닐까요?
            </span>
          </div>
        </div>

        <Img2 img1={asset + "5-1.png"} img2={asset + "5-2.jpg"} />

        <div className="questAnswer">
          <div className="question">
            <span>잼잼에는 잼잼만의 감성이 있는 것 같습니다.</span>
            <br />
            <span>이 감성을 만들기 위해</span>
            <br />
            <span>가장 신경 쓰신 부분은 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>잼잼의 모든 좌석에는 등받이가 있습니다.</span>
            <br />
            <span>
              <H
                text="예전에 개인 카페의 특징이 자리가 불편하다는 카페 밈을 보고
              나만큼은 온전히 메뉴를 즐길 수 있는 테이블과 의자를 사용해야겠다고
              생각했습니다."
              />
            </span>
            <br />
            <span>
              테이블과 의자를 고심하여 선택한 이후 평소 즐겨 모으던 소품과
              굿즈를 개인 사무실처럼 구비하고 나니 제법 그림이 나오더라구요.
            </span>
          </div>
        </div>
        <Img2 img1={asset + "6-1.png"} img2={asset + "6-2.png"} />
        <div className="questAnswer">
          <div className="question">
            <span>손님들이 가장 많이 찾으시는 메뉴는 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              단언컨대 말씀드릴 수 있는 것은 지금 잼잼의 인지도를 쌓는데
              흑임자가 정말 큰 역할을 했다는 것입니다.
            </span>
            <br />
            <span>
              <H
                text="아무래도 묵직한 흑임자 크림을 이용한 흑임자 라떼와 흑임자 크럼블이
              예전부터 지금까지 손님들이 가장 많이 찾아주신느 메뉴이죠."
              />
            </span>
            <br />
            <span>
              강릉 "툇마루"에 가서 맛있는 흑임자 라떼를 먹어보고는 "나도 흑임자
              메뉴를 개발하고 싶다"고 생각했고 그 과정에서 되도록이면 속이
              든든했으면 좋겠다는 생각으로 텍스처를 좀 더 꾸덕하게 오랜 시간을
              거쳐 개발했습니다.
            </span>
          </div>
        </div>
        <Img2 img1={asset + "7-1.png"} img2={asset + "7-2.png"} />
        <div className="questAnswer">
          <div className="question">
            <span>잼잼을 이용할 때 유의해야 하는 점 또는 꿀팁이 있을까요?</span>
          </div>
          <div className="answer">
            <span>잼잼은 감사하지만 죄송하게도 웨이팅이 있을 수 있습니다.</span>
            <br />
            <span>
              <H text="현재는 현장에서 대기를 하면 불러드리는 방식으로 진행하고 있습니다." />
            </span>
            <br />
            <span>
              전화를 드려 일일이 친절하게 응대드리고 싶지만 비어있는 자리를
              무분별하게 차지하는 경우가 다반사라 저희의 방침을 고수하고
              있습니다.
            </span>
            <br />
            <span>추가로 저희는 아이스크림을 절약을 하지 않습니다.</span>
            <br />
            <span>
              아이스크림이 추가로 더 필요하시면 언제든 더 드리고 있으니 친절하게
              말씀주시면 쫀득한 아이스크림을 더 드릴게요.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "8-1.png"} img2={asset + "8-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>특히나 추천하는 메뉴와 조합이 있으실까요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="아래 4가지로 명확하게 말씀드릴 수 있을 것 같아요." />
            </span>
            <br />
            <span>첫째는 흑임자 라데와 바질페스토.</span>
            <br />
            <span>둘째는 아이스라떼와 흑임자크럼블.</span>
            <br />
            <span>셋째는 바질페스토와 어글리 프렌치토스트.</span>
            <br />
            <span>넷째는 초콜릿무스와 아메리카노.</span>
          </div>
        </div>

        <Img2 img1={asset + "9-1.png"} img2={asset + "9-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>하루 중 시간에 따라</span>
            <br />
            <span>잼잼의 모습은 어떻게 바뀌나요?</span>
          </div>
          <div className="answer">
            <span>
              <H
                text="잼잼은 한정된 수량의 브런치만 제공하고 재료 소진 시 커피와
              디저트를 즐길 수 있는 공간으로 탈바꿈됩니다."
              />
            </span>
            <br />
            <span>
              매장 안 채광이 가득한 시간을 지나 해가 중천에서 떨어질때 쯤 다른
              곳에서 식사를 마친 분들이 흑임자 라데와 디저트를 드시러 오십니다.
            </span>
            <br />
            <span>
              시간이 지나 살짝 어둑한 저녁 6시가 되면 매장 안에 잔잔히 흐르는
              음악의 플레이리스트와 조명을 바꿔 편안하고 따듯한 가게로 모습을
              바꿉니다.
            </span>
            <br />
            <span>
              커피를 못 드시는 분들을 위해 논커피 흑임자 라떼도 준비를 했으니
              편하게 즐겨주셨으면 좋겠어요.
            </span>
            <br />
            <span>
              주로 오후 6시가 넘어 식사 주문을 하시는 분들이 많은데, 당일 재료가
              소진되는 경우가 많아 오후 4시쯤 브런치 이용이 가능한지 편하게 전화
              주시면 친절하게 답변드리겠습니다.
            </span>
          </div>
        </div>
        <Img2 img1={asset + "10-1.png"} img2={asset + "10-2.png"} />
        <div className="questAnswer">
          <div className="question">
            <span>현재 메뉴를 개발 중에 있거나</span>
            <br />
            <span>곧 선보일 메뉴가 있을까요?</span>
          </div>
          <div className="answer">
            <span>
              크로플은 대부분의 카페에서 제공할 정도로 인기있는 메뉴이지만
              반대로 신선함을 주기 매우 어렵습니다.
            </span>
            <br />
            <span>
              <H
                text="저희는 올해를 목표로 맛있는 크로와상을 구워 코팅한 진한 크림
              크로와상을 개발하고 있어요."
              />
            </span>
          </div>
        </div>

        <Img2 img1={asset + "11-1.png"} img2={asset + "11-2.png"} />

        <div className="questAnswer">
          <div className="question">
            <span>마지막으로 꼭 하고 싶은</span>
            <br />
            <span>이야기가 있다면 말씀해주세요 😊</span>
          </div>
          <div className="answer">
            <span>
              이렇게 인터뷰를 할 기회를 주신 것도 영광이고 여러 매체나 SNS에
              소개가 될 때마다 한편으로는 부끄럽습니다.
            </span>
            <br />
            <span>
              이렇게 잼잼을 소개시켜드릴 때 마다 너무 감사하고 항상 더 잘
              해야겠다는 굳은 다짐이 생겨요.
            </span>
            <br />
            <span>
              <H text="늘 즐겁게 일하고 즐거움을 제공하겠습니다!" />
            </span>
          </div>
        </div>

        <Img1 img={asset + "12.png"} />

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
              <span>매일 </span>
              <span>&nbsp;11:00 ~ 22:00</span>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9E%BC%EC%9E%BC+%EC%B9%B4%ED%8E%98+%EC%97%B0%EB%82%A8%EC%A0%90+&oquery=%EC%9E%BC%EC%9E%BC+%EC%97%B0%EB%82%A8%EC%A0%90+%EC%B9%B4%ED%8E%98&tqi=h2wCHdp0J14ssKiRfD4ssssssRh-371947"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;잼잼 연남점
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/cafe.jamjam/"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.webp"
                  alt=""
                />
                &nbsp;@cafe.jamjam
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=잼잼 연남점&ex=126.9224&ey=37.565&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/잼잼 연남점,37.565,126.922"
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

export default Jamjam;

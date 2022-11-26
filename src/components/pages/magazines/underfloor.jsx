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

const asset = "./assets/magazinePages/underfloor/";
const Underfloor = () => {
  const images = [
    asset + "2-1.webp",
    asset + "2-2.webp",
    asset + "2-3.webp",
    asset + "2-4.webp",
    asset + "2-5.webp",
    asset + "2-6.webp",
    asset + "2-7.webp",
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
          <span>5년간 연남동을 지켜온</span>
          <span>아늑한 아지트</span>
          <span className="address">
            언더플로어 / 서울 마포구 동교로 232 지하 1층
          </span>
        </div>
        <div className="cafeDesc">
          <span className="topSpan">좁은 문을 통해 지하 1층으로 내려오면,</span>
          <span>밖에서는 전혀 예상치 못했던 아늑한 아지트가 나온다.</span>
          <span className="bottomSpan">
            따뜻한 공간, 깊은 맛, 그리고 편안한 좌석까지.
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="flexbox">
            <div className="left">
              <img src="./assets/magazinePages/icons/coffee.webp" alt="" />
              <div>
                시그니처 메뉴<span>없음</span>
              </div>
            </div>
            <div className="center">
              <img src="./assets/magazinePages/icons/alarm.webp" alt="" />
              <div>
                매일<span>13시 ~ 23시</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/magazinePages/icons/won.webp" alt="" />
              <div>
                5500원 이상<span>(음료 기준)</span>
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
            <span>
              카페 이름을 '언더플로어'로 지으신 이유와 언더플로어를 창업하시게
              된 계기가 궁금합니다.
            </span>
          </div>
          <div className="answer">
            <span>
              <H text='저희 카페가 지하에 위치하고 있어서 아래를 뜻하는 "under"와 층을 뜻하는 "floor"의 합성어로 만들었습니다.' />
            </span>
            <br />
            <span>
              사실 지하층을 뜻하는 영단어로는 "basement"와 "floor"가 있지만
              개인적으로 후자가 더 마음에 들어서 언더플로어로 지었습니다.
            </span>
          </div>
        </div>
        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>언더플로어는 커피와 주류를 함께 팔고 있는데</span>
            <br />
            <span>이 같은 결정을 하신 이유가 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="요즘 카페는 음료와 디저트뿐만이 아니라 공간과 분위기 그 자체를 제공하는 곳이라고 생각해요." />
            </span>
            <br />
            <span>
              협소한 저희 공간이 커피와 와인, 그리고 간단한 하이볼과 샹그리아
              정도가 잘 어우러질 수 있는 공간이라는 생각이 들어서 나중에
              추가하게 되었습니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "3-1.webp"} img2={asset + "3-2.webp"} />

        <div className="qaTitle">메뉴 Menu</div>

        <div className="questAnswer">
          <div className="question">
            <span>언더플로어의 시그니처 메뉴는 뭔가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="사실 언더플로어는 시그니처 메뉴가 없습니다." />
            </span>
            <br />
            <span>
              저는 편안한 공간에서 제가 좋아하는 메뉴를 많은 분들도 즐기셨으면
              하는 마음에서 카페를 시작했어요.
            </span>
            <br />
            <span>
              손님들이 좋아하시고 자주 찾으시는 메뉴가 언더플로어의 시그니처
              메뉴가 아닐까요?
            </span>
          </div>
        </div>
        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>개인적으로 더티 초코가 가장 맛있었는데</span>
            <br />
            <span>시그니처 메뉴가 아니었군요..!</span>
          </div>
          <div className="answer">
            <span>네, 더티 초코를 많은 분들이 찾아주시기는 해요.</span>
            <br />
            <span>플레이팅이 예쁘거든요.</span>
            <br />
            <span>
              이름 그대로 더티 플레이팅으로 제공되는데 크림이 흐르는 모양새가
              예뻐서 많이 좋아하시는 것 같아요.
            </span>
            <br />
            <span>말 그대로 "더럽게 예쁜 음료"라고 봐주시면 됩니다.</span>'
            <br />
            <span>
              <H text="지금 생각해보니까 시그니처 메뉴를 굳이 꼽자면 음료중에서는 더티초코, 커피는 크림 모카라는 생각이 드네요." />
            </span>
          </div>
        </div>

        <Img1 img={asset + "4.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>언더플로어는 디저트가 맛잇는 것으로 유명한데,</span>
            <br />
            <span>그 이유는 무엇이라고 생각하세요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="디저트는 사실 제가 좋아하는 라인업으로만 짰습니다." />
            </span>
            <br />
            <span>
              아무래도 직접 베이킹을 하다 보니, 제가 즐기지 않는 디저트는
              이상하게도 맛이 없게 만들어지더라구요.
            </span>
            <br />
            <span>
              그래서 언더플로어의 디저트는 개인적으로 좋아하는 심플하고
              담백하지만 깊은 맛을 내는 메뉴들로 구성되어 있어요.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "5-1.webp"} img2={asset + "5-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>디저트 중에서는 어떤 메뉴가 가장 많이 나가나요?</span>
          </div>
          <div className="answer">
            <span>
              디저트 메뉴는 티라미슈, 퍼지 브라우니, 바스크 치즈케익, 오레오
              레어 치즈케익, 솔티 카라멜 크로와상이 있어요.
            </span>
            <br />
            <span>
              솔직히 정말 모두 비슷하게 찾아주셔서 뭐가 많이 나가는지 정산
              내역을 봐야 알 수 있지만 최근에는 바스크 치즈케익을 엄청 많이
              찾앙주시는 것 같아요.
            </span>
            <br />
            <span>
              다른 곳과는 다르게 바스크 치즈케이크는 살짝 더 크리미한 느낌으로
              굽고 있거든요.
            </span>
            <br />
            <span>
              손님들이 그 이유를 가끔 물어보시고는 하는데 사실 특별한 이유는
              없어요.
            </span>
            <br />
            <span>
              <H text="제가 몇백판을 구워봤는데 크리미한게 제 입맛에 더 맛있더라구요." />
            </span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>몇 백판을 구워보셔다니 정말 대단하십니다..!</span>
            <br />
            <span>그 중에서 특히나 추천하는 메뉴 또는 조합이 있으실까요?</span>
          </div>
          <div className="answer">
            <span>저희 디저트는 주로 달달한 편이에요.</span>
            <br />
            <span>
              <H text="바닐라 아이스크림이 올라간 브라우니에 진한 아메리카노, 아니면 요즘 많이 찾아주시는 부드러운 바스크 치즈케익에 크림 음료를 추천드립니다." />
            </span>
            <br />
            <span>
              “단+단”을 좋아하시는 분들도 계시지만 밸런스를 위해 달달한
              디저트에는 아메리카노를, 크리미한 식감을 느끼실 수 있는 바스크
              치즈케익에는 달달한 크림 음료류(아인슈페너나 더티초코)를
              추천드리고 있어요.
            </span>
            <br />
            <span>또 저희는 베이킹을 전부 직접해요.</span>
            <br />
            <span>
              요즘 베이킹 전문 카페도 정말 많지만, 오븐마다 특징이 다르고 틀마다
              굽는 방식이 다 달라요.
            </span>
            <br />
            <span>
              저는 신메뉴를 하나 만들때마다 직접 저희 오븐으로 적어도 수백번은
              구워보고 테스트해요.
            </span>
            <br />
            <span>
              베이킹은 생각보다 어떤 오븐으로 굽는지, 어떤 틀에, 어떤 방식으로
              어느 장소에서 굽는지가 많은 영향을 주더라고요.
            </span>
            <br />
            <span>그래서 부족하지만 많이 좋아해주시는 것 같아요.</span>
          </div>
        </div>
        <Img1 img={asset + "6.webp"} />

        <div className="qaTitle">인테리어 Interior</div>

        <div className="questAnswer">
          <div className="question">
            <span>언더플로어의 인테리어는</span>
            <br />
            <span>특별한 부분이 있는 것 같아요.</span>
          </div>
          <div className="answer">
            <span>
              사실 아버지께서 건축사무소를 운영하시고 인테리어에도 관심이
              많으셨어요.
            </span>
            <br />
            <span>
              <H text="그래서 언더플로어도 아버지와 함께 셀프 인테리어로 진행하였고 5년이라는 시간 동안 수도 없이 바꿨습니다." />
            </span>
            <br />
            <span>돈도 돈이지만 시간, 정성이 많이 들어간 카페에요.</span>
          </div>
        </div>

        <div className="questAnswer twoQuestion">
          <div className="question">
            <span>카페의 공간에서 가장 중요하게 여기는 요소는 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="제가 가장 중요하게 생각하는 부분은 카페라는 장소는 예쁘면 좋지만 무엇보다 편안해야한다는거에요." />
            </span>
            <br />
            <span>
              간혹 SNS에서 “요즘 인스타 카페 특징”, 이러면서 불편한 의자와 턱
              없이 낮은 테이블을 풍자하는 글들이 가끔 보이잖아요?
            </span>
            <br />
            <span>사실 저도 그런 카페는 잘 안가게 되는 것 같더라고요.</span>
            <br />
            <span>
              그래서 간혹 손님들이 올려주신 블로그 글을 찾아보곤 하는데,
              테이블이 편하고 옆 테이블과의 간격이 여유 있어서 좋다는 글이
              보이면 기분이 좋습니다.
            </span>
            <br />
            <span>예쁘고 편한 공간.</span>
            <br />
            <span>이게 제가 제일 신경쓰는 인테리어 포인트입니다.</span>
          </div>
        </div>

        <Img2 img1={asset + "7-1.webp"} img2={asset + "7-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>제가 앉고 있는 자리도 편안한 이유가 있었군요 :)</span>
            <br />
            <span>그렇다면 언더플로어에서만</span>
            <br />
            <span>경험할 수 있는 요소는 뭐라고 생각하세요?</span>
          </div>
          <div className="answer">
            <span>
              언더플로어에서만 경험할 수 있는지는 잘 모르겠지만 저희는 낮과 밤의
              온도가 달라요.
            </span>
            <br />
            <span>실제 기온이 다르다는 말은 아니고요.</span>
            <br />
            <span>
              햇빛이 잘 들어오지 않는 반지하 카페라는 점을 살려서 낮에는 어둡지
              않게 최대한 조명을 많이 쓰고, 일몰 후에는 조도를 확 낮춰서 BAR
              같은 분위기를 내고 있어요.
            </span>
            <br />
            <span>
              창문이 크고 외부의 불빛이 많이 들어오는 지상의 카페들과는 아무래도
              조금은 다른 분위기를 내고 있죠.
            </span>
            <br />
            <span>
              그래서 지금도 제일 많이 듣는 표현이 ‘이런 곳에 이런 공간이 있을 줄
              몰랐어’ 혹은 ‘아지트같다’ 입니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "8-1.webp"} img2={asset + "8-2.webp"} />

        <div className="qaTitle">경험 Experience</div>

        <div className="questAnswer">
          <div className="question">
            <span>
              확실히 저도 처음 언터플로어를 방문했을 때 “아지트"라는 말이
              떠오르기는 했습니다.
            </span>
            <br />
            <span>
              언더플로어를 이용할 때 유의해야하는 점이거나 꿀팁이 있다면
              무엇인가요?
            </span>
          </div>
          <div className="answer">
            <span>
              저희 매장에 오시는 손님분들 중에서 사진을 촬영하시는 분들이
              많아요.
            </span>
            <br />
            <span>
              인테리어에 신경을 많이 쓴 입장에서는 정말 감사한 일인 것 같아요.
            </span>
            <br />
            <span>
              <H text="하지만 촬영하시느라 언더플로어 메뉴가 가장 맛있을 타이밍을 놓치는 경우가 간혹 있어 아쉬울 때가 많습니다." />
            </span>
            <br />
            <span>
              저희는 크림 음료가 많은 편인데, 크림은 아무래도 퍼지기전에 드셔야
              가장 맛있어요.
            </span>
            <br />
            <span>
              그래서 촬영은 최대한 빠르게 하시고 맛이 변질되기 전에 얼른
              드셨으면 하는 작은 소망이 있습니다.
            </span>
          </div>
        </div>

        <Img2 img1={asset + "9-1.webp"} img2={asset + "9-2.webp"} />

        <div className="questAnswer">
          <div className="question">
            <span>현재 메뉴를 개발 중에 있거나 곧 선보일 메뉴가 있을까요?</span>
          </div>
          <div className="answer">
            <span>
              <H text="지금 디저트 신메뉴를 개발 중에 있습니다." />
            </span>
            <br />
            <span>
              아직 확정된 부분은 없어서 자세한 내용은 언더플로어 인스타로
              공지할게요 :)
            </span>
          </div>
        </div>
        <Img2 img1={asset + "10-1.webp"} img2={asset + "10-2.webp"} />
        <div className="questAnswer">
          <div className="question">
            <span>
              마지막으로 문항지에는 없지만, 꼭 하고 싶은 이야기가 있다면
              말씀해주세요 😊
            </span>
          </div>
          <div className="answer">
            <span>
              <H text="2017년 10월을 시작으로 벌써 5년이 넘는 시간 동안 언더플로어와 함께 했습니다." />
            </span>
            <br />
            <span>
              수 많은 카페들이 있는 연남동에서 많은 분들이 찾아주시고
              좋아해주셔서 가능했던 일이라고 생각해요.
            </span>
            <br />
            <span>항상 감사한 마음으로 더 열심히 하겠습니다.</span>
            <br />
            <span>
              내년 상반기에는 2호점 오픈 준비중에 있으니 항상 좋은 기억으로 남을
              수 있는 그런 공간을 만들도록 노력하겠습니다.
            </span>
            <br />
            <span>감사합니다.</span>
          </div>
        </div>

        <Img2 img1={asset + "11-1.webp"} img2={asset + "11-2.webp"} />

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
                href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%96%B8%EB%8D%94%ED%94%8C%EB%A1%9C%EC%96%B4+%EC%97%B0%EB%82%A8"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;언더플로어 연남점
              </a>
              <a
                className="notoSans"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/underfloor.kr/"
              >
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.webp"
                  alt=""
                />
                &nbsp;@underfloor.kr
              </a>
            </div>
          </div>
          <div className="linkThird">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://m.map.naver.com/route.nhn?menu=route&ename=언더플로어 연남점&ex=126.9244&ey=37.5606&pathType=0&showMap=true"
              >
                <img className="linkicon" src="assets/icon/naver.webp" alt="" />
                &nbsp;네이버맵
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://map.kakao.com/link/to/언더플로어 연남점,37.5606,126.9244"
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

export default Underfloor;

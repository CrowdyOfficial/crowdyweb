import React from "react";
// import QA from "../../QA";
import Space from "../Space";
import "../../../style/magazinePages.scss";
import "../../../style/QA.scss";

const Yenani = () => {
  return (
    <div className="M">
      <div id="magazine notoSans" className="magazine">
        <div className="crowdyMagazine">크라우디 매거진</div>
        <img src="./assets/magazinePages/yenani/1.png" alt="" />
        <div className="title">
          <span>섬세함과 깊은 맛으로</span>
          <span>끝남동 어르신들까지 사로잡다</span>
          <span className="address">
            예나니 / 서울 마포구 성미산로17길 112, 1층
          </span>
        </div>
        <div className="cafeDesc containerDesc">
          <div className="one">
            <img src="./assets/magazinePages/yenani/icons/coffee.png" alt="" />
            <div className="iconDesc">테이크아웃 전문점</div>
          </div>
          <div className="two">
            <img src="./assets/magazinePages/yenani/icons/alarm.png" alt="" />
            <div className="iconDesc">월~토 11시 ~ 20시</div>
          </div>
          <div className="three">
            <img src="./assets/magazinePages/yenani/icons/won.png" alt="" />
            <div className="iconDesc">3000원 이상</div>
          </div>
          <div className="four">
            <img src="./assets/magazinePages/yenani/icons/car.png" alt="" />
            <div className="iconDesc">잠시 10분 주차 가능</div>
          </div>
          <div className="five">
            <img src="./assets/magazinePages/yenani/icons/table.png" alt="" />
            <div className="iconDesc iconDescNone">테이블 수 0개</div>
          </div>
          <div class="six">
            <img src="./assets/magazinePages/yenani/icons/walking.png" alt="" />
            <div className="iconDesc">홍대입구역 도보 20분</div>
          </div>
        </div>
        <img
          className="LereveMenu"
          src="assets/magazinePages/yenani/2-1.png"
          alt=""
        />
        {/* Question 1 */}
        <div className="questAnswer">
          <div className="question">
            <span>
              제과를 배우기 위해 일본 제과 전문 학교를 입학하셨다고 들었습니다.
            </span>
          </div>
          <div className="answer">
            <span>네 맞습니다.</span>
            <br />
            <span>일본의 나카무라 제과 아카데미를 졸업했습니다.</span>
            <span>덕분에 기본기를 제대로 익힐 수 있었습니다.</span>
            <span>
              라인업에 없는 제품도 미리 의뢰만 해주시면 대부분 상품으로
              만들어드릴 수 있어요!
            </span>
          </div>
        </div>
        <div className="imgTwo">
          <img src="./assets/magazinePages/yenani/3-1.png" alt="" />
          <img src="./assets/magazinePages/yenani/3-2.png" alt="" />
        </div>
        {/* Question 2 */}
        <div className="questAnswer">
          <div className="question">
            <span>사장님이 생각하시는 맛있는 빵의 기준은 무엇인가요?</span>
          </div>
          <div className="answer">
            <span>재료와 재료에 대한 상식이라고 생각합니다.</span>
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
        <img
          className="LereveMenu"
          src="assets/magazinePages/yenani/4.png"
          alt=""
        />
        {/* Question 3 */}
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
              지금의 단호박 제품에 사용되는 단호박도 전부 속칭 못난이 재료를
              가지고 만들고 있습니다.
            </span>
            <br />
            <span>맛은 정말 뒤쳐지지 않다고 자신 있게 말씀드릴 수 있어요!</span>
          </div>
        </div>
        {/* 5-1, 5-2 */}
        <div className="imgTwo">
          <img src="./assets/magazinePages/yenani/5-1.png" alt="" />
          <img src="./assets/magazinePages/yenani/5-2.png" alt="" />
        </div>
        {/* Question 4 */}
        <div className="questAnswer">
          <div className="question">
            <span>휘낭시에에 대한 극찬이 많은데요,</span>
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
              휘낭시에의 주재료는 계란흰자, 설탕, 아몬드파우더 등등인데 추가재료
              및 재료비율 따라 식감이 달라지는 것도 하나의 특징입니다.
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
        <img
          className="LereveMenu"
          src="assets/magazinePages/yenani/6.png"
          alt=""
        />
        {/* Question 5 */}
        <div className="questAnswer">
          <div className="question">
            <span>
              메뉴가 다양해서 고르기 힘들 수 있을 것 같아요,추천하는 메뉴가
              있으실까요?
            </span>
          </div>
          <div className="answer">
            <span>시그니처 메뉴인 계절과일 생크림케이크 입니다.</span>
            <br />
            <span>
              계절마다 샌드되는 과일이 바뀌고, 생크림도 100% 동물성크림으로
              만들고 있어서 농후하고 아주 촉촉한 게 특징인데요, 커피와 함께
              먹어도 괜찮지만 개인적으로 흰우유와 함께 먹는 것을 추천드립니다.
            </span>
          </div>
        </div>
        <img
          className="LereveMenu"
          src="assets/magazinePages/yenani/7.png"
          alt=""
        />
        {/* Question 6 */}
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
              와주시는 고객님들께 재료를 아끼지 않고 최상의 맛으로 선사하여
              감사의 마음을 전하고 싶어요.
            </span>
            <br />
            <span>
              아마 고객님들에게 제 마음이 전달되어 예나니가 조금씩 성장을 하고
              있는 게 아닌가 싶습니다.
            </span>
          </div>
        </div>
        <img
          className="LereveMenu"
          src="assets/magazinePages/yenani/8.png"
          alt=""
        />
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
              겨울에는 고객뿐만 아니라 많은 제과제빵인들이 기다리고 있는 빨갛고
              달달한 그 과일이 돌아옵니다.
            </span>
            <br />
            <span>맞춰보세요 😋</span>
          </div>
        </div>
        <div className="imgTwo">
          <img src="./assets/magazinePages/yenani/9-1.png" alt="" />
          <img src="./assets/magazinePages/yenani/9-2.png" alt="" />
        </div>
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
              신청을 원하시면 최소 2일 전까지는 말씀해주셔야 저도 더 완성도 높게
              정성을 들여 만들 수 있을 거 같습니다.
            </span>
            <br />
            <span>
              퀵 또는 테이크아웃을 통해서만 이용이 가능한 점 참고해주세요!
            </span>
          </div>
        </div>
        <div className="imgTwo">
          <img src="./assets/magazinePages/yenani/10-1.png" alt="" />
          <img src="./assets/magazinePages/yenani/10-2.png" alt="" />
        </div>
        <div className="questAnswer">
          <div className="question">
            <span>예나니 인스타그램에는 어떤 내용을 올리시나요?</span>
          </div>
          <div className="answer">
            <span>
              매장 영업 날에는 아침 오픈 시간에 맞춰 라인업이 올라가고 있어요!
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
        <div className="imgTwo">
          <img src="./assets/magazinePages/yenani/11-1.png" alt="" />
          <img src="./assets/magazinePages/yenani/11-2.png" alt="" />
        </div>
        <div className="bottom">
          <span className="address">
            예나니 / 서울 마포구 성미산로17길 112, 1층
          </span>
          <br />
          <div className="openingHours">
            <span>월 - 토</span>
            <span>&nbsp;11:00 ~ 20:00</span>
            <br />
            <span className="sunday">일요일 &nbsp;정기 휴무</span>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">SNS</span>
            <div className="linklink">
              <a target={"_blank"} href="/">
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;예나니
              </a>
              <a href="">
                <img
                  className="linkicon rightlinkicon"
                  src="assets/icon/insta.png"
                  alt=""
                />
                &nbsp;@_yena_ni_
              </a>
            </div>
          </div>
          <div className="linkTwo">
            <span className="titleSNS">길찾기</span>
            <div className="linklink">
              <a target={"_blank"} href="/">
                <img className="linkicon" src="assets/icon/naver.png" alt="" />
                &nbsp;네이버맵
              </a>
              <a href="">
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

export default Yenani;

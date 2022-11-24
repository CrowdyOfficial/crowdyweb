import create from "zustand";

const useStore = create(() => ({
  cafes: {
    /*
    example
    {
        to: "",
        thumbnail: "",
        cafeName: "",
        cafeDesc: "",
      },
    */
    list: [
      // {
      //   to: "/underfloor",
      //   thumbnail: "./assets/magazinePages/underfloor/thumbnail.webp",
      //   cafeName: "언더플로어",
      //   cafeDesc: "5년간 연남동을 지켜온 아늑한 아지트",
      // },
      {
        to: "/cafededaeng",
        thumbnail: "./assets/magazinePages/cafededaeng/thumbnail.webp",
        cafeName: "카페 드 댕",
        cafeDesc: "고양이를 연상케 하는 블랙&그레이의 모던 카페",
      },
      {
        to: "/jamjam",
        thumbnail: "./assets/magazinePages/jamjam/thumbnail.webp",
        cafeName: "잼잼",
        cafeDesc: "흑임자로 받은 사랑을 서비스로 보답하다",
      },
      {
        to: "/pyojeong",
        thumbnail: "./assets/magazinePages/pyojeong/thumbnail.webp",
        cafeName: "표정",
        cafeDesc: "작은 공간에서 구겔호프가 주는 특별함",
      },
      {
        to: "/geeksyeonnam",
        thumbnail: "./assets/magazinePages/geeksyeonnam/thumbnail.webp",
        cafeName: "긱스 연남점",
        cafeDesc: "다양한 종류의 원두에서 나의 커피 취향을 찾다",
      },
      {
        to: "/atthemoment",
        thumbnail:
          "./assets/magazinePages/atthemoment/atthemoment_thumbnail.webp",
        cafeName: "앳더모먼트",
        cafeDesc: "계절의 향과 글루텐프리 바스크 치즈케이크",
      },
      {
        to: "/tenderly",
        thumbnail:
          "./assets/magazinePages/tenderlycoffee/tenderly_thumbnail.webp",
        cafeName: "텐더리커피앤디저트",
        cafeDesc: "따뜻하고 아늑한 공간의 여유로움",
      },
      {
        to: "/yenani",
        thumbnail: "./assets/magazinePages/yenani/yenani_thumbnail.webp",
        cafeName: "예나니",
        cafeDesc: "끝남동의 매력적인 카페, 아기자기한 감성",
      },
    ],
  },

  index: 0,
}));

export default useStore;

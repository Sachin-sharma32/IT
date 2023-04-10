export interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

export interface Author {
  name: string;
  image: Image;
  work: string;
  _id: string;
}

export interface Post {
  author: Author;
  content: [];
  image: Image;
  publishedAt: Date;
  readTime: number;
  summery: string;
  title: string;
  _id: string;
}

export interface Base {
  error: boolean;
  success: boolean;
  message: string;
  posts: Post[];
  cursorVisible: boolean;
  hovering: boolean;
  hoveringRight: boolean;
  hoveringLeft: boolean;
  show: boolean;
}
export interface State {
  base: Base;
}
export interface BlogProps {
  blog: Post;
}

export interface FaqProps {
  i: number;
  selected: number;
  setSelected: (i: number) => void;
  item: {
    title: string;
    details: string;
  };
}
export interface FeatureProps {
  item: string;
  i: number;
}
export interface IndustryProps {
  i: number;
  active: number;
  setActive: (i: number) => void;
  item: {
    title: string;
    image: string;
    desc: string;
  };
  box: any;
}

export interface IndustryMobileProps {
  item: {
    image: string;
    name: string;
  };
  i: number;
  element: number;
  cardRefs: any;
  scaleRef: any;
  isHovering: boolean;
  handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>, j:number) => void;
  handleMouseLeave: () => void;
}

export interface CardPropsX {
  opacity: number,
  x: number[]
}

export interface CardPropsY {
  opacity: number,
  y: number[]
}

export type CardStateProps = CardPropsX | CardPropsY
export interface PlanProps {
  item: {
    title: string;
    desc: string;
    list_back: string[];
    list_front: string[];
  };
  cardFunction: (i: number) => CardStateProps;
  i: number;
}

export interface TestimonialProps{
  index:number,
  item:{
    title:string,
    author:string,
    position: string
  },
  num:number,
  setNum: (n: number) => void
}
export interface IMenu {
  readonly id: number;
  name: string;
  link: string;
}
export interface ITeam {
  readonly id: number;
  name: string;
  surname: string;
  profession: string;
  avatar: string;
  about: string;
}
export interface IFutureTrips {
  readonly id: number;
  readonly month: string;
  day: number;
  city: string;
}

export interface IHeader {
  menuState: boolean;
  toggler: (e: any) => void;
  windowToggle?: () => void;
}

export interface IBlog {
  readonly id: number;
  title: string;
  text: string;
  picture: string;
  date: string;
  author: ITeam;
}
export interface IModelToggler {
  modalToggler: () => void;
}

export interface IModalContext {
  modal: boolean;
  toggle: () => void;
}

interface ISocialLink {
  image: string;
  link: string;
  text: string;
}

export interface ICompanyData {
  about: string;
  adress: {
    city: string;
    street: string;
    house: number;
    office: number;
    way: string;
  };
  googlemap: string;
  telephone: string;
  email: ISocialLink;
  instargam: ISocialLink;
  vk: ISocialLink;
  facebook: ISocialLink;
  whatsapp: ISocialLink;
  telegram: ISocialLink;
}

export interface IMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}
export interface IReviewer {
  readonly id: number;
  score: number;
  name: string;
  surname: string;
  avatar: string;
  review: string;
}
export interface IWorkerData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface IWorker {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IWorkerData[];
}

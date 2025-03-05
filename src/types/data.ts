export interface IData {
  emojis: string[];
  greeting: IGreeting;
  hostInfo: IHostInfo;
  locationInfo: ILocationInfo;
  mapInfo: IMapInfo;
  comment: { [language: string]: string };
  heading: IHeading;
}

export interface IGreeting {
  [language: string]: {
    location: string;
    content: string;
    title: string;
    message: string;
    eventDetail: string;
    eventDetail2: string;
    host: {
      groom: BrideAndGroom;
      bride: BrideAndGroom;
    };
  };
}


export interface BrideAndGroom {
  name: string;
  relation: string;
  parents: Parent[];
}

export interface Parent {
  relation: string;
  name: string;
}

export interface IHostInfo {
  [language: string]: {
    host: string;
    accountInfo: { name: string; relation: string; bank: string; account: string }[];
  }[];
}

export interface IMapInfo {
  [language: string]: {
    address1: string;
    address2: string;
    address3: string;
    address4: string;
  };
}

export interface ILocationInfo {
  [language: string]: { title: string; desc: string }[];
}
export interface IHeading {
  [language: string]: {
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    heading5: string;
  };
}

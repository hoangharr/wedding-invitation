export interface IData {
  languages: string[];
  greeting: {
    en: IGreeting;
    vi: IGreeting;
  };
  hostInfo: {
    en: IHostInfo[];
    vi: IHostInfo[];
  };
  locationInfo: {
    en: ILocationInfo[];
    vi: ILocationInfo[];
  };
  mapInfo: {
    en: IMapInfo;
    vi: IMapInfo;
  };
  comment: {
    en: string;
    vi: string;
  };
  heading: {
    en: IHeading;
    vi: IHeading;
  };
  emojis: string[];
}

export interface IGreeting {
  location: string;
  content: string;
  title: string;
  message: string;
  eventDetail: string;
  eventDetail2: string;
  host: {
    groom: {
      name: string;
      relation: string;
      parents: Parent[];
    };
    bride: {
      name: string;
      relation: string;
      parents: Parent[];
    };
  };
}

type Parent = { relation: string; name: string };

export interface IHostInfo {
  host: string;
  accountInfo: { name: string; relation: string; bank: string; account: string }[];
}

export interface IMapInfo {
  address1: string;
  address2: string;
  address3: string;
  address4: string;
}

export interface ILocationInfo {
  title: string;
  desc: string;
}

export interface IHeading {
  heading1: string;
  heading2: string;
  heading3: string;
  heading4: string;
  heading5: string;
}

export interface ILocation {
  key: string;
  pathname: string;
  search: string;
  hash: string;
  state: {
    referrer: {
      pathname: string;
    }
  }
}

import _ from 'lodash';

export class StateCasterService {

  constructor() {
  }

  getById(dictionary: any, id: string | number) {
    return dictionary[id];
  }

  getList(dictionary: any) {
    return Object.entries(dictionary).map((key: any) => [Number(key), dictionary[key]] );
  }

  getKeys(dictionary: any) {
    return Object.keys(dictionary);
  }

}
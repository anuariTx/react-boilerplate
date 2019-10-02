import _ from 'lodash';

export const getById = (dictionary: any, id: string | number) => {
  return dictionary[id];
}

export const getList = (dictionary: any) => {
  return Object.entries(dictionary).map((key: any) => [Number(key), dictionary[key]] );
}

export const getKeys = (dictionary: any) => {
  return Object.keys(dictionary);
}
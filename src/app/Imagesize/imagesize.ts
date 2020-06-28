
export enum Imagesize {
   POSTER = 'POSTER',PORTRAITS = 'PORTRAITS',OUTDOOR_ADS = 'OUTDOOR_ADS',FLYER = 'FLYER',STANDARD = 'STANDARD',PASSPORT = 'PASSPORT',STANDARD_LARGE = 'STANDARD_LARGE',POSTER_LARGE = 'POSTER_LARGE'
}

export namespace Imagesize {

    export function values() {
      return Object.keys(Imagesize).filter(
        (type) => type !== 'values'
      );
    }
}


export enum Imagesize {
   OUTDOOR_ADS = 'OUTDOOR_ADS',PASSPORT = 'PASSPORT',STANDARD = 'STANDARD',POSTER_LARGE = 'POSTER_LARGE',STANDARD_LARGE = 'STANDARD_LARGE',PORTRAITS = 'PORTRAITS',POSTER = 'POSTER',FLYER = 'FLYER'
}

export namespace Imagesize {

    export function values() {
      return Object.keys(Imagesize).filter(
        (type) => type !== 'values'
      );
    }
}

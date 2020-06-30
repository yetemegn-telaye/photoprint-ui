
export enum Orderstatus {
   PENDING = 'PENDING',DELIVERED = 'DELIVERED',NOT_DELIVERED = 'NOT_DELIVERED',OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY'
}

export namespace Orderstatus {

    export function values() {
      return Object.keys(Orderstatus).filter(
        (type) => type !== 'values'
      );
    }
}

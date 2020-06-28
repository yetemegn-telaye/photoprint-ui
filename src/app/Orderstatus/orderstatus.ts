
export enum Orderstatus {
   OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',NOT_DELIVERED = 'NOT_DELIVERED',DELIVERED = 'DELIVERED',PENDING = 'PENDING'
}

export namespace Orderstatus {

    export function values() {
      return Object.keys(Orderstatus).filter(
        (type) => type !== 'values'
      );
    }
}

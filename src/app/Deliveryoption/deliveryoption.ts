
export enum Deliveryoption {
   CALL_US = 'CALL_US',DELIVERY = 'DELIVERY',PICKUP = 'PICKUP'
}

export namespace Deliveryoption {

    export function values() {
      return Object.keys(Deliveryoption).filter(
        (type) => type !== 'values'
      );
    }
}

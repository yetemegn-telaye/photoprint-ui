
export enum Userrole {
   SHOP_OWNER = 'SHOP_OWNER',ADMIN = 'ADMIN',CLIENT = 'CLIENT'
}

export namespace Userrole {

    export function values() {
      return Object.keys(Userrole).filter(
        (type) => type !== 'values'
      );
    }
}

class Bit {
  /**
   * @param user User name, whos module is it
   * @typeparam user String
   * @param collection Collection name, where module is
   * @param module A name of module in this collection
   * @returns BitModule | BitCollection | BitUser, depends on arguments
   */
  constructor(user: string, collection?: string, module?: string) {
    if (module) {
      return new BitModule(user, <string>collection, <string>module);
    } else if (collection) {
      return new BitCollection(user, <string>collection);
    } else if (user) {
      return new BitUser(user);
    }
  }
}

class BitUser {
  /**
   * @param user User name, whos module is it
   */
  constructor(public user: string) {
  }
  /**
   * @param collection Collection name, where module is
   * @returns BitCollection of your collection
   */
  collection(collection: string): BitCollection {
    return new BitCollection(this.user, collection);
  }
  /**
   * @param collection Collection name, where module is
   * @param module A name of module in this collection
   * @returns BitModule of your module
   */
  require(collection: string, module: string): BitModule {
    return new BitModule(this.user, collection, module);
  }
}

class BitCollection {
  /**
   * @param user User name, whos module is it
   * @param collection Collection name, where module is
   */
  constructor(public user: string, public collection: string) {
  }
  /**
   * @param module A name of module in this collection
   * @returns BitModule of your module
   */
  require(module: string): BitModule {
    return new BitModule(this.user, this.collection, module);
  }
}

class BitModule {
  /**
   * @param user User name, whos module is it
   * @param collection Collection name, where module is
   * @param module A name of module in this collection
   * @returns An imported bit package
   */
  constructor(public user: string, public collection: string, public module: string) {
    return require('@bit/' + user + '.' + collection + '.' + module);
  }
}

module.exports = Bit;
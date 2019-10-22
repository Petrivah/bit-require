declare class Bit {
    /**
     * @param user User name, whos module is it
     * @typeparam user String
     * @param collection Collection name, where module is
     * @param module A name of module in this collection
     * @returns BitModule | BitCollection | BitUser, depends on arguments
     */
    constructor(user: string, collection?: string, module?: string);
}
declare class BitUser {
    user: string;
    /**
     * @param user User name, whos module is it
     */
    constructor(user: string);
    /**
     * @param collection Collection name, where module is
     * @returns BitCollection of your collection
     */
    collection(collection: string): BitCollection;
    /**
     * @param collection Collection name, where module is
     * @param module A name of module in this collection
     * @returns BitModule of your module
     */
    require(collection: string, module: string): BitModule;
}
declare class BitCollection {
    user: string;
    collection: string;
    /**
     * @param user User name, whos module is it
     * @param collection Collection name, where module is
     */
    constructor(user: string, collection: string);
    /**
     * @param module A name of module in this collection
     * @returns BitModule of your module
     */
    require(module: string): BitModule;
}
declare class BitModule {
    user: string;
    collection: string;
    module: string;
    /**
     * @param user User name, whos module is it
     * @param collection Collection name, where module is
     * @param module A name of module in this collection
     * @returns An imported bit package
     */
    constructor(user: string, collection: string, module: string);
}

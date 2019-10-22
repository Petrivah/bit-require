"use strict";
var Bit = /** @class */ (function () {
    /**
     * @param user User name, whos module is it
     * @typeparam user String
     * @param collection Collection name, where module is
     * @param module A name of module in this collection
     * @returns BitModule | BitCollection | BitUser, depends on arguments
     */
    function Bit(user, collection, module) {
        if (module) {
            return new BitModule(user, collection, module);
        }
        else if (collection) {
            return new BitCollection(user, collection);
        }
        else if (user) {
            return new BitUser(user);
        }
    }
    return Bit;
}());
var BitUser = /** @class */ (function () {
    /**
     * @param user User name, whos module is it
     */
    function BitUser(user) {
        this.user = user;
    }
    /**
     * @param collection Collection name, where module is
     * @returns BitCollection of your collection
     */
    BitUser.prototype.collection = function (collection) {
        return new BitCollection(this.user, collection);
    };
    /**
     * @param collection Collection name, where module is
     * @param module A name of module in this collection
     * @returns BitModule of your module
     */
    BitUser.prototype.require = function (collection, module) {
        return new BitModule(this.user, collection, module);
    };
    return BitUser;
}());
var BitCollection = /** @class */ (function () {
    /**
     * @param user User name, whos module is it
     * @param collection Collection name, where module is
     */
    function BitCollection(user, collection) {
        this.user = user;
        this.collection = collection;
    }
    /**
     * @param module A name of module in this collection
     * @returns BitModule of your module
     */
    BitCollection.prototype.require = function (module) {
        return new BitModule(this.user, this.collection, module);
    };
    return BitCollection;
}());
var BitModule = /** @class */ (function () {
    /**
     * @param user User name, whos module is it
     * @param collection Collection name, where module is
     * @param module A name of module in this collection
     * @returns An imported bit package
     */
    function BitModule(user, collection, module) {
        this.user = user;
        this.collection = collection;
        this.module = module;
        return require('@bit/' + user + '.' + collection + '.' + module);
    }
    return BitModule;
}());
module.exports = Bit;

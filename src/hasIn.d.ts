import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const hasIn: hasIn_00;
type hasIn_00 = {
    /**
     * Returns whether or not an object or its prototype chain has a property with
     * the specified name
     *
     * @func
     * @memberOf R
     * @since v0.7.0
     * @category Object
     * @sig s -> {s: x} -> Boolean
     * @param {String} prop The name of the property to check for.
     * @param {Object} obj The object to query.
     * @return {Boolean} Whether the property exists.
     * @example
     *
     *      function Rectangle(width, height) {
     *        this.width = width;
     *        this.height = height;
     *      }
     *      Rectangle.prototype.area = function() {
     *        return this.width * this.height;
     *      };
     *
     *      var square = new Rectangle(2, 2);
     *      R.hasIn('width', square);  //=> true
     *      R.hasIn('area', square);  //=> true
     */
    (property: Property): hasIn_10;
    (_property: PH, object: {
    }): hasIn_01;
    <$SEL extends "11">(): (property: Property, object: {
    }) => hasIn_11;
    <$SEL extends "01">(): (_property: PH, object: {
    }) => hasIn_01;
    <$SEL extends "1">(): (property: Property) => hasIn_10;
    (property: Property, object: {
    }): hasIn_11;
};
type hasIn_10 = {
    (object: {
    }): hasIn_11;
};
type hasIn_01 = {
    (property: Property): hasIn_11;
};
type hasIn_11 = boolean;
export = hasIn;

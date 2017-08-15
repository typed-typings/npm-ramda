import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
declare const project: project_00;
type project_00 = {
    <T, K extends keyof T>(keys: List<K>): project_keyof_10<T, K>;
    <K extends string>(keys: List<K>): project_record_10<K>;
    (keys: Property[]): project_general_10;
    <T>(_keys: PH, list: List<T>): project_keyof_01<T>;
    <K extends string, T extends Record<K, any>>(_keys: PH, list: List<T>): project_record_01<K, T>;
    (_keys: PH, object: List<any>): project_general_01;
    <T, K extends keyof T>(keys: List<K>, list: List<T>): project_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(keys: List<K>, list: List<T>): project_record_11<K, T>;
    (keys: Property[], object: List<any>): project_general_11;
};
type project_keyof_10<T, K extends keyof T> = {
    (list: List<T>): project_keyof_11<T, K>;
};
type project_record_10<K extends string> = {
    <T extends Record<K, any>>(list: List<T>): project_record_11<K, T>;
};
type project_general_10 = {
    (object: List<any>): project_general_11;
};
type project_keyof_01<T> = {
    <K extends keyof T>(keys: List<K>): project_keyof_11<T, K>;
};
type project_record_01<K extends string, T extends Record<K, any>> = {
    (keys: List<K>): project_record_11<K, T>;
};
type project_general_01 = {
    (keys: Property[]): project_general_11;
};
type project_keyof_11<T, K extends keyof T> = Pick<T, K>[];
type project_record_11<K extends string, T extends Record<K, any>> = Pick<T, K>[];
type project_general_11 = any[];
export = project;

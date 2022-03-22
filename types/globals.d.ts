/**
 * Extract the type of single item from an array.
 *
 * E.g.
 *
 * Type Banana = string[]; // array of strings
 * type SingleBanana = ArrayElement<Banana>.
 */
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

/**
 * Global OBJECT Type (Safe).
 * Discouraged to use as it indicates a badly typed object.
 * Only use whenever you have an object of unknown key/value pairs.
 *
 * Note: With unknown, you may not be able to use a value if it contains sub items (array/object).
 */
export interface Keyable {
  [key: string]: unknown;
}

/**
 * Global OBJECT Type (UnSafe).
 * Discouraged to use as it indicates a badly typed object.
 * Use whenever you have an object of unknown key/value pairs with multiple sub items.
 *
 * Since this object is HEAVILY TYPE LOOSE, try to avoid it as much as possible.
 */
export interface KeyableAny {
  [key: string]: any;
}

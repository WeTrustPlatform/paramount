export type OptionalString = string | false | null | undefined;

export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | undefined
  | null;

export type DeepPartial<T> = T extends Primitive
  ? T
  : T extends Function
  ? T
  : T extends Date
  ? T
  : T extends Map<infer K, infer V>
  ? DeepPartialMap<K, V>
  : T extends Set<infer U>
  ? DeepPartialSet<U>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
interface DeepPartialSet<ItemType> extends Set<DeepPartial<ItemType>> {}
interface DeepPartialMap<KeyType, ValueType>
  extends Map<DeepPartial<KeyType>, DeepPartial<ValueType>> {}

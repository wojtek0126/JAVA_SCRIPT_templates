// A grade protip when to use types and when to use interfaces.

type UnknownObject = Record<string, unknown>;
interface KnownObject {
  someAttribute: string;
  someMethod: <Data extends object>(id: string) => Data;
};
type EachData<T extends Array<P>, P> = {
  [I in keyof T]: T[I];
}[keyof T];

type Example<
  C extends boolean = true,
  Tuple extends unknown[] = [1]
> = C extends true ? Example<false, [...Tuple, 1]> : Tuple;
// Example<false, [1, 1]>
type Result = Example; // [1, 1]

type ReverseStr<
  Str extends string,
  Result extends string = ""
> = Str extends `${infer First}${infer Rest}`
  ? ReverseStr<Rest, `${First}${Result}`>
  : Result;

// ReverseStr<e, h>
//  ReverseStr<"", `eh`>
// ReverseStr<e, h>
type AsS = ReverseStr<"he">;

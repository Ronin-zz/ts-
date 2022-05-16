type Examples<T, Res extends string = ""> = T extends `${infer A}${infer B}`
  ? Examples<B, `${A}${Res}`>
  : Res;

// Examples<1, 2>
//  Examples<"", `21`>
// Examples<e, h>

type exa = Examples<"12">;

type isTest<T extends string> = T extends `${infer First}` ? true : false;

type test = isTest<"">;

// 递归的原理，"" 是不继承与两位的空串的
type isBoolean = "" extends `${infer U}${infer S}` ? true : false;

// @ts-expect-error Cannot redeclare block-scoped variable 'global'. ts(2451)
declare const global: typeof globalThis & {
  chai: typeof chai
  expect: typeof expect
  pf: typeof pf
}

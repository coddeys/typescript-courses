//* keyof

type DatePropertyNames = keyof Date

type DateStringPropertyNames = DatePropertyNames & string
type DateSymbolPropertyNames = DatePropertyNames & symbol

async function main() {
  const apiResponse = await Promise.all([
    fetch('https://example.com'),
    Promise.resolve('Titanium White'),
  ])
  type ApiResponseType = typeof apiResponse
}

// const MyAjaxConstructor = CSSRule
// CSSRule.STYLE_RULE
// const myAjax = new CSSRule()

interface Car {
  make: string
  model: string
  year: number
  color: {
    red: string
    green: string
    blue: string
  }
}

let carColor: Car['color'] //✔️ Reaching for something that exists
// let carSomething: Car['not-something-on-car'] //! Reaching for something invalid
let carColorRedComponent: Car['color']['red'] //✔️ Reaching for something nested
let carProperty: Car['color' | 'year'] // ✔️ Passing a union type through the index

import('./09-type-registry/')

export default {}

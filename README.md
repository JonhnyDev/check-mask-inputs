# CHECK-MASK-INPUTS

CheckMaskInput is a library for validating and masking user input in various formats, such as CPF, CNPJ, phone numbers, birth dates, and zip codes. It allows you to check if an input value is valid and to mask it with a specified format.

# Installation:
Installation can be done using npm or yarn. run the following command:
NPM:

```bash
npm install check-mask-input
```

YARN:

```bash
yarn add check-mask-input
```

## USE:
```js

import { CheckMaskInput } from 'check-mask-input';

or

const { CheckMaskInput } = require('check-mask-input');
```

#Usage:
```js
import { CheckMaskInput } from 'check-mask-input';


const CNPJ = CheckMaskInput.cnpj("75114595000105")
console.log('CNPJ', CNPJ.getValue())
console.log('CNPJ', CNPJ.isValid())
const PHONE =  CheckMaskInput.phone("8880000111")
console.log('PHONE', PHONE.getValue())
console.log('PHONE', PHONE.isValid())
const PHONE_BR =  CheckMaskInput.phoneBR("21996173823")
console.log('PHONE BR', PHONE_BR.getValue())
console.log('PHONE BR', PHONE_BR.isValid())
const BIRTH = CheckMaskInput.birth("19960107")
console.log('BIRTH', BIRTH.getValue())
console.log('BIRTH', BIRTH.isValid())
const BIRTH_BR = CheckMaskInput.birthBR("07011996")
console.log('BIRTH BR', BIRTH_BR.getValue())
console.log('BIRTH BR', BIRTH_BR.isValid())
const CPF = CheckMaskInput.cpf("14347813058")
console.log('CPF', CPF.getValue())
console.log('CPF', CPF.isValid())
const CUSTOM = CheckMaskInput.custom("0000000000", "999.99.99.99.9", () => {return true}) //<==== in the custom format you need to define a callback to validate your custom format, since we have no way of knowing which format you expect to receive.
console.log('CUSTOM', CUSTOM.getValue())
console.log('CUSTOM', CUSTOM.isValid())

;(async () => {
    const CEP = CheckMaskInput.cep("22763153") // "22041011" | 22041011
    console.log('CEP', CEP.getValue())
    console.log('CEP', await CEP.isValid())
})()
```

## Supported Methods

| Feature  | Status |
| ------------- | ------------- |
| cpf  | ✅  |
| cnpj  | ✅  |
| phone  | ✅  |
| phoneBR  | ✅  |
| birth  | ✅  |
| birthBR  | ✅  |
| async cep (using cep-promise)  | ✅  |
| custom  | ✅  |
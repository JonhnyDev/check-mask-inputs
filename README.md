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

## Import:
```js

import { CheckMaskInput } from 'check-mask-input';

or

const { CheckMaskInput } = require('check-mask-input');
```
# INPUT FORMAT FORM
# works on any controlled component
```js
        <input
            placeholder="000.000.000-00"
            value={cpf}
            onChange={handleCPFChange}
            className={styles.search}
            maxLength={14}
        />
        function handleCPFChange(e: React.ChangeEvent<HTMLInputElement>) {
            setCPF(formatCPF(CheckMaskInput.cpf(e.target.value).getValue()));
        }
```
# Usage:
```js
import { CheckMaskInput } from 'check-mask-input';


const CNPJ = CheckMaskInput.cnpj("75114595000105")
console.log('CNPJ', CNPJ.getValue()) //75.114.595/0001-05
console.log('CNPJ', CNPJ.isValid())// Output: true
const PHONE =  CheckMaskInput.phone("1112223333")
console.log('PHONE', PHONE.getValue()) //Output: (111)222-3333
console.log('PHONE', PHONE.isValid())// Output: true
const PHONE_BR =  CheckMaskInput.phoneBR("21996173825")
console.log('PHONE BR', PHONE_BR.getValue()) // Output: (21)99617-3825
console.log('PHONE BR', PHONE_BR.isValid()) // Output: true
const BIRTH = CheckMaskInput.birth("19960107")
console.log('BIRTH', BIRTH.getValue()) // Output: 1996-01-07
console.log('BIRTH', BIRTH.isValid()) // Output: true
const BIRTH_BR = CheckMaskInput.birthBR("07011996")
console.log('BIRTH BR', BIRTH_BR.getValue()) // Output: 07/01/1996
console.log('BIRTH BR', BIRTH_BR.isValid()) // Output: true
const CPF = CheckMaskInput.cpf("14347813058")
console.log('CPF', CPF.getValue()) // Output: 143.478.130-58
console.log('CPF', CPF.isValid()) // Output: true
const CUSTOM = CheckMaskInput.custom("0000000000", "999.99.99.99.9", () => {return true}) //<==== in the custom format you need to define a callback to validate your custom format, since we have no way of knowing which format you expect to receive.
console.log('CUSTOM', CUSTOM.getValue()) // Output: 000.00.00.00.0
console.log('CUSTOM', CUSTOM.isValid()) // Output: true

;(async () => {
    const CEP = CheckMaskInput.cep("22763153") // "22041011" | 22041011
    console.log('CEP', CEP.getValue()) // Output: 22041-011
    console.log('CEP', await CEP.isValid()) // Output: true
    console.log('CEP', CEP.extraData) /* Output: {
                                            cep: '05010000',
                                            state: 'SP',
                                            city: 'São Paulo',
                                            neighborhood: 'Perdizes',
                                            street: 'Rua Caiubi',
                                            service: 'brasilapi'
                                        }*/
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
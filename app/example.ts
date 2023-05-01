import { CheckMaskInput } from '../src/index'

const CNPJ = CheckMaskInput.cnpj("75114595000105")
console.log('CNPJ', CNPJ.getValue())
console.log('CNPJ', CNPJ.isValid())
const PHONE =  CheckMaskInput.phone("1112223333")
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
    const CEP = await CheckMaskInput.cep("05010000") // "05010000" | 05010000
    console.log('CEP', CEP.getValue())
    console.log('CEP', CEP.isValid())
    if(CEP.extraData){
        console.log('cep', CEP.extraData.cep)
        console.log('localidade', CEP.extraData.localidade)
        console.log('bairro', CEP.extraData.bairro)
        console.log('logradouro', CEP.extraData.logradouro)
        console.log('uf', CEP.extraData.uf)
    }
})()
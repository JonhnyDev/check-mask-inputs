import { isValid } from './valids'

type Value = string | number

interface Response {
    getValue: () => string
    isValid: () => boolean
    extraData: false
}
interface CEP {
  cep: string,
  state: string,
  city: string,
  neighborhood: string,
  street: string,
  service: string
}
interface ValidResponseCEP {
    getValue: () => string
    isValid: () => boolean
    extraData: CEP
}

interface InvalidResponseCEP {
    getValue: () => string
    isValid: () => boolean
    extraData: false
}
type ResponseCEP = ValidResponseCEP | InvalidResponseCEP;
class CheckMaskInput {
    public static cpf(value: Value): Response {
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "999.999.999-99")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.cpf(formatValue),
            extraData: false
        }
    } 
    public static cnpj(value: Value): Response{
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "99.999.999/9999-99")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.cnpj(formatValue),
            extraData: false
        }
    }
    public static phoneBR(value: Value): Response{
        const CleanValue = this.clean(value)
        const formatValue = this.mask(CleanValue, "(99)99999-9999")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.phoneBR(formatValue),
            extraData: false
        }
    }
    public static phone(value: Value): Response{
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "(999)999-9999")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.phone(formatValue),
            extraData: false
        }
    }
    public static birthBR(value: Value): Response{
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "99/99/9999")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.birthBR(formatValue),
            extraData: false
        }
    }
    public static birth(value: Value): Response {
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "9999-99-99")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.birth(formatValue),
            extraData: false
        }
    }
    public static async cep(value: Value): Promise<ResponseCEP> {
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "99999-999")
        const checkCEP = await isValid.cep(formatValue)
        return {
            getValue: () => formatValue,
            isValid: () => checkCEP ? true : false,
            extraData: checkCEP
        }
    }
    public static custom(value: Value, format: string, cb: Function): Response {
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, format)
        return {
            getValue: () => formatValue,
            isValid: () => cb(formatValue),
            extraData: false
        }
    }
    private static clean(value: Value): string {
        value = value.toString()
        value = value.replace(/\D/g, '');
        return value
    }
    private static mask(value: string, mask: string) {
        let maskedValue = '';
        let maskIndex = 0;
        const maskLength = mask.length;

        for (let i = 0; i < value.length && maskIndex < maskLength; i++) {
            const maskChar = mask.charAt(maskIndex);

            if (maskChar === '9') {
                maskedValue += value.charAt(i);
            } else {
                maskedValue += maskChar;
                maskedValue += value.charAt(i);
                maskIndex++;
            }
            maskIndex++;
        }

        return maskedValue;
    }
}

export { CheckMaskInput }

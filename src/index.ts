import { isValid } from './valids'

type Value = string | number
class CheckMaskInput {
    public static cpf(value: Value){
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "999.999.999-99")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.cpf(formatValue)
        }
    } 
    public static cnpj(value: Value){
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "99.999.999/9999-99")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.cnpj(formatValue)
        }
    }
    public static phoneBR(value: Value){
        const CleanValue = this.clean(value)
        const formatValue = this.mask(CleanValue, "(99)99999-9999")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.phoneBR(formatValue)
        }
    }
    public static phone(value: Value){
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "(999)999-9999")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.phone(formatValue)
        }
    }
    public static birthBR(value: Value){
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "99/99/9999")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.birthBR(formatValue)
        }
    }
    public static birth(value: Value){
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "9999-99-99")
        return {
            getValue: () => formatValue,
            isValid: () => isValid.birth(formatValue)
        }
    }
    public static cep(value: Value){
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, "99999-999")
        return {
            getValue: () => formatValue,
            isValid: async () => await isValid.cep(formatValue)
        }
    }
    public static custom(value: Value, format: string, cb: Function){
        const cleanValue = this.clean(value)
        const formatValue = this.mask(cleanValue, format)
        return {
            getValue: () => formatValue,
            isValid: () => cb(formatValue)
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

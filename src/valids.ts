
import axios from 'axios';
import { CEP } from './index'
class isValid {
    public static cpf(value: string){
        let cpf = value.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false
        let result = true
        let calc = [9, 10]

        calc.forEach((j) => {
            let sum = 0
            let r
            cpf
            .split(/(?=)/)
            .splice(0, j)
            .forEach((e, i) => {
                sum += parseInt(e) * (j + 2 - (i + 1))
            })
            r = sum % 11
            r = r < 2 ? 0 : 11 - r
            if (r !== parseInt(cpf.substring(j, j + 1))) result = false
        })
        return result
    }

    public static cnpj(value: string): boolean {
        let cnpj = value.replace(/[^\d]+/g, '');

        if (cnpj.length !== 14) {
            return false;
        }

        // Valida DVs
        let size = cnpj.length - 2;
        let numbers = cnpj.substring(0, size);
        let digits = cnpj.substring(size);
        let soma = 0;
        let pos = size - 7;
        for (let i = size; i >= 1; i--) {
            soma += Number(numbers.charAt(size - i)) * pos--;
            if (pos < 2) {
            pos = 9;
            }
        }
        let result = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (result !== Number(digits.charAt(0))) {
            return false;
        }

        size = size + 1;
        let numbers2 = cnpj.substring(0, size);
        soma = 0;
        pos = size - 7;
        for (let i = size; i >= 1; i--) {
            soma += Number(numbers2.charAt(size - i)) * pos--;
            if (pos < 2) {
            pos = 9;
            }
        }
        let result2 = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (result2 !== Number(digits.charAt(1))) {
            return false;
        }

        return true;
    }

    public static async cep(value: string){
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
            if(response.status === 200){
                return response.data as CEP
            }
            return false;
        } catch (error){
            console.log(error)
            return false;
        }
    }
    public static birthBR(value: string):boolean {
        const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
        const match = value.match(dateRegex);
        if (!match) return false
        const [_, day, month, year] = match;
        const date = new Date(`${year}-${month}-${day}`);
        if (isNaN(date.getTime())) return false
        return  true
    }
    public static birth(value: string): boolean {
        const dateRegex = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
        const match = value.match(dateRegex);
        if (!match) return false;
        const [_, day, month, year] = match;
        const date = new Date(`${day}/${month}/${year}`);
        if (isNaN(date.getTime())) return false;
        return true;
    }
    public static phoneBR(value: string):boolean {
        const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        return phoneRegex.test(value);
    }
    public static phone(value: string):boolean {
        const phoneRegex = /^\(?\d{3}\)?[\s-]?\d{3}-?\d{4}$/;
        return phoneRegex.test(value);
    }
}

export { isValid }
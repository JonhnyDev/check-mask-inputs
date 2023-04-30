import { CheckMaskInput } from '../src';

describe('CheckMaskInput', () => {
  describe('cpf', () => {
    test('should mask value correctly', () => {
      const cpf = CheckMaskInput.cpf('12345678900');
      expect(cpf.getValue()).toBe('123.456.789-00');
    });

    test('should return true for valid cpf', () => {
      const cpf = CheckMaskInput.cpf('123.456.789-09');
      expect(cpf.isValid()).toBe(true);
    });

    test('should return false for invalid cpf', () => {
      const cpf = CheckMaskInput.cpf('123.456.789-10');
      expect(cpf.isValid()).toBe(false);
    });
  });

  describe('cnpj', () => {
    test('should mask value correctly', () => {
      const cnpj = CheckMaskInput.cnpj('12345678000190');
      expect(cnpj.getValue()).toBe('12.345.678/0001-90');
    });

    test('should return true for valid cnpj', () => {
      const cnpj = CheckMaskInput.cnpj('75114595000105');
      expect(cnpj.isValid()).toBe(true);
    });

    test('should return false for invalid cnpj', () => {
      const cnpj = CheckMaskInput.cnpj('12.345.678/0001-91');
      expect(cnpj.isValid()).toBe(false);
    });
  });
});
describe('birth', () => {
  test('should return true for a valid date in the format YYYY-MM-DD', () => {
    const value = '1996-01-07';
    const { isValid } = CheckMaskInput.birth(value);
    expect(isValid()).toBe(true);
  });

  test('should return false for an invalid date in the format YYYY-MM-DD', () => {
    const value = '1996-13-07';
    const { isValid } = CheckMaskInput.birth(value);
    expect(isValid()).toBe(false);
  });

  test('should return false for an invalid value', () => {
    const value = 'foo';
    const { isValid } = CheckMaskInput.birth(value);
    expect(isValid()).toBe(false);
  });
});
describe('birthBR', () => {
  test('should return true for a valid date in the format DD/MM/YYYY', () => {
    const value = '07/01/1996';
    const { isValid } = CheckMaskInput.birthBR(value);
    expect(isValid()).toBe(true);
  });

  test('should return false for an invalid date in the format DD/MM/YYYY', () => {
    const value = '32/01/1996';
    const { isValid } = CheckMaskInput.birthBR(value);
    expect(isValid()).toBe(false);
  });

  test('should return false for an invalid value', () => {
    const value = 'foo';
    const { isValid } = CheckMaskInput.birthBR(value);
    expect(isValid()).toBe(false);
  });
});

  describe('phone', () => {
    it('should format phone number with parentheses and dashes', () => {
      const phoneNumber = '1234567890';
      const formattedPhoneNumber = CheckMaskInput.phone(phoneNumber).getValue();
      expect(formattedPhoneNumber).toEqual('(123)456-7890');
    });

    it('should validate a valid phone number', () => {
      const validPhoneNumber = '1234567890';
      const isValid = CheckMaskInput.phone(validPhoneNumber).isValid();
      expect(isValid).toBe(true);
    });

    it('should not validate an invalid phone number', () => {
      const invalidPhoneNumber = '123456789';
      const isValid = CheckMaskInput.phone(invalidPhoneNumber).isValid();
      expect(isValid).toBe(false);
    });
  });

  describe('phoneBR', () => {
    it('should format phone number with parentheses and dashes', () => {
      const phoneNumber = '21999999999';
      const formattedPhoneNumber = CheckMaskInput.phoneBR(phoneNumber).getValue();
      expect(formattedPhoneNumber).toEqual('(21)99999-9999');
    });

    it('should validate a valid phone number', () => {
      const validPhoneNumber = '21999999999';
      const isValid = CheckMaskInput.phoneBR(validPhoneNumber).isValid();
      expect(isValid).toBe(true);
    });

    it('should not validate an invalid phone number', () => {
      const invalidPhoneNumber = '123456789';
      const isValid = CheckMaskInput.phoneBR(invalidPhoneNumber).isValid();
      expect(isValid).toBe(false);
    });
  });
    describe('cep', () => {
      test('valid CEP', async () => {
        const cep = '05010000';
        const cepCheck = CheckMaskInput.cep(cep);
        expect(cepCheck.getValue()).toBe('05010-000');
        expect(await cepCheck.isValid()).toBe(true);
      });

      test('invalid CEP', async () => {
        const cep = '12345';
        const cepCheck = CheckMaskInput.cep(cep);
        expect(cepCheck.getValue()).toBe('12345');
        expect(await cepCheck.isValid()).toBe(false);
      });
    });

    describe('custom', () => {
      test('valid custom format', () => {
        const value = '12345678';
        const format = '9999-9999';
        const customCheck = CheckMaskInput.custom(value, format, (value: string) => value.length === 9);
        expect(customCheck.getValue()).toBe('1234-5678');
        expect(customCheck.isValid()).toBe(true);
      });

      test('invalid custom format', () => {
        const value = '12345';
        const format = '999.999';
        const customCheck = CheckMaskInput.custom(value, format, (value: string) => value.length === 7);
        expect(customCheck.getValue()).toBe('123.45');
        expect(customCheck.isValid()).toBe(false);
      });
    });
  

import { describe, expect, test, fireEvent, assert } from "vitest"
import renderer from 'react-test-renderer';
import FormCreateProduct from '../form/form-product';

function containsSymbol(value) {
   return /[!@#$%^&*(),.?":{}|<>]/.test(value);
}


function sum(a, b) {
   return a + b
}

describe('Math test', () => {
   test('sum a plus b', () => {
      expect(sum(1, 3)).toBe(4)
   })
}),


describe('Form Input Test', () => {
   it('should show an error message when the input is invalid', () => {
      const { getByLabelText, getByText } = renderer.create(<FormCreateProduct />);
      const productInput = getByLabelText('Product Name');

      const submitButton = getByText('Submit');

      fireEvent.change(productInput, { target: { value: 'Product Satu' } });
      fireEvent.click(submitButton);

      expect(containsSymbol(productInput.value)).toBe(false);
   });
});

import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue';
import PasswordValidatorForm from '@/components/PasswordValidatorForm.vue';

describe('Password validator form', () => {
  it('should render form title', () => {
    const { queryByText } = render(PasswordValidatorForm)    
    expect(queryByText('Password Validator')).not.toBeNull()
  })

  it('should render a user input', () => {
    const { queryByPlaceholderText } = render(PasswordValidatorForm)    
    expect(queryByPlaceholderText('Introduce tu contraseña')).not.toBeNull()
  });
})
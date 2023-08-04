import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue';
import PasswordValidatorForm from '@/components/PasswordValidatorForm.vue';

describe('Password validator form', () => {
  it('renders form title', () => {
    const { queryByText } = render(PasswordValidatorForm)    
    expect(queryByText('Password Validator')).not.toBeNull()
  })
})
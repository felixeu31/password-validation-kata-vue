import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { render, type RenderResult } from '@testing-library/vue';
import PasswordValidatorForm from '@/components/PasswordValidatorForm.vue';

describe('Password validator form', () => {

  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(PasswordValidatorForm)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render form title', () => {   
    expect(wrapper.queryByText('Password Validator')).not.toBeNull()
  })

  it('should render a user input', () => {  
    expect(wrapper.queryByPlaceholderText('Introduce tu contraseña')).not.toBeNull() 
  });

  
  it('should render a button', () => {  
    expect(wrapper.queryByText('Enviar consulta')).not.toBeNull() 
  });
})
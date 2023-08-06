import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { render, type RenderResult } from '@testing-library/vue';
import PasswordValidatorForm from '@/components/PasswordValidatorForm.vue';
import userEvent from '@testing-library/user-event'

describe('Password validator form', () => {

  let wrapper: RenderResult

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render form title', () => {   
    wrapper = render(PasswordValidatorForm)
    expect(wrapper.queryByText('Password Validator')).not.toBeNull()
  })

  it('should render a user input', () => {  
    wrapper = render(PasswordValidatorForm)
    expect(wrapper.queryByPlaceholderText('Introduce tu contraseña')).not.toBeNull() 
  });

  
  it('should render a button', () => {  
    wrapper = render(PasswordValidatorForm)
    expect(wrapper.queryByText('Enviar consulta')).not.toBeNull() 
  });

  it('should show an error when password is to short', async () => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByPlaceholderText('Introduce tu contraseña'))
    await userEvent.keyboard('short1')
    await userEvent.click(wrapper.getByText('Enviar consulta'))

    expect(wrapper.queryByText('Password should have at leat 8 characters')).not.toBeNull()
  });
})
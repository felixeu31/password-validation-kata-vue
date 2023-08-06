import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { render, type RenderResult } from '@testing-library/vue';
import PasswordValidatorForm, { LABELS, ERRORMESSAGES } from '@/components/PasswordValidatorForm.vue';
import userEvent from '@testing-library/user-event'

describe('Password validator form', () => {

  let wrapper: RenderResult

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render form title', () => {   
    wrapper = render(PasswordValidatorForm)
    expect(wrapper.queryByText(LABELS.FormTitle)).not.toBeNull()
  })

  it('should render a user input', () => {  
    wrapper = render(PasswordValidatorForm)
    expect(wrapper.queryByPlaceholderText(LABELS.InputPlaceHolder)).not.toBeNull() 
  });

  
  it('should render a button', () => {  
    wrapper = render(PasswordValidatorForm)
    expect(wrapper.queryByText(LABELS.ValidateButton_Text)).not.toBeNull() 
  });
  
  it.each([
    ['short1'],
    ['short2']
  ])('should show an error when password is to short', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByPlaceholderText(LABELS.InputPlaceHolder))
    await userEvent.keyboard(password)
    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.TooShort)).not.toBeNull()
  });
})
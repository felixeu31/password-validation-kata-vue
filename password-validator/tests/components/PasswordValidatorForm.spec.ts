import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { render, type RenderResult } from '@testing-library/vue';
import PasswordValidatorForm, { LABELS, ERRORMESSAGES } from '@/components/PasswordValidatorForm.vue';
import userEvent from '@testing-library/user-event'

describe('Password validator form', () => {

  let wrapper: RenderResult

  afterEach(() => {
    wrapper.unmount()
  })
  
  it.each([
    ['short1'],
    ['short2'],
    ['1234567']
  ])('should show an error when password is to short, using password {%s}', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByPlaceholderText(LABELS.InputPlaceHolder))
    await userEvent.keyboard(password)
    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.TooShort)).not.toBeNull()
  });

  it.each([
    ['password']
  ])('should show an error when password does not have numbers, using password {%s}', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByPlaceholderText(LABELS.InputPlaceHolder))
    await userEvent.keyboard(password)
    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.NoNumbers)).not.toBeNull()
  });
})
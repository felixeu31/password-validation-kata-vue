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
    ['password'],
    ['qwertyuio']
  ])('should show an error when password does not have numbers, using password {%s}', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByPlaceholderText(LABELS.InputPlaceHolder))
    await userEvent.keyboard(password)
    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.NoNumbers)).not.toBeNull()
  });

  it('should show both errors when password is empty', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.TooShort)).not.toBeNull()
    expect(wrapper.queryByText(ERRORMESSAGES.NoNumbers)).not.toBeNull()
  });

  
  it.each([
    ['passwo'],
    ['short']
  ])('should show both errors when invalid password {%s}', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByPlaceholderText(LABELS.InputPlaceHolder))
    await userEvent.keyboard(password)
    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.TooShort)).not.toBeNull()
    expect(wrapper.queryByText(ERRORMESSAGES.NoNumbers)).not.toBeNull()
  });

  
  it('should show both errors only once when password is empty and click the button twice', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))    
    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.TooShort)).not.toBeNull()
    expect(wrapper.queryByText(ERRORMESSAGES.NoNumbers)).not.toBeNull()
  });

  
  it.each([
    ['password1234']
  ])('should show correct password in list', async (password: string) => {
    wrapper = render(PasswordValidatorForm)

    await userEvent.click(wrapper.getByPlaceholderText(LABELS.InputPlaceHolder))
    await userEvent.keyboard(password)
    await userEvent.click(wrapper.getByText(LABELS.ValidateButton_Text))

    expect(wrapper.queryByText(ERRORMESSAGES.TooShort)).toBeNull()
    expect(wrapper.queryByText(ERRORMESSAGES.NoNumbers)).toBeNull()
    expect(wrapper.queryByText(password)).not.toBeNull()
  });
})
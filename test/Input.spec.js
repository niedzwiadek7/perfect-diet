import { mount } from '@vue/test-utils'
import Input from '@/components/UI/Input/Input.vue'

describe('Input', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Input)
    expect(wrapper.vm).toBeTruthy()
  })
})

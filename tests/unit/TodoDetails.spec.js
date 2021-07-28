import TodoDetails from "@/views/TodoDetails"
import { mount } from "@vue/test-utils"

describe("TodoDetails", () => {
  test('renders todo items if todos exist', async () => {
    const wrapper = mount(TodoDetails)
    await wrapper.setData({ todo: { title: 'Create Vue App' }})
    expect(wrapper.find('h1').isVisible()).toBe(true)
  })
})

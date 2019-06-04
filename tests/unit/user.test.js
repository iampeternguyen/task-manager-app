import { shallowMount } from '@vue/test-utils';
import CreateUser from '../../src/components/CreateUser';

describe('CreateUser.vue', () => {
  it('Renders a form with name, email, and passworld fields', () => {
    const wrapper = shallowMount(CreateUser);
    expect(wrapper.find('#name').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#password').exists()).toBe(true);
  });
});

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

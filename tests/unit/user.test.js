import { mount, createLocalVue } from '@vue/test-utils';
import SuiVue from 'semantic-ui-vue';

jest.mock('axios');

import CreateUser from '../../src/components/CreateUser';
const localVue = createLocalVue();
localVue.use(SuiVue);

describe('CreateUser.vue', () => {
  it('Renders a form with name, email, and passworld fields', () => {
    const wrapper = mount(CreateUser, { localVue });
    expect(wrapper.find('[data-name]').exists()).toBe(true);
    expect(wrapper.find('[data-email]').exists()).toBe(true);
    expect(wrapper.find('[data-password]').exists()).toBe(true);
  });

  it('reveals a notification when submitted', done => {
    const wrapper = mount(CreateUser, { localVue });

    expect(wrapper.contains('[message]')).toBe(false);

    wrapper.find('[data-name]').setValue('Peter');
    wrapper.find('[data-email]').setValue('peter@example.com');
    wrapper.find('[data-password]').setValue('12345678');
    wrapper.find('[form]').trigger('submit.prevent');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('[message]').text()).toBe('User has been created');
      done();
    });
  });
});

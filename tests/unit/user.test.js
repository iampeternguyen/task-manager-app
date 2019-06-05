import { mount, createLocalVue } from '@vue/test-utils';
import SuiVue from 'semantic-ui-vue';
import flushPromises from 'flush-promises';
import CreateUser from '../../src/components/CreateUser';
import { createUserSuccess, createUserError } from './fixtures/userFixture';
const localVue = createLocalVue();
localVue.use(SuiVue);

jest.mock('axios');

describe('CreateUser.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CreateUser, { localVue });
  });

  it('Renders a form with name, email, and passworld fields', () => {
    expect(wrapper.find('[form]').exists()).toBe(true);
    expect(wrapper.find('[data-name]').exists()).toBe(true);
    expect(wrapper.find('[data-email]').exists()).toBe(true);
    expect(wrapper.find('[data-password]').exists()).toBe(true);
  });

  it('reveals a notification when submitted', async () => {
    wrapper.find('[data-name]').setValue('Peter');
    wrapper.find('[data-email]').setValue('peter@example.com');
    wrapper.find('[data-password]').setValue('12345678');
    wrapper.find('[form]').trigger('submit.prevent');
    await flushPromises();
    expect(wrapper.vm.submitted).toBe(true);
  });

  it('reveals success message when user created', async () => {
    const createUserMock = jest.fn(() => {
      let error = new Error('error');
      error['response'] = createUserError.response;
      throw error;
    });
    wrapper.setMethods({
      createUser: createUserMock
    });
    wrapper.find('[data-name]').setValue('Peter');
    wrapper.find('[data-email]').setValue('peter@example.com');
    wrapper.find('[data-password]').setValue('12345678');
    wrapper.find('[form]').trigger('submit.prevent');
    await flushPromises();
    expect(wrapper.vm.submitted).toBe(false);
    expect(wrapper.vm.error).toBe(createUserError.response.data.message);
  });
});

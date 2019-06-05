import { mount, createLocalVue } from '@vue/test-utils';
import CreateUser from '../../src/components/CreateUser';
import SuiVue from 'semantic-ui-vue';
const localVue = createLocalVue();
localVue.use(SuiVue);

describe('CreateUser.vue', () => {
  it('Renders a form with name, email, and passworld fields', () => {
    const wrapper = mount(CreateUser, { localVue });
    expect(wrapper.find('[data-name]').exists()).toBe(true);
    expect(wrapper.find('[data-email]').exists()).toBe(true);
    expect(wrapper.find('[data-password]').exists()).toBe(true);
  });

  it('reveals a notification when submitted', () => {
    const wrapper = mount(CreateUser, { localVue });

    wrapper.find('[data-name]').setValue('Peter');
    wrapper.find('[data-email]').setValue('peter@example.com');
    wrapper.find('[data-password]').setValue('12345678');
    wrapper.find('[form]').trigger('submit.prevent');

    expect(wrapper.find('[message]').text()).toBe('User has been created');
  });

  it('adds a user', async () => {
    const wrapper = mount(CreateUser, { localVue });

    wrapper.find('[data-name]').setValue('Peter');
    wrapper.find('[data-email]').setValue('peter@example.com');
    wrapper.find('[data-password]').setValue('12345678');

    const response = await wrapper.vm.handleSubmit();
    expect(response.body).not.toBeNull();
    expect(response.body.name).toBe('Peter');
  });
});

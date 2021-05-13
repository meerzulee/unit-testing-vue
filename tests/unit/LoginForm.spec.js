import { mount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm';

describe('LoginForm.vue', () => {
    it('emits an event with a user data payload', () => {
        const wrapper = mount(LoginForm);
        const input = wrapper.find('[data-testid="name-input"]')

        input.setValue('Meerzulee')
        wrapper.trigger("submit")

        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)

        const expectedPayload = { name: 'Meerzulee' }
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    });
});
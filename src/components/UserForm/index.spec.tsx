import { render, screen, waitFor } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import UserForm from '.';
import * as addUserService from '../../services/user/addUser';

describe('<UserForm />', () => {
    it('should show error, for missing fields', async () => {
        render(<UserForm />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        userEvent.click(submitButton);
        const validationText = await screen.findByText(
            'First name is required'
        );
        expect(validationText).toBeVisible();
    });
    it('should add new user when all fields are filled', async () => {
        const addUserSpy = jest
            .spyOn(addUserService, 'default')
            .mockResolvedValue({ id: 444444 });
        render(<UserForm />);
        const firstNameInput = screen.getByRole('textbox', {
            name: /first name/i,
        });
        const lastNameInput = screen.getByRole('textbox', {
            name: /last name/i,
        });
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const avatarInput = screen.getByRole('textbox', { name: /avatar/i });
        userEvent.type(firstNameInput, 'firstName');
        userEvent.type(lastNameInput, 'lastName');
        userEvent.type(emailInput, 'email@email.com');
        userEvent.type(avatarInput, 'pathtoimage');

        const submitButton = screen.getByRole('button', { name: /submit/i });
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(addUserSpy).toHaveBeenCalled();
        });
    });
});

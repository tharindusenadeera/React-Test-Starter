import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

describe('User List', () => {
  it('should render message if user list is empty', () => {
    render(<UserList users={[]} />);

    const paragraph = screen.getByText(/no users/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('should render user list with link', () => {
    const userList: User[] = [
      { id: 1, name: 'Tharindu' },
      { id: 2, name: 'Lakshan' },
    ];
    render(<UserList users={userList} />);

    userList.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`);
    });
  });
});

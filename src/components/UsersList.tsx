import { User } from "./AutocompleteSearchInput";

type UsersListProps = {
  users: User[];
  handleUserClick: (user: User) => void;
  selectedUserIndex: number;
};

export default function UsersList({
  users,
  handleUserClick,
  selectedUserIndex,
}: UsersListProps) {
  return (
    <div className="users_list">
      {users.map((user, index) => (
        <div
          key={user.height}
          className={"user_item"}
          onClick={() => handleUserClick(user)}
        >
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

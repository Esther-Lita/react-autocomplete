import { User } from "./AutocompleteSearchInput";

type UsersListProps = {
  users: User[];
  handleUserClick: (user: User) => void;
  selectedUserIndex: number;
  newSearch: string;
};

export default function UsersList({
  users,
  handleUserClick,
  selectedUserIndex,
  newSearch,
}: UsersListProps) {
  return (
    <div className="users_list">
      {users.map((user, index) => {
        let string = user.name.substr(
          0,
          user.name.toLowerCase().indexOf(newSearch.toLowerCase())
        );
        let endString = user.name.substr(
          user.name.toLowerCase().indexOf(newSearch.toLowerCase()) +
            newSearch.length
        );
        let highlightedText = user.name.substr(
          user.name.toLowerCase().indexOf(newSearch.toLowerCase()),
          newSearch.length
        );
        return (
          <div
            key={user.height}
            className={
              selectedUserIndex === index ? "user_item active" : "user_item"
            }
            onClick={() => handleUserClick(user)}
          >
            <p>
              {string}
              <b>{highlightedText}</b>
              {endString}
            </p>
          </div>
        );
      })}
    </div>
  );
}

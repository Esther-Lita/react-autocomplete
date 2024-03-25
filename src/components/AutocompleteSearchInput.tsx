import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import UsersList from "./UsersList";

export type User = {
  name: string;
  height: number;
};

export default function AutoCompleteSearchInput() {
  const [newSearch, setNewSearch] = useState("");
  const [user, setUser] = useState<User[]>([]);
  const [results, setResults] = useState<User[]>([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState(-1);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(apiUrl ?? "");
      const data = await res.json();
      setUser(data.results);
    };
    fetchUser();
  }, []);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setNewSearch(event.target.value);

    setResults(
      user.filter((users) =>
        users.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      setSelectedUserIndex((prevIndex) =>
        prevIndex === -1 ? results.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      setSelectedUserIndex((prevIndex) =>
        prevIndex === results.length - 1 ? -1 : prevIndex + 1
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (selectedUserIndex !== -1) {
        const selectedUser = results[selectedUserIndex];
        setNewSearch(selectedUser.name);
        setResults([]);
      }
    }
  };

  const handleUserClick = (user: User) => {
    setNewSearch(user.name);
    setResults([]);
  };

  return (
    <form action="">
      <input
        type="text"
        value={newSearch}
        onChange={(e) => handleSearch(e)}
        onKeyDown={handleKeyDown}
        placeholder="Star Wars Character..."
      />
      {newSearch !== "" && results.length > 0 && (
        <UsersList
          users={results}
          selectedUserIndex={selectedUserIndex}
          handleUserClick={handleUserClick}
        />
      )}

      <button> Select </button>
    </form>
  );
}

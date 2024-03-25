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
    //getting an array of Star Wars characters as the data to use
    const fetchUser = async () => {
      const res = await fetch(apiUrl ?? "");
      const data = await res.json();
      setUser(data.results);
    };
    fetchUser();
  }, []);

  //filters the data based on what we search for
  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setNewSearch(event.target.value);

    setResults(
      user.filter((users) =>
        users.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  //handling keyboard support
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      setSelectedUserIndex((prevIndex) =>
        prevIndex === -1 ? results.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      setSelectedUserIndex((prevIndex) =>
        prevIndex === results.length - 1 ? -1 : prevIndex + 1
      );
    } else if (event.key === "Enter" && selectedUserIndex !== -1) {
      event.preventDefault();
      if (results.length > 0) {
        const selectedUser = results[selectedUserIndex];
        setNewSearch(selectedUser.name);
        setResults([]);
      }
    }
  };

  //handling mouse click
  const handleUserClick = (user: User) => {
    setNewSearch(user.name);
    setResults([]);
  };

  // button to reset the search
  const cleanHandler = () => {
    setNewSearch("");
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
          newSearch={newSearch}
        />
      )}

      <button onClick={cleanHandler}> Clean </button>
    </form>
  );
}

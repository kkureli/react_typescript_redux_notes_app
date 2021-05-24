import React, { ChangeEvent, FC, useState } from "react";

interface Props {
  addNote(note: string): void;
}

const NewNoteInput: FC<Props> = ({ addNote }) => {
  const [note, setNote] = useState("");
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  return (
    <div>
      <input
        value={note}
        onChange={(e) => updateNote(e)}
        type="text"
        name="name"
        placeholder="Note"
      />
      <button
        onClick={() => {
          addNote(note);
          setNote("");
        }}
      >
        Add note
      </button>
    </div>
  );
};

export default NewNoteInput;

export type Action = { type: string; payload: string };

export const addNote = (note: string): Action => {
  return { type: "ADD_NOTE", payload: note };
};

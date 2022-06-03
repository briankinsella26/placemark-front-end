import {readable, writable} from "svelte/store";

export const user = writable({
  email: "",
  id: "",
  token: "",
  scope: [],
});

export const categoryList = writable(
  [
    {id: 1, value: "All"}, 
    {id: 2, value: "Natural World"}, 
    {id: 3, value: "Family"}, 
    {id: 4, value: "Hiking"}, 
    {id: 5, value: "Cycling"},
    {id: 6, value: "Historic"},
  ]
);


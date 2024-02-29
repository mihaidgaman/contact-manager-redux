import { Button } from '../ui/';

export const SearchContacts = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-3 items-stretch">
      <input
        type="text"
        className="border border-slate-300 rounded px-2 grow"
        placeholder="search"
      ></input>

      <Button type="submit" title="Search">
        Search
      </Button>
    </form>
  );
};

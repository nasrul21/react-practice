import { SubmitEvent } from "react";

interface FormSearchProps {
  onSearch: (keyword: string) => void
}

const FormSearch = ({ onSearch }: FormSearchProps) => {
  const onFormSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    onSearch(formValues.keyword.toString())

    event.currentTarget.reset();
  }

  return (
    <form
      className="form border padding"
      onSubmit={onFormSubmit}
    >
      <input type="text" name="keyword" />
      <button type="submit">Search</button>
    </form>
  )
}

export default FormSearch;

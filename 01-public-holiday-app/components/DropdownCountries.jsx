import { useQuery } from "@tanstack/react-query";

const DropdownCountries = ({ selectedCountry, onCountryChange = () => { } }) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['countries'],
    queryFn: () => fetch(`https://openholidaysapi.org/Countries?languageIsoCode=EN`).then(r => r.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "Oops! Failed to fetch countries";

  return (
    <select
      name='country'
      value={selectedCountry}
      onChange={onCountryChange}
    >
      {data?.map(country => (
        <option key={country.isoCode} value={country.isoCode}>{country.name[0].text}</option>
      ))}
    </select>
  );
}

export default DropdownCountries;

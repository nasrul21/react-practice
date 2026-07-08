import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const HolidayList = ({
  countryCode = 'NL'
}) => {
  const year = (new Date()).getFullYear();
  const [validFrom, validTo] = useMemo(() => [`${year}-01-01`, `${year}-12-31`], [year]);
  const { data, isPending, error } = useQuery({
    queryKey: ['holiday', { countryCode, validFrom, validTo }],
    queryFn: () => fetch(
      `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryCode}&validFrom=${validFrom}&validTo=${validTo}&languageIsoCode=EN`
    ).then(r => r.json())
  });

  if (isPending) return "Fetching holidays...";
  if (error) return "Oops! Failed to fetch holidays";

  return (
    <ul>
      {data && data.length > 0 ? data.map(holiday => (
        <li key={holiday.id}>
          {holiday.startDate}{holiday.endDate != holiday.startDate && ` - ${holiday.endDate}`} - {holiday.name[0]?.text}
        </li>
      )) : 'Data not found'}
    </ul>
  )
}

export default HolidayList;

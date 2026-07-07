import { useState } from 'react';
import DropdownCountries from './components/DropdownCountries';
import HolidayList from './components/HolidayList';

const styles = {
  container: {
    padding: '2rem',
  }
}

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState('NL');

  const onCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  }

  return (
    <div style={styles.container}>
      <h1>Public Holiday App</h1>
      <DropdownCountries selectedCountry={selectedCountry} onCountryChange={onCountryChange} />
      <HolidayList countryCode={selectedCountry} />
    </div>
  )
}

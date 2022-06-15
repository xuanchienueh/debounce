import { useState, useEffect } from 'react';

export default function SearchClassCPN() {
  const [valueSearch, setValueSearch] = useState('');
  let debounceSearch = useDebounce(valueSearch, 2000);
  console.log(debounceSearch);
  return (
    <div>
      <input
        value={valueSearch}
        style={{ border: '1px solid red' }}
        type="text"
        onChange={(e) => {
          setValueSearch(e.target.value);
        }}
      />
    </div>
  );
}

// viết function trong file khác rồi import vào
function useDebounce(value, delay) {
  const [valueDebounce, setValueDebounce] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setValueDebounce(value), delay);

    return () => clearTimeout(timerId);
  }, [value]);
  return valueDebounce;
}
export {useDebounce}

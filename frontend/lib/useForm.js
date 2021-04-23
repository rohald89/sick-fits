import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for out inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // This function runs when the things we're watching change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }
  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface form this custom hook
  return { inputs, handleChange, resetForm, clearForm };
}

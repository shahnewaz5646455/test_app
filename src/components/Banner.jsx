import { useGlobalState } from '@/context/AppContext';
import React from 'react';

const langMap = {
  EN: "English",
  DE: "German",
  AR: "Arabic",
};

export default function Banner() {
  const { selectedLang } = useGlobalState();
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <h1 className='font-bold text-4xl'>
        {langMap[selectedLang] || selectedLang}
      </h1>
    </div>
  );
}
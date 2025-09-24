import { useGlobalState } from '@/context/AppContext';
import React from 'react';
import Multiselector from './Multiselector';

const langMap = {
  EN: "English",
  DE: "German",
  AR: "Arabic",
};

export default function Banner() {
  const { selectedLang } = useGlobalState();
  return (
    <div className='min-h-screen flex-row justify-evenly flex mt-6 items-center'>
      <Multiselector></Multiselector>
      <h1 className='font-bold text-4xl'>
        {langMap[selectedLang] || selectedLang}
      </h1>
    </div>
  );
}
import React from 'react';

import { SearchBoxProps } from './SearchBox.types';

export const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input value={value} onChange={onChangeValue} />;
};

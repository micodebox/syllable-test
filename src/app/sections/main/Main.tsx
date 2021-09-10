import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';

import { Image } from 'app/components/image/Image';
import { SearchBox } from 'app/components/searchBox/SearchBox';
import { ImageItem } from 'app/components/image/Image.types';

import { ImageContainer } from './styled';

export const Main = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const [{ data, loading, error }, searchImages] = useAxios(
    {
      url: '/search',
      method: 'GET',
      params: {
        q: query,
        page,
        size,
      },
    },
    {
      manual: true,
    },
  );

  useEffect(() => {
    searchImages({
      params: {
        q: query,
        page,
        size,
      },
    });
  }, [query, page, size, searchImages]);

  const { data: images = [], pagination } = data || {};

  return (
    <div>
      <SearchBox value={query} onChange={setQuery} />
      <ImageContainer>
        {images.map((image: ImageItem) => (
          <Image key={image.id} url={image.url} />
        ))}
      </ImageContainer>
    </div>
  );
};

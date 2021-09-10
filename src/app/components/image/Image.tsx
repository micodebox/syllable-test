import { ImageProps } from './Image.types';
import { BaseImage } from './styled';

// eslint-disable-next-line jsx-a11y/alt-text
export const Image = ({ url }: ImageProps) => <BaseImage src={url} />;

import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  // more readable than a replace on each line
  const baseFileName = src.slice(0, src.lastIndexOf('.'))

  return (
    <Article>
      <Anchor href={`/photos/${id}`}>
      <Picture>
        <source
          type="image/avif"
          srcset={`
          ${baseFileName}.avif 1x,
          ${baseFileName}@2x.avif 2x,
          ${baseFileName}@3x.avif 3x
          `}
        />
        <source
          type="image/png"
          srcset={`
          ${baseFileName}.png 1x,
          ${baseFileName}@2x.png 2x,
          ${baseFileName}@3x.png 3x
          `}
        />
        <source
          type="image/jpg"
          srcset={`
          ${baseFileName}.jpg 1x,
          ${baseFileName}@2x.jpg 2x,
          ${baseFileName}@3x.jpg 3x
          `}
        />
        <img
          alt={alt}
          src={src}
        />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </Article>
  );
};

const Article = styled.article`
  `

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`
  border-radius: 2px;
  display: flex;
  height:  300px;
  margin-bottom: 8px;
  width: 100%;

  & img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;

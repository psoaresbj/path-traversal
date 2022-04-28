import React from 'react';

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      { params: { page: ['test'] } }
    ]
  };
};

export const getStaticProps = () => {
  return {
    props: {
      test: true
    }
  }
}

const Page = props => {
  return (
    <div>Page /test</div>
  )
}

export default Page;

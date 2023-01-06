import Image from 'next/image';
import React from 'react'

const Bio = ({data}) => {
    console.log(data)
  return (
    <div>
       <h3>{data.name}</h3>
       <Image src={data.avatar_url} alt="fg" width={100} height={100}/>
       <h3>{data.bio}</h3>
    </div>
  )
}
export async function getStaticProps(context) {
  const res = await fetch("https://api.github.com/users/riteshf");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
export default Bio
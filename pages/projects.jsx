import React from 'react'

const Projects = ({projects}) => {
    console.log(projects);
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
        {projects.map((el)=>{
            return <div key={el.id}>
                <h4>{el.full_name}</h4>
                <h4>{el.description}</h4>
                <h4>{el.language}</h4>
                <h4>{el.forks_count}</h4>
                <h4>{el.stargazers_count}</h4>
            </div>
        })}
        gf
    </div>
  )
}
export  async function getServerSideProps(context){
    let r= await fetch(`https://api.github.com/search/repositories?q=user:riteshf+stars:%3E1+language:all?sort:interactions-desc`)
    let d=await r.json()
    let items= await d.items
    
   
    return {
        props:{
            projects:items
        }
    }
}
export default Projects
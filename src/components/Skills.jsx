const skills = [

{
category:"Programming & Data Processing",
items:[
"Python",
"SQL",
"PySpark",
"Apache Spark",
"Spark SQL"
]
},

{
category:"Cloud & Data Platforms",
items:[
"Microsoft Azure",
"Azure Data Factory",
"Azure Data Lake",
"Azure Synapse Analytics"
]
},

{
category:"Data Engineering & Integration",
items:[
"ETL Pipeline Development",
"Data Pipeline Orchestration",
"HVR (High Volume Replication)",
"Real-time Data Integration"
]
},

{
category:"Big Data & Distributed Systems",
items:[
"Distributed Data Processing",
"Large-scale Data Transformation",
"Data Lake Architecture",
"Batch and Streaming Workflows"
]
},

{
category:"DevOps & Data Operations",
items:[
"Azure DevOps",
"CI/CD Pipelines",
"Workflow Automation",
"Monitoring & Performance Optimization"
]
}

]

export default function Skills(){

return(

<section className="section skills-section" id="skills">

<div className="container">

<h2>Technical Skills</h2>

<div className="grid">

{skills.map((skill,index)=>(

<div key={index} className="card">

<h3>{skill.category}</h3>

<ul className="skills-list">

{skill.items.map((item,i)=>(
<li key={i}>{item}</li>
))}

</ul>

</div>

))}

</div>

</div>

</section>

)

}
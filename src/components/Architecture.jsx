export default function Architecture(){

const steps = [
{
icon:"🗄️",
title:"Data Sources",
items:[
"ERP Systems",
"Operational Databases",
"Application Logs",
"IoT Systems"
]
},
{
icon:"⚡",
title:"Ingestion",
items:[
"Azure Data Factory",
"HVR Replication",
"Streaming Pipelines"
]
},
{
icon:"☁️",
title:"Data Lake",
items:[
"Azure Data Lake",
"Raw / Curated Zones",
"Scalable Storage"
]
},
{
icon:"🔥",
title:"Processing",
items:[
"Apache Spark",
"PySpark Jobs",
"Large-scale Transformations"
]
},
{
icon:"🏢",
title:"Warehouse",
items:[
"Azure Synapse",
"Optimized Models",
"Analytics Tables"
]
},
{
icon:"📊",
title:"Analytics",
items:[
"Power BI",
"Enterprise Reporting",
"Operational Dashboards"
]
}
]

return(

<section className="section architecture-section" id="architecture">

<div className="container">

<h2>Enterprise Data Engineering Architecture</h2>

<p className="architecture-description">
Modern cloud-based data platform enabling ingestion,
processing, storage, and analytics for large-scale
enterprise datasets.
</p>

<div className="architecture-flow">

{steps.map((step,index)=>(
<div className="architecture-stage" key={index}>

<div className="architecture-card">

<div className="architecture-icon">{step.icon}</div>

<h3>{step.title}</h3>

<ul>
{step.items.map((item,i)=>(
<li key={i}>{item}</li>
))}
</ul>

</div>

{index < steps.length-1 && (
<div className="flow-line"></div>
)}

</div>
))}

</div>

</div>

</section>

)

}
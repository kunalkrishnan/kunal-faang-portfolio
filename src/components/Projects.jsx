const projects=[

{
title:"Enterprise Logistics Data Platform",
client:"FedEx",

timeline:"2023 – 2025",

architecture:`
Data Sources → Azure Data Factory → Azure Data Lake →
Apache Spark Processing → Synapse Analytics → Power BI
`,

description:`
Designed and implemented a scalable cloud-based
data engineering platform to process logistics
and shipment data for enterprise analytics.

Developed distributed ETL pipelines using
Azure Data Factory and Apache Spark to process
large-scale operational datasets across
multiple enterprise systems.

Implemented optimized Spark transformations
for large data workloads enabling high
performance analytics and reporting.

Integrated operational data sources into
a centralized Azure Data Lake enabling
enterprise-wide analytics capabilities.
`,

impact:`
• Reduced ETL processing time by 40%
• Enabled enterprise analytics for
  logistics operations
• Improved data availability across
  business reporting platforms
`
},

{
title:"Real-Time Industrial Data Replication Platform",
client:"Baker Hughes",

timeline:"2025 – Present",

architecture:`
Enterprise Systems → HVR Replication →
Cloud Data Platform → Data Lake →
Analytics & Operational Dashboards
`,

description:`
Designed real-time enterprise data replication
pipelines using HVR to enable large-scale
industrial data integration across global
energy operations.

Implemented replication strategies enabling
near real-time movement of operational data
across enterprise platforms.

Optimized data pipeline reliability and
performance for mission-critical analytics
systems used by engineering and operational teams.
`,

impact:`
• Reduced enterprise data latency by ~85%
• Enabled real-time operational analytics
• Improved visibility into industrial
  operations and system performance
`
},

{
title:"Rail Transportation Data Modernization",
client:"CSX",

timeline:"2019 – 2022",

architecture:`
Operational Databases → ETL Pipelines →
Apache Spark Processing → Data Lake →
Analytics & Reporting Systems
`,

description:`
Worked on enterprise data modernization
initiatives migrating legacy data pipelines
to modern distributed data processing systems.

Implemented Spark-based processing pipelines
to handle railway operational data including
maintenance scheduling, logistics, and
operational performance metrics.

Collaborated with data architects to design
scalable data lake architecture supporting
enterprise analytics workloads.
`,

impact:`
• Migrated legacy pipelines to distributed systems
• Improved performance of enterprise analytics
• Enabled scalable data access across
  business teams
`
}

]

export default function Projects(){

return(

<section className="section projects-section" id="projects">

<div className="container">

<h2>Projects</h2>

<div className="grid">

{projects.map((p,index)=>(

<div key={index} className="card project-card">

<h3>{p.title}</h3>

<p><b>Client:</b> {p.client}</p>

<p><b>Timeline:</b> {p.timeline}</p>

<p><b>Architecture:</b></p>
<p style={{whiteSpace:"pre-line"}}>{p.architecture}</p>

<p><b>Project Overview:</b></p>
<p style={{whiteSpace:"pre-line"}}>{p.description}</p>

<p><b>Business Impact:</b></p>
<p style={{whiteSpace:"pre-line"}}>{p.impact}</p>

</div>

))}

</div>

</div>

</section>

)

}
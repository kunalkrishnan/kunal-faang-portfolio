const experiences = [

{
company:"Capgemini",
role:"Consultant – Senior Data Engineer",
duration:"Oct 2025 – Present",
client:"Baker Hughes",
description:`
Leading the design and implementation of enterprise-grade
data replication and integration pipelines using HVR
(High Volume Replication) to support real-time analytics
and operational reporting across global energy operations.

Designed end-to-end data movement architecture enabling
high-volume replication between on-premise systems and
cloud-based analytics platforms.

Implemented scalable ingestion frameworks that support
near real-time data availability for downstream
analytics and operational dashboards.

Optimized data replication strategies to reduce data
latency from hours to minutes, significantly improving
business visibility into operational metrics.

Collaborated with cross-functional teams including
data architects, infrastructure teams, and business
stakeholders to ensure reliable and secure data flows
across multiple enterprise environments.

Impact:
• Reduced enterprise data latency by ~85%
• Enabled near real-time operational reporting
• Improved decision-making speed for engineering teams
`
},

{
company:"Infosys",
role:"Azure Data Engineer",
duration:"Feb 2022 – Oct 2025",
client:"FedEx",
description:`
Developed scalable cloud-based data engineering solutions
for global logistics operations supporting enterprise
analytics and reporting workloads.

Designed and implemented ETL pipelines using Azure Data
Factory and Apache Spark to process large-scale logistics
datasets across distributed systems.

Built modern data lake architecture on Microsoft Azure
enabling ingestion of operational data from multiple
enterprise sources including warehouse systems,
shipment tracking platforms, and operational databases.

Optimized Spark transformations and distributed
processing workloads to significantly improve data
processing performance and reduce compute costs.

Automated pipeline orchestration and monitoring to
ensure reliable execution of mission-critical
data workflows.

Impact:
• Reduced ETL processing time by ~40%
• Improved analytics data availability across
  logistics operations
• Enabled scalable reporting for business
  intelligence platforms
`
},

{
company:"Infosys",
role:"Data Engineer",
duration:"2019 – 2022",
client:"CSX",
description:`
Worked on enterprise data modernization initiatives for
rail transportation systems focused on migrating legacy
data processing platforms to modern cloud-based
analytics environments.

Developed distributed data processing workflows using
Apache Spark and Python to process operational railway
data including scheduling, maintenance, and logistics
datasets.

Implemented ETL pipelines to integrate multiple data
sources into centralized data lake environments,
supporting analytics and reporting use cases.

Collaborated with data architects to design scalable
data models supporting advanced analytics workloads.

Impact:
• Migrated multiple legacy data pipelines to modern
  cloud-based architecture
• Improved data accessibility for analytics teams
• Enabled enterprise-wide data reporting capabilities
`
}

]

export default function Experience(){

return(

<section className="experience-section">

<h2>Professional Experience</h2>

<div className="grid">

{experiences.map((exp,index)=>(

<div key={index} className="card">

<h3>{exp.role}</h3>

<h4>{exp.company}</h4>

<p><b>Client:</b> {exp.client}</p>

<p><b>Duration:</b> {exp.duration}</p>

<p style={{whiteSpace:"pre-line"}}>{exp.description}</p>

</div>

))}

</div>

</section>

)

}
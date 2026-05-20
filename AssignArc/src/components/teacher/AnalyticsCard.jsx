function AnalyticsCard({

title,

value,

subtitle,

trend

}){

return(

<div className="card">

<div
className="analytics-top"
>

<h3>

{title}

</h3>

{

trend&&(

<span
className="analytics-trend"
>

{trend}

</span>

)

}

</div>

<h2>

{value}

</h2>

{

subtitle&&(

<p>

{subtitle}

</p>

)

}

</div>

);

}

export default AnalyticsCard;
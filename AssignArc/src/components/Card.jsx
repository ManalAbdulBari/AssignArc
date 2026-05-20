function Card({

title,

value,

subtitle

}) {

return (

<div className="card">

<h3>

{title}

</h3>

<h2>

{value}

</h2>

{

subtitle &&

<p>

{subtitle}

</p>

}

</div>

);

}

export default Card;
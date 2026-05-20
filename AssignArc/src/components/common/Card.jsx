function Card({

title,

value,

subtitle,

icon,

onClick

}){

return(

<div

className="card"

onClick={onClick}

style={{

cursor:

onClick

?

"pointer"

:

"default"

}}

>

<div
className="card-top"
>

<div>

<h3>

{title}

</h3>

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

{

icon&&(

<div
className="card-icon"
>

{icon}

</div>

)

}

</div>

</div>

);

}

export default Card;
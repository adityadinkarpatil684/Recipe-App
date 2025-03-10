let select=document.querySelector('select');

const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '33811b7e79msh588066b78c352b8p19e90fjsn7a7f81729b69',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

const fn=async()=>{
    let response=await fetch(url,options);
    let data=await response.json();
    console.log(data);
    return data;
}

const fnn=async()=>{
    let give_data= await fn();
    give_data.results.forEach((item)=>{
    let new_option=document.createElement('option');
    new_option.textContent=item.name;
    new_option.value=item.name;
    select.appendChild(new_option);
   }
);
}

fnn();
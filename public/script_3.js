const header=document.querySelector('h2');
const list=document.querySelector('ul');

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
    data.results.forEach((item) => {
        if(item.name===header.innerText){
          item.topics.forEach((special)=>{
            let new_list=document.createElement('li');
            new_list.innerText=special.name;
            list.appendChild(new_list);
          });
        }
    });
}

fn();

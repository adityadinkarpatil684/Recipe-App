let header=document.querySelector('h2');
let display_image=document.querySelector('img');
let display_step=document.querySelector('div ol');

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
          display_image.src=item.thumbnail_url;
          item.instructions.forEach((instruction)=>{
            let new_inst=document.createElement('li');
            new_inst.innerText=instruction.display_text;
            display_step.appendChild(new_inst);
          });
        }
    });
}

fn();

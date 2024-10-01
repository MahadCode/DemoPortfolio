let tabLinks=document.querySelectorAll(".tab-links");
let tabContents=document.querySelectorAll(".tab-contents");

function opentab(paraid){
    //removing the classes active-link and acitve-tab
    for(tabl of tabLinks){
        tabl.classList.remove("active-link");
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }

    //adding the classes active-link and acitve-tab to clicked tags
    event.currentTarget.classList.add("active-link");
    let tabid=paraid+"t";
    document.getElementById(tabid).classList.add("active-tab");
}

for(i of tabLinks){
    i.addEventListener("click", function(){
        opentab(this.id);
    });
}


let closeBtn=document.querySelector('#close');
let openBtn=document.querySelector('#open');
let bar=document.querySelector('ul');

openBtn.addEventListener("click", ()=>{
    console.log("clicked");
    bar.classList.add("display");
});

closeBtn.addEventListener("click", ()=>{
    bar.classList.remove("display");
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyUw5skSe2KPE93--0awqmMdCHzu9s5TWbqXOi12XDliLNGivxvItsu3VtmNWSlqlD1tA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        let p=document.querySelector('.message');
        p.innerHTML="Your message has sent successfully";
        setTimeout(function(){
            p.innerHTML="";
        },5000);
        form.reset();
        }
      )
      .catch(error => console.error('Error!', error.message))
})

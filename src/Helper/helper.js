let scroll=(event)=>{
     let id=event.target.innerText;

     if(id==="Contact Info"){
          id="Contact"
     }
     document.getElementById(id).scrollIntoView({behavior:"smooth",block:"start"});
}

export {scroll};
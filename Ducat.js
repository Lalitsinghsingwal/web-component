class Ducat extends HTMLElement{
    constructor(){
        super();
        if(this.getAttribute('data')){
            this.innerHTML=this.getAttribute('data');
        }
        else{
           this.innerHTML="Hey!Lalit this site.";
        }
    }
}



window.customElements.define('he-he', Ducat);
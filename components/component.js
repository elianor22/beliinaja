class Component{

    constructor(){
        this.innerHTML ="";
        this.propeties = "";
    }


    generateUI(){
        this.innerHTML = "<div> </div>"
    }

    render(){
        this.generateUI();

        
        return this.innerHTML;
    }

    setPropeties(propeties){

        this.propeties = propeties;

    }
}


export default Component;
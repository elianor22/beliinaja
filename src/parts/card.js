import Component from '../../components/component'



class Card extends Component{


    generateUI(){
        this.innerHTML = `
        <div class="card mt-5" style="width: 18rem;">
        <img src="${this.propeties.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.propeties.cardTitle}</h5>
          <p class="card-text">${this.propeties.cardText}</p>
          <a href="#" class="btn btn-primary" onclick = "">Go somewhere</a>
        </div>
      </div>`

    }

    setPropeties(gambar,title,text,action){

      this.propeties={
        img:gambar,
        cardTitle:title,
        cardText:text,
        action: action
      }
    }

}

export default Card;
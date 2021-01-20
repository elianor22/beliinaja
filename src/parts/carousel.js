import Component from '../../components/component'


class Carousel extends Component{



  generateUI(){

  

    this.innerHTML =`<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">

         ${this.generateCaraouselItem(this.propeties.images)}

        
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;
      

    }


    generateCaraouselItem(items){
      let carouselItem ="";
      items.forEach((item,index)=>{
          if(index === 0){
            carouselItem += ` <div class="carousel-item active">`
          }else{
            carouselItem += ` <div class="carousel-item">`
          }
        carouselItem += `<img src="${item}" class="d-block w-100" height="500px" alt="...">`

        carouselItem += ` </div>`
      })

      return carouselItem;
    }
    

    setPropeties(...gambar){
      this.propeties = {images:gambar}
    }
}

export default Carousel;
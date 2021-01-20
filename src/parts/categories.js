import Component from '../../components/component'


class Categories extends Component{



  generateUI(){

  

    this.innerHTML =`<div class="container mt-5 " data-scroll >
    <div class="categories">
        <h5 class="my-3">Kategori</h5>
        <div class="row">
            <div class="col-md-3 col-sm-6 my-3 col-6">
                <div class="categories-items">
                    <div class="categories">
                        <img class="img-wraper" src="images/category-pria.jpg" alt="">
                        <div class="box-wrapper">
                            <a href="#" target="_blank" class="stretched-link nav-link">
                                <p class="categories-title px-2 ">
                                    Pria
                               </p>
                            </a>
                         </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-6 my-3" >
                <div class="categories-items">
                    <div class="categories">
                        <img class="img-wraper" src="images/wanita.webp" alt="">
                        <div class="box-wrapper">
                            <a href="#" target="_blank" class="stretched-link nav-link">
                                <p class="categories-title px-2 ">
                                    Wanita
                               </p>
                            </a>
                         </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-6 my-3" >
                <div class="categories-items">
                    <div class="categories">
                        <img class="img-wraper" src="images/sepatu.jpg" alt="" >
                        <div class="box-wrapper">
                            <a href="#" target="_blank" class="stretched-link nav-link">
                                <p class="categories-title px-2 ">
                                    Sepatu
                               </p>
                            </a>
                         </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-6 my-3" >
                <div class="categories-items">
                    <div class="categories">
                        <img class="img-wraper" src="images/anak.jpg" alt="">
                        <div class="box-wrapper">
                            <a href="#" target="_blank" class="stretched-link nav-link">
                                <p class="categories-title px-2 ">
                                    Anak-anak
                               </p>
                            </a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
      

    }

}

export default Categories;
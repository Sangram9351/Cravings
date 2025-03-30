import React from 'react'

export default function Carousel() {
  return (
    <div>
       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
  <div className="carousel-caption" style={{zIndex:10}}>
  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
      </div>
    <div className="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/previews/019/023/604/non_2x/front-view-tasty-meat-burger-with-cheese-and-salad-free-photo.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1-500x500.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.yummytummyaarthi.com/wp-content/uploads/2023/08/kfc-chicken-1.jpeg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

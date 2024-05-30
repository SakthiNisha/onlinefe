import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'

const VegProducts = () => {
    const dispatch = useDispatch();
    const image = 'img/featured/feature-1.jpg';
    const title = 'Crab Pool Security';
    const id = 1;
  return (
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Vegetables</h2>
                    </div>
                    <div class="featured__controls">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Tomoto</li>
                            <li data-filter=".fresh-meat">Onion</li>
                            <li data-filter=".vegetables">Caret</li>
                            <li data-filter=".fastfood">Beans</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row featured__filter">
                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-1.jpg" alt=""/>
                        </div>
                        <button class="btn btn-dark add-cart" onClick={() => dispatch(addtoCart({id,title, image}))}>Add to Cart</button>
                        <div class="featured__item__text">
                            <h6>Crab Pool Security</h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-2.jpg" alt=""/>
                        </div>
                        <button class="btn btn-dark add-cart">Add to Cart</button>
                        <div class="featured__item__text">
                            <h6>Crab Pool Security</h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-3.jpg" alt="" />
                        </div>
                        <button class="btn btn-dark add-cart">Add to Cart</button>
                        <div class="featured__item__text">
                            <h6>Crab Pool Security</h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-4.jpg" alt="" />
                        </div>
                        <button class="btn btn-dark add-cart">Add to Cart</button>
                        <div class="featured__item__text">
                            <h6>Crab Pool Security</h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-5.jpg" alt="" />
                            <ul class="featured__item__pic__hover">
                                <li><a href="/"><i class="fa fa-heart"></i></a></li>
                                <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="/">Crab Pool Security</a></h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-6.jpg" alt="" />
                            <ul class="featured__item__pic__hover">
                                <li><a href="/"><i class="fa fa-heart"></i></a></li>
                                <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="/">Crab Pool Security</a></h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-7.jpg" alt="" />
                            <ul class="featured__item__pic__hover">
                                <li><a href="/"><i class="fa fa-heart"></i></a></li>
                                <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="/">Crab Pool Security</a></h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <img src="img/featured/feature-8.jpg" alt="" />
                            <ul class="featured__item__pic__hover">
                                <li><a href="/"><i class="fa fa-heart"></i></a></li>
                                <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="/">Crab Pool Security</a></h6>
                            <h5>Rs30.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VegProducts
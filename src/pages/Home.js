import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pros.</h5>
                                    <p>From $999.00 to $41.62/mo</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale</h4>
                                        <h5>Laptop Max</h5>
                                        <p>From $999.00 <br /> or $41.62/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $999.00 <br /> or $41.62/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $999.00 <br /> or $41.62/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $999.00 <br /> or $41.62/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-50'>
                                    <img src="images/service.png" alt="services" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-02.png" alt="services" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-03.png" alt="services" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-04.png" alt="services" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory Default Price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-05.png" alt="services" />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className='mb-0'>100% Protected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collection
                            </h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section className="special-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">

                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Special Product
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </section>

            <section className="popular-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section className="marquee-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'><img src="images/brand-01.png" alt="brand" /></div>
                                    <div className='mx-4 w-25'><img src="images/brand-02.png" alt="brand" /></div>
                                    <div className='mx-4 w-25'><img src="images/brand-03.png" alt="brand" /></div>
                                    <div className='mx-4 w-25'><img src="images/brand-04.png" alt="brand" /></div>
                                    <div className='mx-4 w-25'><img src="images/brand-05.png" alt="brand" /></div>
                                    <div className='mx-4 w-25'><img src="images/brand-06.png" alt="brand" /></div>
                                    <div className='mx-4 w-25'><img src="images/brand-07.png" alt="brand" /></div>
                                    <div className='mx-4 w-25'><img src="images/brand-08.png" alt="brand" /></div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 blog-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Latest Blogs
                            </h3>
                        </div>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

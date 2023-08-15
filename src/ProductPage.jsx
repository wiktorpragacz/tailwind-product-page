import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "./Accordion";
import { useState } from "react";

const images = [
  "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
];

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(
    "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
  );

  return (
    <>
      <section className="max-w-full px-4 flex items-center mt-5 flex-col xl:flex-row">
        <div className="w-full p-5 self-start">
          <div>
            <img
              className="rounded-md w-full md:w-5/6 md:mx-auto"
              src={currentImage}
            />
          </div>
          <div className=" justify-between items-center w-full md:w-5/6 md:mx-auto mt-5 gap-5 hidden xl:flex">
            {images.map((image) => {
              return (
                <button key={image}>
                  <img
                    className={`rounded-md ${
                      image === currentImage ? "ring-2 ring-cyan-900" : ""
                    }`}
                    src={image}
                    onClick={() => setCurrentImage(image)}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full p-5 self-start">
          <h2 className="text-4xl font-bold">Zip Tote Basket</h2>
          <p className=" text-3xl font-normal my-3">$140</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-violet-800"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-violet-800"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-violet-800"
            />

            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-violet-800"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-violet-800"
            />
          </div>
          <p className="text-lg my-3">
            The Zip Tote Basket is the perfect midpoint between shopping tote
            and comfy backpack. With convertible straps, you can hand carry,
            should sling, or backpack this convenient and spacious bag. The zip
            top and durable canvas construction keeps your goods protected for
            all-day use.
          </p>
          <p>Color</p>
          <div className="flex gap-3 mt-2">
            <button className="bg-black ring-1  ring-indigo-900 rounded-full w-10 h-10"></button>
            <button className="bg-white ring-1 ring-indigo-900 rounded-full w-10 h-10"></button>
            <button className="bg-gray-600 ring-1 ring-indigo-900 rounded-full w-10 h-10"></button>
          </div>
          <div className="flex mt-9 items-center gap-5">
            <button className="bg-indigo-600 text-white rounded-md px-16 xl:px-28 py-3 w-full md:w-auto">
              Add to bag
            </button>
            <button>
              <FontAwesomeIcon icon={faHeart} className="text-2xl " />
            </button>
          </div>
          <Accordion />
        </div>
      </section>
      <section className="px-4 pb-4 mt-14">
        <div className="flex flex-col  text-center justify-end rounded-xl h-96 bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(255,255,255)),url('https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg')]">
          <h2 className="text-4xl font-bold">Technical Specifications</h2>
          <p className="mb-10 mt-5 max-w-3xl mx-auto">
            Organize is a system to keep your desk tidy and photo-worthy all day
            long. Procrastinate your work while you meticulously arrange items
            into dedicated trays.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:px-6">
          <div className="border-t-2 border-slate-100 pt-2 pb-8">
            <p className="font-bold">Origin</p>
            <p>Designed by Good Goods, Inc.</p>
          </div>
          <div className="border-t-2 border-slate-100 pt-2 pb-8">
            <p className="font-bold">Material</p>
            <p>
              Solid walnut base with rare earth magnets and polycarbonate
              add-ons.
            </p>
          </div>
          <div className="border-t-2 border-slate-100 pt-2 pb-8">
            <p className="font-bold">Dimensions</p>
            <p>15&quot; x 3.75&quot; x .75&quot;</p>
          </div>
          <div className="border-t-2 border-slate-100 pt-2 pb-8">
            <p className="font-bold">Finish</p>
            <p>Hand sanded and finished with natural oil</p>
          </div>
          <div className="border-t-2 border-slate-100 pt-2 pb-8">
            <p className="font-bold">Includes</p>
            <p>
              Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder
            </p>
          </div>
          <div className="border-t-2 border-slate-100 pt-2 pb-8">
            <p className="font-bold">Considerations</p>
            <p>
              Made from natural materials. Grain and color vary with each item.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 pb-4 mt-8">
        <h2 className="text-4xl text-center font-bold">Protect your device</h2>
        <p className="mt-3 text-center">
          As a digital creative, your laptop or tablet is at the center of your
          work. Keep your device safe with a fabric sleeve that matches in
          quality and looks.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="md:order-last col-span-2">
            <img
              className="rounded-md md:w-5/6 md:mx-auto"
              src="https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg"
              alt=""
            />
          </div>
          <div className="md:w-5/6 md:ml-auto">
            <p className="font-semibold text-xl mb-1">Minimal and thoughtful</p>
            <p>
              Our laptop sleeve is compact and precisely fits 13&quot; devices.
              The zipper allows you to access the interior with ease, and the
              front pouch provides a convenient place for your charger cable.
            </p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="col-span-2">
            <img
              className="rounded-md md:w-5/6 md:mx-auto"
              src="https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg"
            />
          </div>
          <div className="md:w-5/6 md:mr-auto">
            <p className="font-semibold text-xl mb-1">Refined details</p>
            <p>
              We design every detail with the best materials and finishes. This
              laptop sleeve features durable canvas with double-stitched
              construction, a felt interior, and a high quality zipper that hold
              up to daily use.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20 px-4 pb-4 grid md:grid-cols-2 max-w-screen-2xl mx-auto gap-32">
        <div>
          <h3 className="text-2xl font-bold">Customer Reviews</h3>
          <div className="flex items-end gap-3">
            <div className="rating mt-3">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-yellow-400"
              />

              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-yellow-400"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-yellow-400"
              />
            </div>
            <p className="">Based on 1632 reviews</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <span>5⭐</span>
              <progress
                className="progress progress-warning w-full md:w-4/6 "
                value={63}
                max="100"
              ></progress>
              <span>63%</span>
            </div>
            <div className="flex items-center gap-3">
              <span>4⭐</span>
              <progress
                className="progress progress-warning w-full md:w-4/6"
                value={10}
                max="100"
              ></progress>
              <span>10%</span>
            </div>
            <div className="flex items-center gap-3">
              <span>3⭐</span>
              <progress
                className="progress progress-warning w-full md:w-4/6"
                value={6}
                max="100"
              ></progress>
              <span>6%</span>
            </div>
            <div className="flex items-center gap-3">
              <span>2⭐</span>
              <progress
                className="progress progress-warning w-full md:w-4/6"
                value={12}
                max="100"
              ></progress>
              <span>12%</span>
            </div>
            <div className="flex items-center gap-3">
              <span>1⭐</span>
              <progress
                className="progress progress-warning w-full md:w-4/6"
                value={9}
                max="100"
              ></progress>
              <span>9%</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold mt-5">Share your thoughts</h4>
          <p>
            If you’ve used this product, share your thoughts with other
            customers
          </p>
          <button className="border-slate-400 border-2 rounded-md py-2 w-full mt-3 font-semibold hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 md:w-4/6">
            Write a review
          </button>
        </div>
        <div>
          <div className="review mt-8 border-b-2 pb-10">
            <div className="flex">
              <img
                className="rounded-full w-12"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="font-semibold">Emily Selman</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                </div>
              </div>
            </div>
            <p className="mt-2 ">
              This is the bag of my dreams. I took it on my last vacation and
              was able to fit an absurd amount of snacks for the many long and
              hungry flights.
            </p>
          </div>
          <div className="review mt-8 border-b-2 pb-10">
            <div className="flex">
              <img
                className="rounded-full w-12"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="font-semibold">Hector Gibbons</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                </div>
              </div>
            </div>
            <p className="mt-2 ">
              Before getting the Ruck Snack, I struggled my whole life with
              pulverized snacks, endless crumbs, and other heartbreaking snack
              catastrophes. Now, I can stow my snacks with confidence and style!
            </p>
          </div>
          <div className="review mt-8 border-b-2 pb-10">
            <div className="flex">
              <img
                className="rounded-full w-12"
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="ml-3">
                <p className="font-semibold">Mark Edwards</p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                </div>
              </div>
            </div>
            <p className="mt-2 ">
              I love how versatile this bag is. It can hold anything ranging
              from cookies that come in trays to cookies that come in tins.
            </p>
          </div>
        </div>
      </section>
      <footer className="mt-20 px-4 pb-5 md:max-w-screen-2xl md:mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:w-2/3">
            <div className="flex flex-col gap-3">
              <p className="font-bold mb-3">Solutions</p>
              <a href="#">Marketing</a>
              <a href="#">Analytics</a>
              <a href="#">Commerce</a>
              <a href="#">Insights</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold mb-3">Company</p>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Partners</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold mb-3">Support</p>
              <a href="#">Pricing</a>
              <a href="#">Documentation</a>
              <a href="#">Guides</a>
              <a href="#">Api Status</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold mb-3">Legal</p>
              <a href="#">Claim</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="mt-7 xl:w-1/3">
            <h4 className="font-bold text-lg">Subscribe to our newsletter</h4>
            <p className="mt-2">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex flex-col gap-2 mt-5 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-slate-300 rounded-md px-3 py-2 sm:w-96"
              />
              <button className="font-bold text-white bg-indigo-600 rounded-md py-2 mt-1 sm:px-10">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t-2 mt-20 flex flex-col py-5">
          <p className="text-center">
            &copy; 2023 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

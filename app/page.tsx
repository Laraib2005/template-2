/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/hero";
import Brand from "./components/brand";
import Product from "./components/product";
import Benefit from "./components/benefit";
import Touch from "./components/touch";
import Logo from './../app/miss/logo'


export default function Home() {
  return (
   <>
   <Hero />
   <Brand />
   <Product />
   <Logo/>
   <Benefit />
   <Touch />
   

   </>
  );
}

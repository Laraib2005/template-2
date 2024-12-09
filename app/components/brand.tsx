import Image from 'next/image';
import React from 'react';

const Ceramics = () => {
  return (
    <>
      {/* Main Section for Ceramics Collection */}
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          
          {/* Title Section */}
          <h1 className="text-2xl font-semibold text-center">
            New Ceramics
          </h1>

          {/* Product Grid: Responsive Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12">

            {/* Product 1: The Dendy Chair */}
            <div className="w-full h-auto">
              <Image
                src={'/images/chair.png'}
                height={700}
                width={700}
                alt="The Dendy Chair"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-medium">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2: Rustic VaseSet */}
            <div className="w-full h-auto">
              <Image
                src={'/images/vase.png'}
                height={700}
                width={700}
                alt="Rustic VaseSet"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-medium">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3: The Silky Vase */}
            <div className="w-full h-auto">
              <Image
                src={'/images/silky.png'}
                height={700}
                width={700}
                alt="The Silky Vase"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-medium">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4: The Lucky Lamp */}
            <div className="w-full h-auto">
              <Image
                src={'/images/lamp.png'}
                height={700}
                width={700}
                alt="The Lucky Lamp"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-medium">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center">
            <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] transition-all duration-300 hover:bg-[#2A254B] hover:text-white">
              View Collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ceramics;

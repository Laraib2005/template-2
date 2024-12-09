'use client'; 
import Image from 'next/image'; 
import React from 'react'; 
import { useRouter } from 'next/navigation';

const Product = () => {
  const router = useRouter();

  // Navigate to the product listing page when button is clicked
  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/productlisting" page
  };

  return (
    <>
      {/* Product Section */}
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          
          {/* Section Title */}
          <h1 className='text-2xl'>Our popular products</h1>

          {/* Flexbox layout: Stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1: Suede Sofa */}
            <div className='w-full md:w-[700px] h-auto'>
              <Image
                src='/images/Large.png'
                height={800}
                width={800}
                alt='suede sofa'
                className='w-full h-[80%] object-cover' // Removed hover effect from image
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2: The Dandy Chair */}
            <div className='w-full md:w-[350px] h-auto'>
              <Image
                src='/images/chair.png'
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover' // Removed hover effect from image
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3: The Dandy Chair (another variant) */}
            <div className='w-full md:w-[350px] h-auto'>
              <Image
                src='/images/chair1.png'
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover' // Removed hover effect from image
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* Button to View More Products */}
          <div className='my-10 flex justify-center items-center'>
            <button 
              className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]' 
              onClick={handleNavigation}
            >
              View products
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

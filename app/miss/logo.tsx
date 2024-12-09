export default function Logo() {
    return (
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {/* Feature Cards */}
          {[ // Array of feature items
            {
              img: "/images/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/images/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              {/* Feature Image */}
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto" // Removed hover effect
              />
              <h2 className="mt-4 text-custom-purple text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-custom-purple">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
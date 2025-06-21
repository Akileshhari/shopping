const callouts = [
    {
      name: 'Casual Printed Shirt',
      description: 'Stylish cotton shirt with a trendy print.',
      imageSrc: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24822544/2023/9/5/86525314-32b2-4417-bd14-ec0abf688eac1693927422256SHOWOFFMenWhitePremiumSlimFitHorizontalStripesOpaqueStripedC6.jpg',
      imageAlt: 'Casual printed shirt with a modern design, button-down front, and short sleeves.',
      href: '#',
    },
    {
      name: 'Premium Colorblock T-Shirt',
      description: 'Soft cotton t-shirt with a modern colorblock design.',
      imageSrc: 'https://www.jiomart.com/images/product/original/rvkye5vraq/eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rvkye5vraq-1-202402111536.jpg',
      imageAlt: 'Stylish premium t-shirt with a colorblock pattern and a comfortable fit.',
      href: '#',
    },
    {
      name: 'Classic Denim Jeans',  
      description: 'Comfortable and stylish denim jeans for everyday wear.',
      imageSrc: 'https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Lee/Monobrand/LMTR003625/LMTR003625_1.jpg',
      imageAlt: 'Premium denim jeans with a classic fit and durable stitching.', 
      href: '#',
    },
  ]
  
  export default function Collection() {
    return (
      <div className="bg-[#f8f2ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
            <h2 className="text-2xl font-bold text-gray-900  ">Collections for <span className="text-[#785ba5]">mens</span> </h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
import { useNavigate } from "react-router";
// category 
const category = [
    {
        image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100 ', // fashion
        name: 'fashion'
    },
    {
        image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=100&q=80', // shirt
        name: 'shirt'
    },
    {
        image: 'https://images.pexels.com/photos/374622/pexels-photo-374622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100', // jacket
        name: 'jacket'
    },
    {
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80 ', // mobile
        name: 'mobile'
    },
    {
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=100&q=80', // laptop
        name: 'laptop'
    },
    {
        image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100', // shoes
        name: 'shoes'
    },
    {
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100', // home
        name: 'home'
    },
    {
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&q=80', // books
        name: 'books'
    }
]

const Category = () => {
    // navigate 
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-auto lg:justify-center hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-blue-500 transition-all hover:bg-blue-400 cursor-pointer mb-1 flex items-center justify-center overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-full" />
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;

import { Link } from "react-router-dom";
import blogsData from "@/data/blogsData";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#333] font-sans py-20">

      {/* 1. Hero / Header Section */}
      <div className="bg-white py-16 text-center border-b border-gray-200">
        <h1 className="text-5xl md:text-6xl font-black text-gray-200 tracking-widest uppercase mb-2"
          style={{ fontFamily: 'Arial, sans-serif' }}>
          BLOG
        </h1>
        <p className="text-sm uppercase tracking-widest text-gray-600 font-semibold">
          From Experts, For You
        </p>
      </div>

      {/* 2. Blog Grid */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogsData.map((blog) => (
            <article key={blog.id} className="flex bg-white shadow-sm hover:shadow-md transition-shadow h-[200px] md:h-[220px] group">

              {/* Image Section (Left) */}
              <div className="w-1/2 relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Section (Right) */}
              <div className="w-1/2 p-6 flex items-center relative bg-white">
                {/* The Triangle Pointer */}
                <div className="absolute left-0 top-1/2 -translate-x-[10px] -translate-y-1/2 
                                        w-0 h-0 
                                        border-t-[10px] border-t-transparent
                                        border-b-[10px] border-b-transparent
                                        border-r-[15px] border-r-white
                                        z-10">
                </div>

                <h2 className="text-sm md:text-base font-bold uppercase leading-tight text-gray-800 group-hover:text-primary transition-colors cursor-pointer">
                  <Link to={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline decoration-transparent">
                    {blog.title}
                  </Link>
                </h2>
              </div>

            </article>
          ))}
        </div>

        {/* Pagination (Visual Only) */}
        <div className="flex justify-center mt-12 gap-2 hidden">
          <button className="w-10 h-10 bg-gray-800 text-white font-bold flex items-center justify-center text-sm">1</button>
          <button className="w-10 h-10 bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center text-sm">2</button>
          <button className="w-10 h-10 bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center text-sm">&gt;</button>
        </div>

      </div>
    </div>
  );
};

export default Blogs;

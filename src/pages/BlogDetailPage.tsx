import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import blogsData from "@/data/blogsData";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  console.log(blogId)
  // Find the blog matching the slug (title converted to slug format)
  const blog = blogsData.find(b =>
    b.title.toLowerCase().replace(/\s+/g, '-') === blogId
  );

  if (!blog) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">Blog post not found</h2>
      </div>
    );
  }

  return (
    <>
      <section className="py-20 md:pt-[120px] pt-[80px] bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <article className="blog-card">
              <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden border-none shadow-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[400px] object-cover"
                />
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    {blog.category && (
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium uppercase tracking-wider text-xs">
                        {blog.category}
                      </span>
                    )}
                    {(blog.date || blog.author) && <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />}
                    {blog.date && (
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span>{blog.date}</span>
                      </div>
                    )}
                    {blog.author && (
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-primary" />
                        <span>{blog.author}</span>
                      </div>
                    )}
                  </div>

                  <h1 className="text-xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
                    {blog.title}
                  </h1>

                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed blog-desc">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetailPage;
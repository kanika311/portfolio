import { getLocalBlogBySlug, getAllBlogs } from "@/utils/get-blogs";
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs
    .filter((blog) => blog.slug)
    .map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getLocalBlogBySlug(slug);
  if (!blog) {
    return { title: "Blog" };
  }
  return {
    title: `${blog.title} | Kanika Aggarwal`,
    description: blog.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = getLocalBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="py-8 lg:py-12 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="text-sm text-[#16f2b3] hover:text-pink-400 transition-colors"
      >
        ← All blogs
      </Link>

      <p className="mt-6 text-sm text-[#16f2b3]">
        {timeConverter(blog.published_at)} · {blog.reading_time_minutes} min read
      </p>

      <h1 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight">
        {blog.title}
      </h1>

      {blog.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-[#1d293a] text-[#d3d8e8]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8 overflow-hidden rounded-lg border border-[#1d293a]">
        <Image
          src={blog.cover_image}
          alt={blog.title}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-8 space-y-5 text-[#d3d8e8] text-base lg:text-lg leading-relaxed">
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

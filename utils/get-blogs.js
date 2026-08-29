import { personalData } from "@/utils/data/personal-data";
import { localBlogs } from "@/utils/data/blogs-data";

export async function getAllBlogs() {
  let remote = [];

  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`
    );
    if (res.ok) {
      const data = await res.json();
      remote = Array.isArray(data)
        ? data.filter((item) => item?.cover_image)
        : [];
    }
  } catch {
    remote = [];
  }

  return [...localBlogs, ...remote];
}

export function getLocalBlogBySlug(slug) {
  return localBlogs.find((blog) => blog.slug === slug);
}

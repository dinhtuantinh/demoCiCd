type Params = {
  params: {
    slug: string;
  };
};

// Dummy data fetching function
async function fetchBlogSlugs() {
  return [{ slug: 'test' }, { slug: 'example' }];
}

// Dummy data fetching function for individual blog post
async function fetchBlogData(slug: string) {
  return { slug, content: 'This is the content of the blog post.' };
}

export async function generateStaticParams() {
  const blogs = await fetchBlogSlugs();
  return blogs.map(blog => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default async function Page({ params }: Params) {
  const blog = await fetchBlogData(params.slug);

  return (
    <>
      <h1>Slug: {blog.slug}</h1>
      <p>{blog.content}</p>
      <p>TinhDT</p>
    </>
  );
}

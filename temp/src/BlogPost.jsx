import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogPosts from "./blog_routes.json";
import { Heading } from "@chakra-ui/react";

function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      fetch(post.file)
        .then((res) => res.text())
        .then((html) => setContent(html))
        .catch((err) => console.error("Error cargando HTML:", err));
    }
  }, [post]);

  if (!post) return <div>Post no encontrado.</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Heading as="h1" marginBottom="20px" color="blue.300">
        {post.title}
      </Heading>
      <div
        className="contenido-post"
        style={{color:"white"}}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogPost;

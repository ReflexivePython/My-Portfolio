import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import blogPosts from "./blog_routes.json";
import remarkGfm from "remark-gfm"
import { Heading } from "@chakra-ui/react";


function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  const centeredCont = {
    textAlign: 'center',
    border: '1px solid black',
    padding: '20px',
  };

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      fetch(post.file)
        .then((res) => res.text())
        .then(setContent)
        .catch((err) => console.error("Error cargando markdown:", err));
    }
  }, [post]);

  if (!post) return <div>Post no encontrado.</div>;

  return (
    
    <div style={centeredCont}>
      <Heading as="h1" alignContent="center" marginBottom="20px" color="blue.300">
        {post.title}
      </Heading>


      <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    p: ({ node, ...props }) => <p style={{ marginTop: '1.5em', marginBottom: '1.5em' }} {...props} />,
  }}
  alignContent="center"
>
        {content}
        </ReactMarkdown>
    </div>
  );
}

export default BlogPost;

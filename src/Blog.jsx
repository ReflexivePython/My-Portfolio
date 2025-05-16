import React from "react";
import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import blogPosts from "./blog_routes.json";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <Heading
        as="h1"
        size="7xl"
        color="teal.500"
        textAlign="center"
        fontWeight="extrabold"
        mb={6}
      >
        Blogs
      </Heading>

      <ul style={{ listStyle: "none", paddingLeft: 0, textAlign: "center" }}>
        {blogPosts.map((post) => (
          <li key={post.slug} style={{ margin: "1rem 0" }}>
            <Link to={`/blog/${post.slug}`} style={{ fontSize: "1.2rem", color: "lightblue" }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Blog;

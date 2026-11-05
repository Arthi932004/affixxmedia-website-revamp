import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Blog() {

  const blogs = [
    {
      category: "SOCIAL MEDIA",
      title: "Social Media Marketing: The 2025 Game-Changer for Businesses & Careers",
      description:
        "Social media in 2025 is no longer about simple brand visibility — it's about community, storytelling, and measurable impact.",
      image: "https://affixxmedia.com/image/blog/Social-media-marketing.png",
      link: "https://affixxmedia.com/blog_game_changer"
    },
    {
      category: "PERSONAL BRANDING",
      title: "Personal Branding: Turning Founders Into Industry Leaders",
      description:
        "People connect with people before they connect with brands. Learn how personal branding humanizes a company and builds authority, attracting investors and top talent.",
      image: "https://affixxmedia.com/image/blog/Personal-branding-blog.png",
      link: "https://affixxmedia.com/blog_industry_leaders"
    }
  ];

  return (
    <>
      <style>{`
        .blog-section {
          padding: 100px 8%;
          background: #f7f7f7;
        }

        .blog-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .blog-heading span {
          color: #ff5b35;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .blog-heading h2 {
          font-size: 42px;
          margin: 18px 0;
          color: #171717;
        }

        .blog-heading h2 strong {
          color: #ff5b35;
        }

        .blog-heading p {
          color: #777;
          line-height: 1.8;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1100px;
          margin: auto;
        }

        .blog-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          transition: 0.3s;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
        }

        .blog-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .blog-content {
          padding: 30px;
        }

        .blog-content span {
          color: #ff5b35;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .blog-content h3 {
          font-size: 21px;
          line-height: 1.5;
          color: #171717;
          margin: 15px 0;
        }

        .blog-content p {
          color: #777;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .blog-content a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ff5b35;
          text-decoration: none;
          font-weight: 600;
        }

        .blog-content a:hover {
          gap: 15px;
        }

        .blog-view-all {
          text-align: center;
          margin-top: 50px;
        }

        .blog-view-all a {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 32px;
          background: #ff5b35;
          color: white;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .blog-view-all a:hover {
          background: #222;
          transform: translateY(-3px);
        }

        @media (max-width: 700px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }

          .blog-heading h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="blog-section" id="blog">

        <div className="blog-heading">

          <span>OUR LATEST INSIGHTS</span>

          <h2>
            Ideas That <strong>Inspire Growth.</strong>
          </h2>

          <p>
            Explore our latest blog articles covering industry trends,
            expert insights, and actionable strategies to elevate
            your digital marketing game.
          </p>

        </div>

        <div className="blog-grid">

          {blogs.map((blog, index) => (

            <div className="blog-card" key={index}>

              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
              />

              <div className="blog-content">

                <span>{blog.category}</span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More <FaArrowRight />
                </a>

              </div>

            </div>

          ))}

        </div>

        <div className="blog-view-all">

          <a
            href="https://affixxmedia.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Articles <FaArrowRight />
          </a>

        </div>

      </section>
    </>
  );
}

export default Blog;
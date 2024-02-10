import { CalendarOutline, PersonOutline } from "react-ionicons";
import postImage from "../../assets/images/01.jpg";
import postImage2 from "../../assets/images/02.jpg";
import postImage3 from "../../assets/images/03.jpg";

const Blog = () => {
  const posts = [
    {
      image: postImage,
      author: "Amin Najva",
      date: "Nov 15, 2023",
      title: "Most Visited Countries In Last 3 Years",
      description:
        "Discover the captivating destinations that have captured the hearts of travelers worldwide. Join us on a virtual journey as we unveil the most visited countries over the past three years.",
    },
    {
      image: postImage2,
      author: "Amin Najva",
      date: "Nov 15, 2023",
      title: "Most Visited Countries In Last 3 Years",
      description:
        "Embark on a cultural odyssey and delve into the richness of heritage sites across the globe. From ancient wonders to modern marvels, our exploration takes you on a historical voyage.",
    },
    {
      image: postImage3,
      author: "Amin Najva",
      date: "Nov 15, 2023",
      title: "Most Visited Countries In Last 3 Years",
      description:
        "Step back in time and marvel at the architectural wonders that have stood the test of time. Join us on a visual tour through the ages, exploring iconic structures that define our history.",
    },
  ];

  return (
    <div
      className="flex w-full pb-20 md:px-20 px-8 flex-col gap-16 justify-center items-center"
      id="blog"
    >
      <div className="flex flex-col w-full items-center">
        <span className="font-semibold text-blue-500">Our Blog</span>
        <span className="font-semibold text-slate-700 text-3xl mt-1">
          Our Latest Posts
        </span>
        <p className="max-w-[400px] text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et
          quidem quis quas nisi.
        </p>
      </div>
      <div className="flex w-full items-center justify-center md:flex-row flex-col gap-8">
        {posts.map((post) => {
          return (
            <div
              key={post.title}
              className="bg-white p-[10px] rounded-[10px]"
              style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
            >
              <img
                src={post.image}
                className="w-[400px] h-[270px] rounded-[10px]"
                alt={post.title}
              />
              <div className="flex w-full items-center gap-10 mt-3 px-4">
                <div className="flex items-center gap-2">
                  <PersonOutline color="#60a5fa" />
                  <span className="text-slate-900 text-sm">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarOutline color="#60a5fa" />
                  <span className="text-slate-900 text-sm">{post.date}</span>
                </div>
              </div>
              <div className="px-4 py-5 text-[20px] font-semibold text-slate-800">
                {post.title}
              </div>
              <div className="px-4 leading-7 text-slate-700 max-w-[400px]">
                {post.description}
              </div>
              <div className="font-medium text-blue-600 px-4 py-3 cursor-pointer">
                Read More
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

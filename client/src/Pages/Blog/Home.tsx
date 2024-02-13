import { AddCircle } from "iconsax-react";
import BlogLayout from "../../components/BlogLayout";

const Home: React.FC = () => {
  // const [profileImage, setProfileImage] = useState<string>("null");

  return (
    <>
      <BlogLayout>
        <div className="add_post  rounded-md h-fit  flex items-center justify-betweenflex justify-between">
          <div className="mb-2 font-bold py-1 px-3 flex ">
            <h2>Posts</h2>

            <div className="div ml-3">
              <span className="text-xs">All </span>
              <span className="text-xs mx-4">DRAFT</span>
              <span className="text-xs">PUBLISHED</span>
            </div>
          </div>

          <AddCircle className="text-green-800 cursor-pointer" />
        </div>
      </BlogLayout>
    </>
  );
};

export default Home;
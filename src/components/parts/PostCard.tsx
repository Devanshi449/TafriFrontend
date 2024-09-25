// import { useNavigate } from 'react-router-dom';
// import Post from '@///types/post-type';
// import formatPostTime from '@/utils/format-post-time';
// import CategoryPill from '@/components/category-pill';
// import { createSlug } from '../util/slug-generator'
// import { TestProps } from '@/types/test-props';


// interface User {
//     packageId: number;
//     supplierId: number;
//     duration: number;
//     packageName: string;
//     description: string;
//     flightBooking: boolean;
//     accommodation: boolean;
//     sightseeing: boolean;
//     luxuryFacilities: string;
//     availableCount: number;
//     supplierPrice: number;
//     isPublic: boolean;
//     createdAt: string;
//     finalPrice: number;
//     totalSeats: number;
//     packageImage: string;
//     destination: string;
// }

export default function PostCard({ post}: any) {
//   const navigate = useNavigate();
//   const slug = createSlug(post.title);
  return (
    <div
      className={`active:scale-click group w-full sm:w-1/2 lg:w-1/3 xl:w-1/4`}

    >
      <div
        className={`mb-4 cursor-pointer rounded-lg bg-light shadow-md dark:bg-dark-card ${'sm:mr-8 sm:mt-4'}`}
        // onClick={() => navigate(`/details-page/${slug}/${post._id}`, { state: { post } })}
      >

        <div className="h-48 w-full overflow-hidden">
          <img
            src={post.packageImage}
            alt={post.packageName}
            className={`sm:group-hover:scale-hover h-full w-full rounded-t-lg object-cover transition-transform ease-in-out`}
          />
        </div>
        <div className="p-3">
            
          <div className="mb-1 text-xs text-light-info dark:text-dark-info">
            {post.duration} • {post.finalPrice}
          </div>
          <div className="mb-1 text-xs text-light-info dark:text-dark-info">
            {post.accommodation} • {post.flightBooking} • {post.sightseeing}
          </div>
          <h2 className="mb-2 line-clamp-1 text-base font-semibold text-light-title dark:text-dark-title">
            {post.title}
          </h2>
          <p className="line-clamp-2 text-sm text-light-description dark:text-dark-description">
            {post.description}
          </p>
          <div className="mt-4 flex gap-2">
            Total Seats : {post.totalSeats}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import PostItem from './PostItem';

// const PostList = ({posts, title}) => {
//     return (
//         <div>
//             <h1 style={{textAlign: 'center'}}>
//                 {title}
//             </h1>
//             {posts.map((post, index) => 
//             <PostItem number={index + 1} post={post} key={post.id}/>
//             )}
//         </div>
//     );
// };

// export default PostList;

import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove, God}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}.
            </h1>
            <h3 style={{textAlign: 'center', color: 'red'}}>
                {God}
            </h3>
            {posts.map((post, index) => 
            <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
}
export default PostList;
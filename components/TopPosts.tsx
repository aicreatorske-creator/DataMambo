import React from 'react';
import { Post } from '../types';

const PostCard: React.FC<Post> = ({ image, caption, likes, comments }) => (
    <div className="flex items-start space-x-4">
        <img src={image} alt="Post image" className="w-16 h-16 rounded-lg object-cover" />
        <div className="flex-1">
            <p className="text-on-surface text-sm line-clamp-2">{caption}</p>
            <div className="flex items-center space-x-4 text-xs text-on-surface-secondary mt-1">
                <span>❤️ {likes.toLocaleString()}</span>
                <span>💬 {comments.toLocaleString()}</span>
            </div>
        </div>
    </div>
);

const TopPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
    return (
        <div className="bg-surface p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-xl font-bold text-on-surface mb-4">Top Performing Posts</h3>
            <div className="space-y-4">
                {posts.map(post => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default TopPosts;
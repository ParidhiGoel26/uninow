import BlogCard from '../components/BlogCard';
import DarkModeToggle from '../components/DarkModeToggle';
const blogPosts=[
   { title: 'How to Choose the Right Mentor', date: '2025-06-10', excerpt: 'Learn to match your learning style...', link: '#' },
   { title: '5 Tips for Online Learning Success', date: '2025-05-20', excerpt: 'Stay organized, stay motivated...', link: '#' },
];
export default function BlogPage(){
    return(
        <div className="min-h-screen p-8">
            <DarkModeToggle />
            <h1 className="font-heading text-3xl mb-6 text-center">Our Blog & Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post,i)=>(
                    <BlogCard key={i} {...post}/>
                ))}
            </div>
        </div>
    );
}
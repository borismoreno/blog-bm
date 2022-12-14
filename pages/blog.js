import Layout from "../components/layout";
import Post from "../components/post";
import styles from '../styles/grid.module.css'

export default function About({ posts }) {
    return (
        <>
            <Layout
                title="Blog"
                description="Blog de desarrollo de software c# Net core, azure"
            >
                <main className="contenedor">
                    <h1 className="heading">Blog</h1>
                    <div className={styles.grid}>
                        {posts?.map(post => (
                            <Post
                                key={post.id}
                                post={post.attributes}
                            />
                        ))}
                    </div>

                </main>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/api/posts?populate=imagen`);
    const { data: posts } = await respuesta.json();
    posts?.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    return {
        props: {
            posts
        }
    }
}

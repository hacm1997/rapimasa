import type {NextPage} from 'next'
import Layout from "../../business/components/layout/layout";
import Single from "../../business/components/views/recetas/single/single";


const Preparacion = (props: any) => {

    return (
        <>

            <Layout>
                <Single title={props.data ? props.data[0].title :null} time={props.data ? props.data[0].time : null} content1={props.data ? props.data[0].content1 : null} content2={props.data ? props.data[0].content2 : null} ingredientes={props.data ? props.data[0].ingredientes : null}/>
            </Layout>

        </>
    )
}

export default Preparacion


export async function getStaticPaths() {
    try {
        const slug = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/preparacion`)
        const data = await slug.json()
        const paths = data.preparacion.map((slug: any) => ({
            params: {
                slug: slug.slug
            },
        }) as any)
        return {
            paths,
            fallback: false
        }
    } catch (e) {
        console.log(e)
        return { paths: [], fallback: false }
    }
}

export async function getStaticProps({params: {slug}}: never) {
    try {
        const info = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/preparacion`)
        const data = await info.json()
        return {
            props: {slug: slug, data: data.preparacion.filter((preparacion: any) => preparacion.slug == slug)}
        }
    } catch (e) {
        console.log(e)
    }
}

import { notFound } from "next/navigation";
import { getPageBySlug, pages } from "../lib/pages";

type PageProps = {
    params: {
        slug: string;
    };
};

export default function DynamicPage({ params }: PageProps) {
    const page = getPageBySlug(params.slug);

    if (!page) return notFound();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-semibold text-white">{page.title}</h1>
                <p className="mt-6 text-lg text-white">{page.content}</p>
            </div>
        </div>
    );
}

// ✅ Pre-render all slugs at build time
export async function generateStaticParams() {
    return pages.map((page) => ({ slug: page.slug }));
}
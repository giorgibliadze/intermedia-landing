import { notFound } from "next/navigation";
import { getPageBySlug, pages } from "../lib/pages";

// Correct typing for static page params
interface PageProps {
    params: {
        slug: string;
    };
}

export default function Page({ params }: PageProps) {
    const page = getPageBySlug(params.slug);

    if (!page) return notFound();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-semibold text-gray-900">{page.title}</h1>
                <p className="mt-6 text-lg text-gray-700">{page.content}</p>
            </div>
        </div>
    );
}

// For SSG – works correctly in app router
export async function generateStaticParams() {
    return pages.map((page) => ({
        slug: page.slug,
    }));
}
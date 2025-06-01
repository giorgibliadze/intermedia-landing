import { notFound } from "next/navigation";
import { getPageBySlug } from "../lib/pages"; // make sure this path is correct

export default function DynamicPage({ params }: { params: { slug: string } }) {
    const page = getPageBySlug(params.slug);

    if (!page) return notFound();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-semibold text-white">{page.title}</h1>
                <p className="mt-6 text-lg text-gray">{page.content}</p>
            </div>
        </div>
    );
}

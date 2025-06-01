export type Page = {
    slug: string;
    title: string;
    content: string;
};

export const pages: Page[] = [
    {
        slug: "table",
        title: "სამაგიდო",
        content: "საინტერესო მასალები და ფაქტები სხვადასხვა თემებზე.",
    },
    {
        slug: "politics",
        title: "პოლიტიკა",
        content: "წაიკითხეთ უახლესი პოლიტიკური სიახლეები და ანალიზები.",
    },
    {
        slug: "economy",
        title: "ეკონომიკა",
        content: "გაიგეთ რა ხდება ეკონომიკაში და როგორ მოქმედებს ეს თქვენს ცხოვრებაზე.",
    },
    {
        slug: "sports",
        title: "სპორტი",
        content: "ყველაფერი სპორტის შესახებ — მატჩები, შედეგები და ინტერვიუები.",
    },
    {
        slug: "sunflower",
        title: "მზესუმზირა",
        content: "მზესუმზირას თემატური სტატიები, სიახლეები და მოთხრობები.",
    },
    {
        slug: "fashion",
        title: "მოდა",
        content: "მოდის ტენდენციები, რჩევები და სტილის ინსპირაცია.",
    },
    {
        slug: "culture",
        title: "კულტურა",
        content: "გაეცანით ქართული და მსოფლიო კულტურის სიახლეებს და მოვლენებს.",
    },
    {
        slug: "fun",
        title: "გართობა",
        content: "დასვენება, ხალისი და საინტერესო ამბები ყველა ასაკისთვის.",
    },
    {
        slug: "blog",
        title: "ბლოგი",
        content: "ჩვენი ავტორების პირადი მოსაზრებები და მინი-ისტორიები.",
    },
    {
        slug: "tech",
        title: "ტექ",
        content: "ტექნოლოგიები, ინოვაციები და მომავლის ტრენდები.",
    },
    {
        slug: "video",
        title: "ვიდეო",
        content: "იხილეთ ვიდეო მასალები სხვადასხვა თემებზე.",
    },
];

export function getPageBySlug(slug: string): Page | undefined {
    return pages.find((p) => p.slug === slug);
}
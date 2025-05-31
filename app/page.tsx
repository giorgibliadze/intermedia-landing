import FullContentCard from "./components/LargeCard";
import LeaderboardCard from "./components/LeaderboardCard1";
import LeaderboardCard2 from "./components/LeaderboardCard2";
import OnboardingSuccessCard from "./components/OnboardingSuccessCard";
import VerticalCheckList from "./components/VerticalCheckList";


export default function Home() {
  return (
    <>

      <div className="flex flex-col bg-white">
        <FullContentCard
          title="„ბოდიოიდები“ – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"
          category="მეცნიერება"
          imageUrl="/Pic.png"
          excerpt="სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ."
          author="ლურჯი თოლია"
          date="გუშინ, 18:40"
          avatarUrl="/avatar.png"
        />
        <LeaderboardCard
          name="ლურჯი თოლია"
          stats={180}
          imageUrl="/avatar.png"
          rank={1}
        />
        <LeaderboardCard2
          name="ლურჯი თოლია"
          stats={180}
          imageUrl="/avatar.png"
        />
<VerticalCheckList />
<OnboardingSuccessCard />
      </div>
    </>
  );
}

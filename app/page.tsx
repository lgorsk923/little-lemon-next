import { Hero } from "./components/hero";
import WeeklySpecials from "./components/home/specials-banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-start bg-zinc-50 font-sans dark:bg-black">
      <Hero
        title='Little Lemon'
        subtitle='Chicago, IL'
        text='We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'
        image='/bruschetta.png'
        alt='Bruschetta'
        buttontrue={true}
        buttonText='Make a Reservation'
        path='/pages/reservations'
      />
      <WeeklySpecials />
    </div>
  );
}

import Section from '@/components/Section';
import { RunningText, TitlePage } from '@/components/TypingText';
import TeamCard from '@/components/TeamCard';
import { Team } from '@/constant';

const Dessert = () => {
  return (
    <Section id="dessert">
      <RunningText />
      <TitlePage title="Our Team" />
      <div className="mt-[50px] min-h-[70vh] sm:min-h-[90vh] grid sm:grid-cols-2 md:grid-cols-4 gap-[2px] mb-16">
        {Team.map((item, index) => (
          <TeamCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Dessert;

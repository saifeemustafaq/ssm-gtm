import Image from 'next/image';
import { StaticImageData } from 'next/image';
import aylaImg from '../../public/profilepics/ayla.jpg';
import debangeeImg from '../../public/profilepics/debangee.jpg';
import mustafaImg from '../../public/profilepics/mustafa.png';
import pranavImg from '../../public/profilepics/pranav.jpg';
import shardulImg from '../../public/profilepics/shardul.png';

type TeamMember = {
  name: string;
  position: string;
  image: StaticImageData;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Ayla Wang',
    position: 'Chief Product Officer',
    image: aylaImg
  },
  {
    name: 'Debangee Das',
    position: 'Chief Executive Officer',
    image: debangeeImg
  },
  {
    name: 'Mustafa Saifee',
    position: 'Chief Operations Officer',
    image: mustafaImg
  },
  {
    name: 'Pranav Begur',
    position: 'Chief Technology Officer',
    image: pranavImg
  },
  {
    name: 'Shardul Jeurkar',
    position: 'Chief Information Officer',
    image: shardulImg
  }
];

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ElevatED</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Meet Our Leadership Team</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden bg-white">
              <div className="absolute inset-0 bg-white"></div>
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="object-cover relative z-10"
              />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
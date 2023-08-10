import FlipCard from '../FlipCard';
import './styles.css';

const employees = [
    {'name': 'Pengfei Fu', 
    'img' : 'pengfei',
    'role': 'Co-founder, CEO',
    'backText' : "Pengfei was a class of 2022 McMaster Chemical Engineering graduate specializing in Water & Sustainable energy. When I was young, I always had a passion for helping people. Helping random grannies cross the road on the street, mowing neighbor’s grass, and giving a hand to friends on homework, you name it. During my university life, I constantly thought about how I can help on campus and what value can I bring to my peers. Ideas flew around, actions never arrived. After graduation, my partner and I saw a solution to helping student individuals, clubs, and organizations with customized clothing apparel. Without hesitation, Spark Printing was born. Spark Printing aims to empower students, clubs, and organizations by building high-quality, affordable, and custom apparel services and sets an example to encourage students to start their businesses with their little spark. A little Spark can set the prairie ablaze.",
    'id': 1,
    },
    {'name': 'Leo Zhou', 
    'img' : 'leo',
    'role': 'Co-founder, COO',
    'backText' : "Leo was a class of 2021 graduate from the Psychology, Neuroscience & Behaviour program at McMaster University. During my undergraduate career, I was very fortunate to be involved in student life activities as a residence don, welcome week representative, and teaching assistant. Along the way, I met many incredible student leaders and worked with student organizations that had brilliant ideas and missions. I saw many eager student groups wanting to build identities and grow through branded merchandise. However, there lacked accessible and affordable custom apparel providers in the GTA area, especially for students. After working in the SaaS industry for over a year, I wanted to go back to my roots and build Spark Printing to bridge the gap. I hope that with us, student groups can unlock their true growth potential.",
    'id': 2,
    
},
    {'name': 'Nick Zhou', 
    'img' : 'nick',
    'role': 'Sales Manager',
    'backText' : "I'm passionate about providing high-quality custom clothing to our clients, and I'm eager to work with you to bring your unique vision to life. Throughout my education and work experience, I've honed my skills in marketing, digital strategy, and project management. In my previous roles as a digital marketing specialist, I learned how to create and implement successful marketing campaigns that drive sales and engagement. I'm also skilled in conducting market research and analyzing data to develop effective marketing strategies that deliver results.But beyond my professional background, I'm an enthusiastic and dedicated individual who is committed to exceeding my clients' expectations. I believe that building strong relationships is key to success, and I take pride in my ability to understand my clients' needs and deliver personalized solutions that meet their unique requirements. So if you're looking for service which is passionate about delivering high-quality custom clothing and will work tirelessly to exceed your expectations, look no further than Spark Printing. I'm excited to work with you!",
    'id': 3,
},
    {'name': 'Chris Zhou', 
    'img' : 'chris',
    'role': 'Operation Analyst',
    'backText' : "My name is Chris Zheng, I am student of 2024 Class Math&Stats at McMaster University. I am a person who is willing to learn new things and accumulate experience. During my college years, I have met many talented friends, and they all have their own unique ideas, which are worth learning from. I believe Spark Printing is a good opportunity for me to learn a lot of things. I am excited to join the Sparking Printing family and work together to achieve our goals. Off the field, I enjoy playing soccer, gaming and constantly seek new knowledge and experiences.",
    'id': 4,
},

]

export default function CardGrid() {
    return (
      <div className="card-grid">
        {employees.map(employee => {
          return <FlipCard {...employee} id={employee.id}/>
        })}
      </div>
    )
  }

import Card from './Card' // Assuming Card component is in the same folder

const Experience = () => {
  // Array of experiences to display
  const experiences = [
    {
      id: 1,
      imageSrc: '/images/experience1.png',
      title: `فريق عمل محترف ومدرب

`,
      linkText: `فريق عمل محترف ومدرب

`,
      linkUrl: '/team',
      description: `توظيف وتدريب فريق عمل محترف لديه الخبرة في التعامل مع مختلف أنواع الأثاث وضمان تقديم خدمة عملاء متميزة.`,
    },
    {
      id: 2,
      imageSrc: '/images/experience2.png',
      title: `لماذا نحن؟`,
      linkText: `لماذا نحن؟`,
      linkUrl: '/whywe',
      description: `الالتزام بمواعيد التسليم والاستلام بدقة يعزز ثقة العملاء في خدماتك ويزيد من سمعتك الجيدة.

`,
    },
    {
      id: 3,
      imageSrc: '/images/half_lorry.png',
      title: `هاف لورى

`,
      linkText: `هاف لورى

`,
      linkUrl: '/halflorry',
      description: `هاف لورى نقل الاغراض بمختلف انواعها مع خدمة مميزة لنقل الاغراض بأمانبأمان بافضل سعر

`,
    },
  ]

  return (
    <div className="p-10 bg-[#f4f4f4]">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through the experiences array and render a Card for each experience */}
        {experiences.map((experience) => (
          <Card
            key={experience.id}
            imageSrc={experience.imageSrc}
            title={experience.title}
            linkText={experience.linkText}
            linkUrl={experience.linkUrl}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience

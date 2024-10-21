import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Image from 'next/image'

const page = () => {
  return (
    <div className='mt-32'>
      <BackgroundImage bgimageUrl={'/images/slider6.jpeg'} imageUrl={'/images/team.png'} /> 
      <div className='w-3/4 mx-auto my-16'>
        <div 
                className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-6 shadow-lg rounded-lg h-80 mb-16">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">💪 فريق عمل محترف ومدرب</h3>
                    <p className="text-lg leading-relaxed">توظيف وتدريب فريق عمل محترف لديه الخبرة في التعامل مع مختلف أنواع الأثاث وضمان تقديم خدمة عملاء متميزة.</p>
                </div>

                <div className="flex justify-center">
                    <Image width={100} height={100} src="/images/slider4.png" alt="فريق عمل محترف" className="w-full h-80 rounded-lg" />
                </div>
        </div>

        <ul className="list-disc list-inside space-y-4">
                <li>🔗 مع فريقنا المحترف والمدرب، يصبح نقل الأثاث المنزلي عملية سهلة وخالية من المتاعب.</li>
                <li>🔗 ثق بفريقنا المتخصص لجعل تجربة نقل الأثاث مريحة وسريعة وآمنة.</li>
                <li>🔗 نحن نفهم أهمية ممتلكاتك، ولهذا يعمل فريقنا بجد لضمان نقل كل قطعة بعناية واحترافية.</li>
                <li>🔗 تدريبنا المكثف وتجربتنا الواسعة تضمن لك عملية نقل سلسة وفعالة في كل مرة.</li>
                <li>🔗 فريقنا المتميز يضمن لك أفضل خدمة في نقل الأثاث، مما يتيح لك التركيز على الأمور الأكثر أهمية.</li>
                <li>🔗 عندما تختار فريقنا المدرب، فأنت تختار الجودة والاحترافية والاهتمام بالتفاصيل.</li>
                <li>🔗 نحن نفخر بفريق العمل لدينا الذي يتمتع بالمهارة والدقة في نقل الأثاث بأمان وفعالية.</li>
                <li>🔗 نجاحنا يعتمد على تفاني فريقنا المحترف في تقديم أفضل الخدمات لنقل الأثاث بمنتهى الأمان.</li>
                <li>🔗 اجعل من تجربة نقل الأثاث تجربة مريحة مع فريقنا المدرب والمجهز بأحدث الأدوات والتقنيات.</li>
        </ul>
    </div>
  
    </div>
  )
}

export default page

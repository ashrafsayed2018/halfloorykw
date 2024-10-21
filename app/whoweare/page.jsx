import Image from 'next/image'
import React from 'react'
import { siteInfo } from '../data'
import BackgroundImage from '../components/BackgroundImage'

const page = () => {
  return (
   <div>
     <BackgroundImage bgimageUrl={'/images/slider1.jpeg'} imageUrl={'/images/whowe.png'}/> 
     <header class="bg-blue-500 text-white py-4">
    <div class="container mx-auto text-center">
      <h1 class="text-3xl font-bold">مرحباً بكم في [هاف لورى]</h1>
      <p class="text-lg mt-2">شركتكم الرائدة في مجال نقل أثاث المنازل</p>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8">
    <section id="about-us" class="mb-12">
      <h2 class="text-2xl font-bold text-center mb-4">من نحن</h2>
      <p class="text-lg leading-relaxed text-center">تأسست شركتنا بهدف تقديم خدمات نقل الأثاث بأسلوب احترافي يلبي كافة احتياجاتكم ومتطلباتكم. نحن ندرك أن نقل الأثاث يمكن أن يكون عملية معقدة ومرهقة، لذلك نحن هنا لجعل هذه التجربة سلسة ومريحة قدر الإمكان.</p>
    </section>

    <section id="mission-vision-values" class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-xl font-semibold mb-2 text-blue-500">رسالتنا</h3>
        <p>تقديم أفضل خدمات نقل الأثاث بجودة عالية واحترافية تامة لضمان راحة عملائنا ورضاهم الكامل.</p>
      </div>
      <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-xl font-semibold mb-2 text-blue-500">رؤيتنا</h3>
        <p>أن نكون الخيار الأول والمفضل لنقل الأثاث بفضل خدماتنا المتميزة وفريق العمل الماهر، وأن نحقق التوسع المستمر في تقديم خدماتنا في جميع أنحاء [المدينة/البلد].</p>
      </div>
      <div class="bg-white p-6 shadow-lg rounded-lg">
        <h3 class="text-xl font-semibold mb-2 text-blue-500">قيمنا</h3>
        <ul class="list-disc list-inside">
          <li><strong>الاحترافية:</strong> نعمل بفريق محترف ومدرب على أعلى مستوى لضمان تقديم خدمة ممتازة وآمنة.</li>
          <li><strong>الموثوقية:</strong> نلتزم بالمواعيد ونحرص على التعامل بأمانة وشفافية في كل خطوة من خطوات العمل.</li>
          <li><strong>الجودة:</strong> نستخدم أحدث الأدوات والمعدات لضمان حماية الأثاث خلال عملية النقل.</li>
          <li><strong>الاهتمام بالعميل:</strong> نسعى لفهم احتياجات عملائنا وتقديم حلول مخصصة تلبي توقعاتهم.</li>
        </ul>
      </div>
    </section>

    <section id="services" class="mt-12">
      <h2 class="text-2xl font-bold text-center mb-6">خدماتنا</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 shadow-lg rounded-lg">
          <h3 class="text-xl font-semibold mb-2 text-blue-500">التغليف والتعبئة</h3>
          <p>نستخدم مواد تغليف عالية الجودة لضمان حماية ممتلكاتكم.</p>
        </div>
        <div class="bg-white p-6 shadow-lg rounded-lg">
          <h3 class="text-xl font-semibold mb-2 text-blue-500">النقل والتفريغ</h3>
          <p>نقوم بنقل الأثاث بأمان إلى وجهتكم الجديدة وتفريغه بمهارة.</p>
        </div>
        <div class="bg-white p-6 shadow-lg rounded-lg">
          <h3 class="text-xl font-semibold mb-2 text-blue-500">التخزين</h3>
          <p>نقدم حلول تخزين مؤقتة أو طويلة الأمد للأثاث إذا كنتم بحاجة إلى ذلك.</p>
        </div>
      </div>
    </section>

    <section id="team" class="mt-12">
      <h2 class="text-2xl font-bold text-center mb-6">فريقنا</h2>
      <p class="text-lg leading-relaxed text-center">فريق [هاف لورى] يضم مجموعة من الخبراء والمتخصصين في مجال نقل الأثاث، الذين يتمتعون بالخبرة والكفاءة العالية لضمان تقديم أفضل الخدمات. نحن نعمل بشغف كبير ونلتزم بتحقيق أعلى مستويات الرضا لعملائنا.</p>
    </section>

    <section id="contact" class="mt-12">
      <h2 class="text-2xl font-bold text-center mb-4">تواصل معنا</h2>
      <p class="text-lg leading-relaxed text-center mb-6">لا تترددوا في الاتصال بنا للاستفسار عن خدماتنا أو للحصول على عرض أسعار مخصص. نحن هنا لخدمتكم ونقل أثاثكم بأفضل الطرق وأكثرها أماناً.</p>
      <div class="text-center">
        <a href={`tel:${siteInfo.phone}`} class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">اتصل بنا الآن</a>
      </div>
    </section>
  </main>
   </div>
  )
}

export default page

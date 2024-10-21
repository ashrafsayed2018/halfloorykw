import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Image from 'next/image'

const page = () => {
  return (
    <div className='mt-32'>
      <BackgroundImage 
      bgimageUrl={'/images/compliant.jpeg'}
      imageUrl={'images/suggestions.png'}
      />
      <div 
        className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-6 shadow-lg rounded-lg">
            <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-500">تكلم بصوت مسموع</h3>
                <p className="text-lg leading-relaxed mb-4">
                تستطيع الآن أن ترسل شكوى ونستطيع إن شاء الله أن نساعدك في أي مشاكل قد تواجهك.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                استماعك إلى شكاوى العملاء يعزز من مستوى تفهمك وتقديرك لاحتياجاتهم، مما يساهم في تعزيز الولاء والثقة بينكما.
                </p>
                <p className="text-lg leading-relaxed">
                تستطيع الآن أن ترسل إلينا بريد إلكتروني أو الاتصال لتعبر فيه عن رأيك بكل حرية، ونستطيع أن نصل إلى حل لأي مشكلة.
                </p>
            </div>

            <div className="flex justify-center">
                <Image width={100} height={100} src="/images/compliant.jpeg" alt="تواصل معنا" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
    </div>
  )
}

export default page

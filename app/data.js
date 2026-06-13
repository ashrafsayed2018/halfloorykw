export const siteInfo = {
  name: 'halfloorykw',
  title: 'هاف لوري نقل العفش لجميع مناطق الكويت',
  description: 'خدمات الاستشارات العامة للمستشفيات',
  phone: '65594848',
}
export const formatPhoneNumber = function (phoneNumber) {
  // Add hyphens at the specific indices
  return phoneNumber.replace(/(\d{3})(\d{3})(\d{2})/, '$1-$2-$3')
}
export const navLinks = [
  {
    title: 'الرئيسية',
    href: '/',
    icon: '📃',
  },
  {
    title: 'ارسال شكوى',
    href: '/complaint',
    icon: '📝',
  },
  {
    title: 'فريق عمل محترف',
    href: '/team',
    icon: '💪',
  },
  {
    title: 'لماذا نحن',
    href: '/whywe',
    icon: '⬇️',
  },
  {
    title: 'هاف لوري',
    href: '/halflorry',
    icon: '🚙',
  },
  {
    title: 'من نحن',
    href: '/whoweare',
    icon: '🤔',
  },
  {
    title: 'اتصل بنا',
    href: '/contact',
    icon: '📞',
  },
]

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mt-52 flex flex-col items-center gap-4 justify-center h-[100% - 140px]">
      <h2 className="text-3xl font-bold">الصفحة غير موجودة</h2>
      <p className="text-xl">
        لم نعثر على الصفحة المطلوبة. يرجى المحاولة مرة أخرى
      </p>
      <Link
        href="/"
        className="text-2xl text-blue-700 border-2 border-blue-700 px-4 py-2 rounded-xl hover:bg-blue-700 hover:text-white"
      >
        الرئيسية
      </Link>
    </div>
  )
}

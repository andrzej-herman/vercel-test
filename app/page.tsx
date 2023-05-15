import Image from 'next/image'

export default function Home() {
  return (
      <div className='
        bg-gray-200
        h-screen
        flex
        items-center
        justify-center
      
      '>
        <div className='
          p-14
          bg-white
          flex
          flex-col
          gap-8
          items-center
          rounded-lg
          shadow-lg
        '>
          <Image width={150} height={150} src="/vercel-logo.png" alt="Vercel"/>
          <h4 className='
            font-bold
            text-4xl
            tracking-tighter
            text-gray-700
          '>Vercel Deployment Test</h4>
          <p className='text-sm text-gray-400'>by Andy Herman</p>
        </div>
      </div>
  )
}

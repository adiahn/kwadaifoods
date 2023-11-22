import Image from 'next/image'

export default function header() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-3xl text-primary'>hello world</h1>
      <h1 className='text-3xl text-[yellow]'>hello world</h1>
    </main>
  )
}

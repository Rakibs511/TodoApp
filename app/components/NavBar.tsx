import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='fixed flex justify-end items-center h-14 w-[100vw] bg-secondery-300'>
        <Link className='bg-secondery-100 text-secondery-600 text-2xl rounded p-1 hover:bg-secondery-200 mr-5' href={'/homePage/Blog'}>Blog</Link>
    </div>
  )
}

export default NavBar
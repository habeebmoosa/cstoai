import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ListOfPostBySearch } from './ListOfPostBySearch'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');



  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className="flex flex-shrink-0 items-center">
                  <Link to='/'>
                    <h1 className="text-white font-bold text-2xl">
                      CStoAi
                    </h1>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-1">
                {
                  localStorage.getItem("token") ? (
                    <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md"
                      onClick={() => {
                        navigate('/admin/dashboard');
                      }}
                    >Dashboard</button>
                  ) : (
                    <></>
                  )
                }
                <input type='serach' placeholder='Search' className='bg-gray-700 text-white px-4 py-2 rounded-md'
                  onChange={
                    (e) => setSearch(e.target.value)
                  } value={search}
                />
                <button className='bg-blue-700 text-white px-4 py-2 rounded-md'
                  onClick={
                    (e) => {
                      e.preventDefault();
                      console.log(search);
                      navigate('/search?search=' + search, { state: { search: search } });
                    }
                  }
                >Search</button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link

                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}

              {
                localStorage.getItem("token") ? (
                  <button className="bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md"
                    onClick={() => {
                      navigate('/admin/dashboard');
                    }}
                  >Dashboard</button>
                ) : (
                  <></>
                )
              }

              <div className="border-b-2 border-gray-500  mb-12"></div>

              <div className="pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-1 ">
                <input type='serach' placeholder='Search' className='bg-gray-700 text-white px-4 py-2 rounded-md'
                  onChange={
                    (e) => setSearch(e.target.value)
                  } value={search}
                />
                <button className='bg-blue-700 text-white px-4 py-2 rounded-md'
                  onClick={
                    (e) => {
                      e.preventDefault();
                      console.log(search);
                      navigate('/search?search=' + search, { state: { search: search } });
                    }
                  }
                >Search</button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
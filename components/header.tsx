import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import carrotLogo from "../public/logo.png"

export default function Header() {
  return (
    <div className="
      flex flex-row justify-around bg-c30 p-3
    ">
      <div className='flex flex-row justify-center items-center h-full'>
        <img src="/logo.png" alt="Carrot logo" className='w-12 h-auto' />
        <span className='text-3xl text-white'>Carrot</span>
      </div>
    </div>
  )
}

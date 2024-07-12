import Link from 'next/link'
import sipnplayLogo from '@/public/sipnplay.png';
import Image from 'next/image';
export default function Logo({ url, title }) {
    return           <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={sipnplayLogo} alt="Sip&Play Logo" className="w-20 h-20 rounded-full" />
            <span className="ml-3 text-xl">Sip&Play</span>
    </Link>
}
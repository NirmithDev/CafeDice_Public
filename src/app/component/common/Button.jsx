import Link from 'next/link'
export default function Button({ url, title }) {
    return <Link href={url} className="font-semibold hover:text-gray-900 hover:scale-105">{title}</Link>
}
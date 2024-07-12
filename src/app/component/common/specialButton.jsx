import Link from 'next/link'

export default function SpecialButton({ url,className, children }) {
  return (<Link href={url} className={className}>
    {children}
  </Link>)
}
import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, target, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
      target={target}
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                {/* <NavLink href="/posts">Posts</NavLink> */}
                {/* <NavLink href="/build-a-book">Build a Book</NavLink>  */}
                {/* <NavLink href="/toto">Toto</NavLink> */}
                {/* <NavLink href="https://forum.artofmemory.com/t/remembering-my-education-practical-information-for-my-job/84605" target="_blank">Memory</NavLink> */}
                <NavLink href="https://twitter.com/totoandindra" target="_blank">Twitter</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Indra. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

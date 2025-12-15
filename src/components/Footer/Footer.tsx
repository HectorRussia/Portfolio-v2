import React, { useEffect, useState } from 'react'
import { FaCodeFork, FaEye, FaGithub, FaStar } from "react-icons/fa6";

type RepoStats = {
  stargazers_count?: number
  forks_count?: number
  watchers_count?: number
}

const Footer: React.FC = () => {
  const [stats, setStats] = useState<RepoStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    const controller = new AbortController()

    async function fetchRepo() {
      try {
        setLoading(true)
        const res = await fetch('https://api.github.com/repos/bchiang7/v4', 
        { 
            signal: controller.signal,
        })
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
        const data = await res.json()
        if (!mounted) return
        setStats({
          stargazers_count: data.stargazers_count,
          forks_count: data.forks_count,
          watchers_count: data.watchers_count,
        })
      } catch (err: unknown) {
        // AbortError from fetch will be a DOMException (subclass of Error) in browsers
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err.message : String(err ?? 'Failed to fetch'))
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchRepo()

    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  const fmt = (n?: number) => (typeof n === 'number' ? n.toLocaleString() : '-')

  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-sm text-[#8892B0] mb-4">Theme designed and built by Brittany Chiang</div>

          <div className="flex items-center justify-center gap-6 text-[#9fb0c8]">
            <a
              href="https://github.com/bchiang7/v4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#CCD6F6] transition-colors"
            >
            <FaGithub />
            <span>View repo</span>
            </a>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaStar />
                <span className="text-sm">{loading ? '...' : fmt(stats?.stargazers_count)}</span>
            </div>

              <div className="flex items-center gap-2">
                <FaCodeFork />
                <span className="text-sm">{loading ? '...' : fmt(stats?.forks_count)}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEye />
                <span className="text-sm">{loading ? '...' : fmt(stats?.watchers_count)}</span>
              </div>
            </div>
          </div>

          {error && <div className="mt-4 text-xs text-red-400">{error}</div>}
        </div>
      </div>
    </footer>
  )
}

export default Footer
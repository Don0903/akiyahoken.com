"use client"

interface SkillConfidenceBarProps {
  skill: string
  level: number // 1-5
  className?: string
}

export default function SkillConfidenceBar({ skill, level, className = "" }: SkillConfidenceBarProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <p className="text-sm">{skill}</p>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((segment) => (
          <div
            key={segment}
            className={`h-1.5 w-6 rounded-full transition-colors ${segment <= level ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  )
}

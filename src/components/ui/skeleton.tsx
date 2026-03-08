import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-oklch(0.205 0 0)/10 dark:bg-oklch(0.87 0.00 0)/10", className)}
      {...props}
    />
  )
}

export { Skeleton }

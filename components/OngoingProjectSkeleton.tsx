import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function OngoingProjectSkeleton() {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      <div className="xl:w-2/3 w-full">
        <Card>
          <CardContent className="p-4 space-y-4">
            <Skeleton className="w-full h-[180px] rounded-lg" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </div>

      <div className="hidden xl:flex flex-col gap-3 md:w-1/3 px-6 py-3">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex flex-wrap gap-2 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

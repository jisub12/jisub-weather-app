export const Skeleton = () => {
    return (
        <div className="w-full min-h-screen bg-My_Black p-4 sm:p-6 md:p-8 max-w-screen-lg mx-auto overflow-auto">
            <div className="animate-pulse space-y-6">
                <div className="h-8 w-8 rounded-full bg-My_Dark1" />

                <div className="space-y-4">
                    <div className="relative">
                        <div className="h-11 w-full rounded-lg border border-My_Line bg-My_Dark1" />
                        <div className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded bg-My_Dark2" />
                    </div>

                    <div className="rounded-xl border border-My_Line bg-My_Dark1 p-4 space-y-3">
                        <div className="h-4 w-24 rounded bg-My_Dark2" />
                        <div className="h-4 w-40 rounded bg-My_Dark2" />
                        <div className="h-9 w-28 rounded bg-My_Dark2" />
                    </div>

                    <div className="rounded-xl border border-My_Line bg-My_Dark1 p-4 space-y-3">
                        <div className="h-5 w-32 rounded bg-My_Dark2" />
                        <div className="h-10 w-20 rounded bg-My_Dark2" />
                        <div className="h-4 w-56 rounded bg-My_Dark2" />
                    </div>
                </div>

                <div className="rounded-xl border border-My_Line bg-My_Dark1 p-4 space-y-3">
                    <div className="h-4 w-28 rounded bg-My_Dark2" />
                    <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <div
                                key={`forecast-skeleton-${index}`}
                                className="h-16 rounded-lg bg-My_Dark2"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="h-4 w-20 rounded bg-My_Dark2" />
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={`favorite-skeleton-${index}`}
                                className="h-28 rounded-xl border border-My_Line bg-My_Dark1"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
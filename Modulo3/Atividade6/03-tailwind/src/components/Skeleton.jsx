function Skeleton() {
    return (
        <div className="flex flex-col items-center gap-8 h-full max-w-[235px] p-[1.2rem] border border-border rounded-xl bg-card shadow-[0_2px_6px_var(--shadow-color)]">
            <div className="flex flex-col items-center justify-between gap-2.8 h-full w-full">
                {/* Image skeleton */}
                <div className="w-[200px] h-[200px] rounded-xl mb-8 relative overflow-hidden bg-skeleton before:content-[''] before:absolute before:top-0 before:left-[-150px] before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[var(--shimmer-color-start)] before:via-[var(--shimmer-color-middle)] before:to-[var(--shimmer-color-end)] before:animate-[loading_1.5s_infinite]"></div>

                {/* Rating */}
                <div className="self-start w-[40%] h-6 rounded-[6px] relative overflow-hidden bg-skeleton before:content-[''] before:absolute before:top-0 before:left-[-150px] before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[var(--shimmer-color-start)] before:via-[var(--shimmer-color-middle)] before:to-[var(--shimmer-color-end)] before:animate-[loading_1.5s_infinite]"></div>

                {/* Product name */}
                <div className="self-start w-full h-6 rounded-[6px] relative overflow-hidden bg-skeleton before:content-[''] before:absolute before:top-0 before:left-[-150px] before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[var(--shimmer-color-start)] before:via-[var(--shimmer-color-middle)] before:to-[var(--shimmer-color-end)] before:animate-[loading_1.5s_infinite]"></div>

                {/* Short text */}
                <div className="self-start w-[60%] h-6 rounded-[6px] relative overflow-hidden bg-skeleton before:content-[''] before:absolute before:top-0 before:left-[-150px] before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[var(--shimmer-color-start)] before:via-[var(--shimmer-color-middle)] before:to-[var(--shimmer-color-end)] before:animate-[loading_1.5s_infinite]"></div>

                {/* Button */}
                <div className="w-[45%] h-6 mt-8 rounded-xl relative overflow-hidden bg-skeleton before:content-[''] before:absolute before:top-0 before:left-[-150px] before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[var(--shimmer-color-start)] before:via-[var(--shimmer-color-middle)] before:to-[var(--shimmer-color-end)] before:animate-[loading_1.5s_infinite]"></div>
            </div>
        </div>
    );
}

export default Skeleton;

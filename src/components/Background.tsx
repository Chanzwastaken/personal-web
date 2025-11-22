"use client";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/20 blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
            </div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        </div>
    );
}
